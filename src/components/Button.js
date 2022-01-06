import SimpleButton from './SimpleButton'


/* START OF COMPILED CODE */

class Button extends SimpleButton {

    constructor(gameObject) {
        super(gameObject);

        this.gameObject = gameObject;
        gameObject["__Button"] = this;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {Button} */
    static getComponent(gameObject) {
        return gameObject["__Button"];
    }

    /** @type {Phaser.GameObjects.Sprite} */
    gameObject;
    /** @type {string} */
    spriteName = "";
    /** @type {any} */
    hoverCallback = null;
    /** @type {any} */
    hoverOutCallback = null;
    /** @type {any} */
    callback = () => {};
    /** @type {boolean} */
    activeFrame = true;
    /** @type {boolean} */
    pixelPerfect = false;

    /* START-USER-CODE */

    start() {
        super.start()
        this.gameObject.on('pointerdown', () => this.onDown())
    }

    onOver() {
        this.gameObject.setFrame(`${this.spriteName}-hover`)
        super.onOver()
    }

    onOut() {
        this.gameObject.setFrame(this.spriteName)
        super.onOut()
    }

    onDown() {
        if (this.activeFrame) {
            this.gameObject.setFrame(`${this.spriteName}-active`)
        } else {
            this.gameObject.setFrame(`${this.spriteName}-hover`)
        }
    }

    onUp() {
        if (this.activeFrame) {
            this.gameObject.setFrame(this.spriteName)
        } else {
            this.gameObject.setFrame(`${this.spriteName}-hover`)
        }

        super.onUp()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Button
