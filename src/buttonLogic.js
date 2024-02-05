import ContentManager from "./contentManager";

class ButtonLogic {
    constructor() {
        this.contentManager = new ContentManager();
    }

    disableButton(button) {
        button.disabled = true;
        button.classList.add("disabled");
    }

    enableOtherButtons(clickedButton) {
        const buttons = document.querySelectorAll("button");
        buttons.forEach(button => {
            if (button !== clickedButton) {
                button.disabled = false;
                button.classList.remove("disabled");
            }
        });
    }

    handleClick(button, content) {
        this.contentManager.generateContent(content);
        this.disableButton(button);
        this.enableOtherButtons(button);
    }
}

export default ButtonLogic;