let activeState = "";

// Prevents the right-click context menu from appearing
// This would remove the custom cursor temporarily
document.addEventListener('contextmenu', event => event.preventDefault());

// Prevents the right-click context menu from appearing
document.addEventListener('contextmenu', event => event.preventDefault());

// All positions and sizes are measured in image-scale-accurate pixels
const stateList = [
  { "name": "washington",       "pos": [17, 0],     "size": [50, 36],   "abbreviation": "wa" },
  { "name": "oregon",           "pos": [6, 22],     "size": [58, 48],   "abbreviation": "or" },
  { "name": "california",       "pos": [0, 60],     "size": [58, 104],  "abbreviation": "ca" },
  { "name": "nevada",           "pos": [30, 67],    "size": [47, 64],   "abbreviation": "nv" },
  { "name": "idaho",            "pos": [54, 9],     "size": [43, 70],   "abbreviation": "id" },
  { "name": "montana",          "pos": [69, 9],     "size": [80, 54],   "abbreviation": "mt" },
  { "name": "utah",             "pos": [67, 78],    "size": [38, 47],   "abbreviation": "ut" },
  { "name": "arizona",          "pos": [51, 120],   "size": [48, 61],   "abbreviation": "az" },
  { "name": "colorado",         "pos": [99, 90],    "size": [54, 41],   "abbreviation": "co" },
  { "name": "new_mexico",       "pos": [91, 126],   "size": [53, 60],   "abbreviation": "nm" },
  { "name": "wyoming",          "pos": [93, 57],    "size": [52, 39],   "abbreviation": "wy" },
  { "name": "north_dakota",     "pos": [144, 20],   "size": [45, 32],   "abbreviation": "nd" },
  { "name": "south_dakota",     "pos": [141, 48],   "size": [51, 33],   "abbreviation": "sd" },
  { "name": "nebraska",         "pos": [141, 74],   "size": [57, 31],   "abbreviation": "ne" },
  { "name": "kansas",           "pos": [147, 105],  "size": [57, 30],   "abbreviation": "ks" },
  { "name": "oklahoma",         "pos": [144, 131],  "size": [60, 30],   "abbreviation": "ok" },
  { "name": "texas",            "pos": [111, 137],  "size": [103, 104], "abbreviation": "tx" },
  { "name": "minnesota",        "pos": [185, 22],   "size": [53, 51],   "abbreviation": "mn" },
  { "name": "iowa",             "pos": [191, 71],   "size": [42, 34],   "abbreviation": "ia" },
  { "name": "missouri",         "pos": [198, 102],  "size": [45, 42],   "abbreviation": "mo" },
  { "name": "arkansas",         "pos": [204, 141],  "size": [36, 32],   "abbreviation": "ar" },
  { "name": "louisiana",        "pos": [210, 172],  "size": [46, 36],   "abbreviation": "la" },
  { "name": "wisconsin",        "pos": [215, 42],   "size": [43, 42],   "abbreviation": "wi" },
  { "name": "illinois",         "pos": [228, 81],   "size": [28, 51],   "abbreviation": "il" },
  { "name": "kentucky",         "pos": [243, 108],  "size": [54, 30],   "abbreviation": "ky" },
  { "name": "tennessee",        "pos": [236, 127],  "size": [63, 23],   "abbreviation": "tn" },
  { "name": "mississippi",      "pos": [228, 146],  "size": [29, 50],   "abbreviation": "ms" },
  { "name": "indiana",          "pos": [252, 87],   "size": [22, 36],   "abbreviation": "in" },
  { "name": "michigan",         "pos": [234, 34],   "size": [56, 57],   "abbreviation": "mi" },
  { "name": "alabama",          "pos": [254, 145],  "size": [28, 50],   "abbreviation": "al" },
  { "name": "ohio",             "pos": [273, 79],   "size": [29, 33],   "abbreviation": "oh" },
  { "name": "georgia",          "pos": [273, 143],  "size": [40, 42],   "abbreviation": "ga" },
  { "name": "florida",          "pos": [261, 179],  "size": [70, 54],   "abbreviation": "fl" },
  { "name": "new_york",         "pos": [304, 42],   "size": [58, 41],   "abbreviation": "ny" },
  { "name": "pennsylvania",     "pos": [302, 74],   "size": [41, 23],   "abbreviation": "pa" },
  { "name": "virginia",         "pos": [295, 102],  "size": [52, 27],   "abbreviation": "va" },
  { "name": "north_carolina",   "pos": [286, 122],  "size": [61, 28],   "abbreviation": "nc" },
  { "name": "south_carolina",   "pos": [289, 140],  "size": [43, 34],   "abbreviation": "sc" },
  { "name": "maine",            "pos": [356, 11],   "size": [28, 43],   "abbreviation": "me" },
  { "name": "new_hampshire",    "pos": [351, 33],   "size": [15, 28],   "abbreviation": "nh" },
  { "name": "vermont",          "pos": [343, 38],   "size": [14, 26],   "abbreviation": "vt" },
  { "name": "massachusetts",    "pos": [349, 57],   "size": [28, 15],   "abbreviation": "ma" },
  { "name": "rhode_island",     "pos": [362, 65],   "size": [7, 8],     "abbreviation": "ri" },
  { "name": "connecticut",      "pos": [349, 66],   "size": [15, 10],   "abbreviation": "ct" },
  { "name": "new_jersey",       "pos": [340, 78],   "size": [13, 22],   "abbreviation": "nj" },
  { "name": "delaware",         "pos": [337, 95],   "size": [13, 14],   "abbreviation": "de" },
  { "name": "maryland",         "pos": [311, 93],   "size": [38, 21],   "abbreviation": "md" },
  { "name": "west_virginia",    "pos": [291, 89],   "size": [24, 33],   "abbreviation": "wv" },
  { "name": "alaska",           "pos": [10, 177],   "size": [78, 66],   "abbreviation": "ak" },
  { "name": "hawaii",           "pos": [96, 208],   "size": [47, 34],   "abbreviation": "hi" }
];

