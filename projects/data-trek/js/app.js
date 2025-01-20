// Prevents the right-click context menu from appearing
// This would remove the custom cursor temporarily
document.addEventListener('contextmenu', event => event.preventDefault());

// Prevents the right-click context menu from appearing
document.addEventListener('contextmenu', event => event.preventDefault());

// All positions and sizes are measured in image-scale-accurate pixels
const stateList = [
  { "name": "washington",   "pos": [17, 0],   "size": [50, 36]    },
  { "name": "oregon",       "pos": [6, 22],   "size": [58, 48]    },
  { "name": "california",   "pos": [0, 60],   "size": [58, 104]   },
  { "name": "nevada",       "pos": [30, 67],  "size": [47, 64]    },
  { "name": "idaho",        "pos": [54, 9],   "size": [43, 70]    },
  { "name": "montana",      "pos": [69, 9],   "size": [80, 54]    },
  { "name": "utah",         "pos": [67, 78],  "size": [38, 47]    },
  { "name": "arizona",      "pos": [51, 120], "size": [48, 61]    },
  { "name": "colorado",     "pos": [99, 90],  "size": [54, 41]    },
  { "name": "new_mexico",   "pos": [91, 126], "size": [53, 60]    },
  { "name": "wyoming",      "pos": [93, 57],  "size": [52, 39]    },
  { "name": "north_dakota", "pos": [144, 20], "size": [45, 32]    },
  { "name": "south_dakota", "pos": [141, 48], "size": [51, 33]    },
  { "name": "nebraska",     "pos": [141, 74], "size": [57, 31]    },
  { "name": "kansas",       "pos": [147, 105],"size": [57, 30]    },
  { "name": "oklahoma",     "pos": [144, 131],"size": [60, 30]    },
  { "name": "texas",        "pos": [111, 137],"size": [103, 104]  },
  { "name": "minnesota",    "pos": [185, 22], "size": [53, 51]    },
  { "name": "iowa",         "pos": [191, 71], "size": [42, 34]    },
  { "name": "missouri",     "pos": [198, 102], "size": [45, 42]    },
  { "name": "arkansas",     "pos": [204, 141], "size": [36, 32]    },
  { "name": "louisiana",    "pos": [210, 172],"size": [46, 36]    },
];

/*
 * Draws all vine borders to fit the outer edges of the screen using pixel-prefect canvases
 *
 * This will probably be changes to use pixel-perfect images because it is easier
 * Eventually this needs to be able to handle window/viewport resizing
 */
function loadVineBorders() {
  const canvases = document.getElementsByTagName("canvas");
  const vineImgTop = new Image();
  const vineImgBottom = new Image();
  const vineImgLeft = new Image();
  const vineImgRight = new Image();

  // Set image sources
  vineImgTop.src = "img/vines/VinesTop.png";
  vineImgBottom.src = "img/vines/VinesBottom.png";
  vineImgLeft.src = "img/vines/VinesLeft.png";
  vineImgRight.src = "img/vines/VinesRight.png";

  // Wait for all images to load before drawing
  Promise.all([
    loadImage(vineImgTop),
    loadImage(vineImgBottom),
    loadImage(vineImgLeft),
    loadImage(vineImgRight)
  ])
    .then(() => {
      for (let canvas of canvases) {
        let tileWidth = 0, tileHeight = 0;
        const context = canvas.getContext("2d");

        // Enable pixel-perfect drawing
        convertCanvas(canvas, context);

        // N & S canvases
        if (canvas.id === "top" || canvas.id === "bottom") {
          const img = canvas.id === "top" ? vineImgTop : vineImgBottom;
          tileHeight = 30;
          tileWidth = img.width * (tileHeight / img.height);

          for (let i = 0; i < canvas.width; i += tileWidth) {
            context.drawImage(
              img,
              i,
              0,
              tileWidth,
              tileHeight
            );
          }
        } else if (canvas.id === "left" || canvas.id === "right") {
          // E & W canvases
          if (canvas.id === "left" || canvas.id === "right") {
            const img = canvas.id === "left" ? vineImgLeft : vineImgRight;
            tileWidth = 30;
            tileHeight = img.height * (tileWidth / img.width);

            for (let i = 0; i < canvas.height; i += tileHeight) {
              context.drawImage(
                img,
                0,
                i,
                tileWidth,
                tileHeight
              );
            }
          }
        }
      }

      // Trigger fade out of loading overlay
      const overlay = document.getElementById("overlay");
      setTimeout(() => {
        overlay.style.opacity = "0";
        setTimeout(() => overlay.style.display = 'none', 1000);
      }, 1000);
    })
    .catch(error => {
      console.error("An error occurred while loading images:", error);
    });
}

