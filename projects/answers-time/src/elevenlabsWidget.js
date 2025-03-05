document.addEventListener("DOMContentLoaded", () => {
    // Catch DOM changes
    let targetWidget = document.querySelector("elevenlabs-convai").shadowRoot;
    let config = { attributes: true, childList: true, subtree: true };
    let observer = new MutationObserver(restyle);
    observer.observe(targetWidget, config);
});

export function restyle() {
    const host = document.querySelector("elevenlabs-convai");
    const root = host.shadowRoot;
    let wrapper = null;
    let box = null;

    // Watermark text
    try {
        wrapper = root.querySelector("div");
        const poweredBy = wrapper.querySelector("._poweredBy_me40k_322");
        poweredBy.remove();
    } catch (_) {}

    // Terms box
    try {
        wrapper = root.querySelector("._customContent_me40k_66");
        box = wrapper.querySelector("._box_me40k_37");
        box.style.margin = "10px";

        try {
            const termsWrapper = box.querySelector("._terms_me40k_351");
            const termsForm = termsWrapper.querySelector("form");
            const header = termsForm.querySelector("h4");
            const message = termsForm.querySelector("p");

            header.style.fontFamily = "Pixelated MS Sans Serif";
            message.style.fontFamily = "Pixelated MS Sans Serif";

            const termsFooter = termsWrapper.querySelector("._termsFooter_me40k_414");
            const buttons = termsFooter.querySelectorAll("button");
            buttons.forEach((button) => {
                button.style.fontFamily = "Pixelated MS Sans Serif";
                button.style.fontWeight = "bold";
                button.style.border = "2px outset";
                button.style.backgroundColor = "#c0c0c0";
            });
        } catch (_) {}
    } catch(_) {}

    try {
        wrapper = root.querySelector("div");
        box = wrapper.querySelector("._box_me40k_37");
        box.style.margin = "10px";

        // Feedback box
        let feedback = false;

        try {
            const feedbackBox = box.querySelector("._inlineFeedback_me40k_455");
            const message = feedbackBox.querySelector("span");
            message.style.fontFamily = "Pixelated MS Sans Serif";

            const buttons = feedbackBox.querySelectorAll("button")
            buttons.forEach((button) => {
                button.style.border = "2px outset";
                button.style.backgroundColor = "#c0c0c0";
            });
        } catch (_) {}
        if (feedback) { throw new Error(); }

        // Base box
        box.style.backgroundColor = "#c0c0c0";
        box.style.border = "2px outset";
        box.style.position = "absolute";
        box.style.bottom = "-15px";
        box.style.right = "-15px";

        // Main text
        try {
            const actions = box.querySelector("._actions_me40k_119");
            const text = actions.querySelector("p");

            text.style.color = "black";
            text.style.fontFamily = "Pixelated MS Sans Serif";

            const button = actions.querySelector("button");
            button.style.fontFamily = "Pixelated MS Sans Serif";
            button.style.border = "2px outset";
        } catch (_) {}

        // Button
        try {
            const buttonWrapper = box.querySelector("._actionButtons_me40k_137");
            const button = buttonWrapper.querySelector("button");
            button.style.fontFamily = "Pixelated MS Sans Serif";
            button.style.backgroundColor = "#c0c0c0";
            button.style.border = "2px outset";
        } catch (_) {}

        return;
    } catch(_) {}
}