let stateParks = {};
let fileList = [
  "acadia_me.png", "arches_ut.png", "badlands_sd.png", "big_bend_tx.png", "biscayne_fl.png",
  "black_canyon_of_the_gunnison_co.png", "bryce_canyon_ut.png", "canyonlands_ut.png", "capitol_reef_ut.png", "carlsbad_caverns_nm.png",
  "channel_islands_ca.png", "congaree_sc.png", "crater_lake_or.png", "cuyahoga_valley_oh.png", "death_valley_ca.png",
  "denali_np_&_p_ak.png", "dry_tortugas_fl.png", "everglades_fl.png", "gates_of_the_arctic_np_&_p_ak.png", "gateway_arch_mo.png",
  "glacier_bay_np_&_p_ak.png", "glacier_mt.png", "grand_canyon_az.png", "grand_teton_wy.png", "great_basin_nv.png",
  "great_sand_dunes_np_&_p_co.png", "great_smoky_mountains_tn.png", "guadalupe_mountains_tx.png", "haleakala_hi.png", "hawaii_volcanoes_hi.png",
  "hot_springs_ar.png", "indiana_dunes_in.png", "isle_royale_mi.png", "joshua_tree_ca.png", "katmai_np_&_p_ak.png",
  "kenai_fjords_ak.png", "kings_canyon_ca.png", "kobuk_valley_ak.png", "lake_clark_np_&_p_ak.png", "lassen_volcanic_ca.png",
  "mammoth_cave_ky.png", "mesa_verde_co.png", "mount_rainier_wa.png", "national_park_of_american_sa_as.png", "new_river_gorge_np_&_p_wv.png",
  "north_cascades_wa.png", "olympic_wa.png", "petrified_forest_az.png", "pinnacles_ca.png", "redwood_ca.png",
  "rocky_mountain_co.png", "saguaro_az.png", "sequoia_ca.png", "shenandoah_va.png", "theodore_roosevelt_nd.png",
  "virgin_islands_vi.png", "voyageurs_mn.png", "white_sands_nm.png", "wind_cave_sd.png", "wrangell-st._elias_np_&_p_ak.png",
  "yellowstone_wy.png", "yosemite_ca.png", "zion_ut.png"
];

// Global event listeners
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("return-button").addEventListener("click", () => {
    document.getElementById(activeState).click();
    document.getElementById("park-graph").src = "";
  });

  document.getElementById("ndata-button").addEventListener("click", () => {
    const self = document.getElementById("ndata-button");

    self.style.pointerEvents = "none";
    fadeStates();
    fadeNationalUI();

    setTimeout(() => {
      self.style.pointerEvents = "all";
    }, 900);

    if (self.textContent === "< View National Data >") {
      self.textContent = "< Return to Map >";
      document.getElementById("interactive-button").style.display = "block";
      return;
    }
    self.textContent = "< View National Data >";
    document.getElementById("interactive-button").style.display = "none";
  });

  document.getElementById("year-slider").addEventListener("input", () => {
    const self = document.getElementById("year-slider");
    const graph = document.getElementById("nat-ann");
    const label = document.getElementById("year-label");
    graph.src = `data/annual/img/${self.value}.png`;
    label.textContent = `Year: ${self.value}`;
  });

  document.getElementById("interactive-button").addEventListener("click", () => {
    const btn = document.getElementById("interactive-button");
    const otImg = document.getElementById("nat-ot");
    const annImg = document.getElementById("nat-ann");
    const slider = document.getElementById("year-slider");
    const label = document.getElementById("year-label");

    if (btn.textContent === "Static Graph") {
      btn.textContent = "Interactive Graph";
      otImg.style.display = "block";
      annImg.style.display = "none";
      slider.style.display = "none";
      label.style.display = "none";
      return;
    }

    btn.textContent = "Static Graph";
    otImg.style.display = "none";
    annImg.style.display = "block";
    slider.style.display = "block";
    label.style.display = "block";
  });
});

