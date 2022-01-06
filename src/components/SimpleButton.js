import EventComponent from './EventComponent'


/* START OF COMPILED CODE */

class SimpleButton extends EventComponent {

    constructor(gameObject) {
        super(gameObject);

        this.gameObject = gameObject;
        gameObject["__SimpleButton"] = this;

        /* START-USER-CTR-CODE */

        gameObject.isButton = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {SimpleButton} */
    static getComponent(gameObject) {
        return gameObject["__SimpleButton"];
    }

    /** @type {Phaser.GameObjects.Sprite} */
    gameObject;
    /** @type {any} */
    hoverCallback = null;
    /** @type {any} */
    hoverOutCallback = null;
    /** @type {any} */
    callback = () => {};
    /** @type {boolean} */
    pixelPerfect = false;

    /* START-USER-CODE */

    start() {
        this.gameObject.setInteractive({
            cursor: 'pointer',
            pixelPerfect: this.pixelPerfect
        })

        this.gameObject.on('pointerover', () => this.onOver())
        this.gameObject.on('pointerout', () => this.onOut())
        this.gameObject.on('pointerup', () => this.onUp())
    }

    onOver() {
        if (this.hoverCallback) this.hoverCallback()
    }

    onOut() {
        if (this.hoverOutCallback) this.hoverOutCallback()
    }

    onUp() {
        this.callback()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default SimpleButton