// Helper function for loading images
function loadImage(img) {
  return new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
  });
}

/*
 * Converts a canvas to enable pixel-perfect size & context
 */
function convertCanvas(canvas, context) {
  // Scale context to remove blurriness
  canvas.width = canvas.clientWidth * window.devicePixelRatio;
  canvas.height = canvas.clientHeight * window.devicePixelRatio;

  // Scale canvas back to correct size
  canvas.style.width = `${canvas.clientWidth}px`;
  canvas.style.height = `${canvas.clientHeight}px`;

  // Disable nearest-neighbor smoothing
  context.imageSmoothingEnabled = false;
}

/*
 * Scales and places all states onto the map with the correct relative sizing and positioning
 * Values are read from the global list stateList, positions are from the top-left stored as [x, y],
 * and sizes are in pixels, true to the original image, stored as [width, height].
 *
 * Eventually this needs to be able to handle window/viewport resizing
 */
function setupStates() {
  const mapImage = document.querySelector('#map');
  const mapContainer = document.querySelector('.map');
  const containerWidth = mapContainer.clientWidth;
  const containerHeight = mapContainer.clientHeight;

  const aspectRatio = mapImage.naturalWidth / mapImage.naturalHeight;

  let renderedWidth, renderedHeight;
  if (containerWidth / containerHeight > aspectRatio) {
    // Constrained by height
    renderedHeight = containerHeight;
    renderedWidth = renderedHeight * aspectRatio;
  } else {
    // Constrained by width
    renderedWidth = containerWidth;
    renderedHeight = renderedWidth / aspectRatio;
  }

  // Calculate space for positioning offsets (floored for pixel snapping)
  const spaceEW = Math.floor((containerWidth - renderedWidth) / 2);
  const spaceNS = Math.floor((containerHeight - renderedHeight) / 2);

  // Calculate scaling factors without flooring
  const scaleX = renderedWidth / mapImage.naturalWidth;
  const scaleY = renderedHeight / mapImage.naturalHeight;

  for (let state of stateList) {
    const obj = document.getElementById(state.name);
    obj.title = capitalizeWords(state.name);

    obj.style.position = "absolute"; // Ensure absolute positioning
    obj.style.transformOrigin = "top left";

    // Apply flooring only to pixel offsets
    obj.style.top = Math.floor(spaceNS + state.pos[1] * scaleY) + "px";
    obj.style.left = Math.floor(spaceEW + state.pos[0] * scaleX) + "px";

    // Use exact scaling for size (no flooring to avoid shrinking)
    obj.style.width = (state.size[0] * scaleX) + "px";
    obj.style.height = (state.size[1] * scaleY) + "px";

    obj.style.transformOrigin = "center center";

    obj.addEventListener("click", () => {
      fadeStates(obj.id)
      obj.style.top = "0px";
      obj.style.left = "0px";
    });
  }
}

function capitalizeWords(str) {
  return str
    .replaceAll('_', ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Mouse effect generation from zutomayomart.net
// $(function() {
//   const body = $("body");
//   let flag = true;
//
//   // Mousemove event
//   $(document).on("mousemove", function(e) {
//     if (flag) {
//       const x = e.clientX;
//       const y = e.clientY;
//
//       const star = $("<span>").attr("class", "star");
//
//       star.css({
//         "top": y + "px",
//         "left": x + "px"
//       });
//
//       body.prepend(star);
//       setTimeout(function() {
//         star.remove();
//       }, 1500);
//
//       flag = false;
//       setTimeout(function() {
//         flag = true;
//       }, 120);
//     }
//   });
//
//   // Touchmove event
//   $(document).on("touchmove", function(e) {
//     if (flag) {
//       const x = event.changedTouches[0].clientX;
//       const y = event.changedTouches[0].clientY;
//
//       const star = $("<span>").attr("class", "star");
//
//       star.css({
//         "top": y + "px",
//         "left": x + "px"
//       });
//
//       body.prepend(star);
//       setTimeout(function() {
//         star.remove();
//       }, 1500);
//
//       flag = false;
//       setTimeout(function() {
//         flag = true;
//       }, 100);
//     }
//   });
// });

function fadeStates(exclude) {
  const states = document.querySelectorAll(".state");
  const shadow = document.getElementById("map");

  shadow.style.opacity = shadow.style.opacity === "0" ? "1" : "0";

  states.forEach(state => {
    console.log(state.id);
    if (state.id !== exclude) {
      state.style.opacity = state.style.opacity === "0" ? "1" : "0";
    }
  });
}