// Generate lists fo parks for each state
function generateStateData() {
  // Create list entries
  for (let state of stateList) {
    stateParks[state.name] = [];
    const stateAbv = state.abbreviation;
    for (let name of fileList) {
      const nameAbv = name.slice(-6).slice(0, 2);
      if (nameAbv === stateAbv) {
        stateParks[state.name].push(name);
      }
    }
  }
}

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

    obj.style.position = "absolute";
    obj.style.transformOrigin = "top left";

    // Apply flooring only to pixel offsets
    obj.style.top = Math.floor(spaceNS + state.pos[1] * scaleY) + "px";
    obj.style.left = Math.floor(spaceEW + state.pos[0] * scaleX) + "px";

    obj.style.width = (state.size[0] * scaleX) + "px";
    obj.style.height = (state.size[1] * scaleY) + "px";

    obj.style.transformOrigin = "center center";

    // Controls UI state loading
    obj.addEventListener("click", () => {
      const targetRect = document.getElementById("state-display").getBoundingClientRect();
      const parentRect = document.getElementsByClassName("map")[0].getBoundingClientRect();
      const objRect = obj.getBoundingClientRect();

      // Set up state-specific UI
      const graphImage = document.getElementById("state-graph");
      graphImage.src = `data/states/img/${obj.id}.png`;

      // Load in parks list
      clearList();
      for (let park of stateParks[obj.id]) {
        addToList(park);
      }

      if (activeState !== obj.id) {
        setTimeout(() => {
          fadeUI(obj.alt);
        }, 900);
        activeState = obj.id;

        fadeStates(obj.id)
        obj.style.pointerEvents = "none";
        obj.style.top = `${targetRect.top - parentRect.top + (targetRect.height / 2) - (objRect.height / 2)}px`;
        obj.style.left = `${targetRect.left - parentRect.left + (targetRect.width / 2) - (objRect.width / 2)}px`;
        return;
      }

      // Triggered by sim-click
      fadeUI("");
      setTimeout(() => { fadeStates(obj.id); obj.style.pointerEvents = "all"; activeState = ""; }, 900);
      obj.style.top = Math.floor(spaceNS + state.pos[1] * scaleY) + "px";
      obj.style.left = Math.floor(spaceEW + state.pos[0] * scaleX) + "px";
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
  const national = document.getElementById("national-data");

  if (activeState !== "") {
    national.style.opacity = national.style.opacity === "0" ? "1" : "0";
  }

  shadow.style.opacity = shadow.style.opacity === "0" ? "1" : "0";
  if (shadow.style.opacity === "0" && shadow.style.visibility !== "hidden") {
    setTimeout(() => {
      shadow.style.visibility = "hidden";
    }, 900);

    document.getElementById("park-select").style.visibility = "visible";
  } else if (shadow.style.opacity === "1" && shadow.style.visibility !== "visible") {
    shadow.style.visibility = "visible";
  }

  states.forEach(state => {
    if (state.id !== exclude) {
      state.style.opacity = state.style.opacity === "0" ? "1" : "0";
      state.style.pointerEvents = "none";

      if (state.style.opacity === "0" && state.style.visibility !== "hidden") {
        setTimeout(() => {
          state.style.visibility = "hidden";
        }, 900);
        return;
      }

      // Ensure that the state becomes visible when opacity is back to 1
      if (state.style.opacity === "1" && state.style.visibility !== "visible") {
        state.style.visibility = "visible";
        state.style.pointerEvents = "all";
      }
    }
  });
}

function fadeUI(text) {
  const display = document.getElementById("state-display");
  const info = document.getElementById("state-info");
  const name = document.getElementById("state-name");
  const returnBtn = document.getElementById("return-button");

  returnBtn.style.opacity = returnBtn.style.opacity === "1" ? "0" : "1";
  display.style.opacity = display.style.opacity === "1" ? "0" : "1";
  info.style.opacity = info.style.opacity === "1" ? "0" : "1";
  name.style.opacity = name.style.opacity === "1" ? "0" : "1";
  name.textContent = text;
}

function fadeNationalUI() {
  const box = document.getElementById('national-box');
  if (box.style.opacity === "1") {
    box.style.opacity = "0";
    setTimeout(() => {
      box.style.display = "none";
    }, 900);
    return;
  }

  box.style.opacity = "1";
  box.style.display = "block";
}

function addToList(itemText) {
  const ul = document.getElementById('park-list');
  const li = document.createElement('li');
  const button = document.createElement('button');

  let match = itemText.match("^.*(?=_)")[0];
  button.textContent = match.replace("_", " ").replace(/\b\w/g, (char) => char.toUpperCase());
  button.style.width = "calc(100% - 20px)";
  button.style.margin = "5px";

  button.onclick = () => {
    const graph = document.getElementById("park-graph");
    graph.src = `data/parks/img/${itemText}`;
    document.getElementById("park-select").style.visibility = "hidden";
  };

  li.appendChild(button);
  ul.appendChild(li);
}


function clearList() {
  const ul = document.getElementById('park-list');
  ul.innerHTML = '';
}
