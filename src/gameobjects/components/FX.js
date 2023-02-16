/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2013-2023 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Effects = require('../fx/');

/**
 * Provides methods used for setting the FX values of a Game Object.
 * Should be applied as a mixin and not used directly.
 *
 * @namespace Phaser.GameObjects.Components.FX
 * @webglOnly
 * @since 3.60.0
 */

var FX = {

    fx: null,

    /**
     * The amount of extra padding to be applied to this Game Object
     * when it is being rendered by a PreFX or SpriteFX Pipeline.
     *
     * Lots of FX require additional spacing added to the texture the
     * Game Object uses, for example a glow or shadow effect, and this
     * method allows you to control how much extra padding is included
     * in addition to the texture size.
     *
     * @name Phaser.GameObjects.Components.FX#fxPadding
     * @type {number}
     * @default 0
     * @since 3.60.0
     */
    fxPadding: 0,

    /**
     * Sets the amount of extra padding to be applied to this Game Object
     * when it is being rendered by a PreFX or SpriteFX Pipeline.
     *
     * Lots of FX require additional spacing added to the texture the
     * Game Object uses, for example a glow or shadow effect, and this
     * method allows you to control how much extra padding is included
     * in addition to the texture size.
     *
     * @method Phaser.GameObjects.Components.FX#setFXPadding
     * @webglOnly
     * @since 3.60.0
     *
     * @param {number} [padding=0] - The amount of padding to add to the texture.
     *
     * @return {this} This Game Object instance.
     */
    setFXPadding: function (padding)
    {
        if (padding === undefined) { padding = 0; }

        this.fxPadding = padding;

        return this;
    },

    /**
     * This callback is invoked when this Game Object is copied by a PreFX Pipeline.
     *
     * This happens when the pipeline uses its `copySprite` method.
     *
     * It's invoked prior to the copy, allowing you to set shader uniforms, etc on the pipeline.
     *
     * @method Phaser.GameObjects.Components.FX#onFXCopy
     * @webglOnly
     * @since 3.60.0
     *
     * @param {Phaser.Renderer.WebGL.Pipelines.PreFXPipeline} pipeline - The PreFX Pipeline that invoked this callback.
     */
    onFXCopy: function ()
    {
    },

    /**
     * This callback is invoked when this Game Object is rendered by a PreFX Pipeline.
     *
     * This happens when the pipeline uses its `drawSprite` method.
     *
     * It's invoked prior to the draw, allowing you to set shader uniforms, etc on the pipeline.
     *
     * @method Phaser.GameObjects.Components.FX#onFX
     * @webglOnly
     * @since 3.60.0
     *
     * @param {Phaser.Renderer.WebGL.Pipelines.PreFXPipeline} pipeline - The PreFX Pipeline that invoked this callback.
     */
    onFX: function ()
    {
    },

    enableFX: function (padding)
    {
        var renderer = this.scene.sys.renderer;

        if (!renderer || !renderer.pipelines)
        {
            return this;
        }

        this.pipeline = renderer.pipelines.FX_PIPELINE;

        if (!this.fx)
        {
            this.fx = [];
        }

        if (padding !== undefined)
        {
            this.fxPadding = padding;
        }

        return this;
    },

    clearFX: function ()
    {
        //  Remove them all
    },

    removeFX: function ()
    {
        //  Remove specific fx
    },

    disableFX: function (clear)
    {
        this.resetPipeline();

        if (clear)
        {
            this.clearFX();
        }
    },

    addFX: function (fx)
    {
        if (!this.fx)
        {
            this.enableFX();
        }

        this.fx.push(fx);

        return fx;
    },

    addGlowFX: function ()
    {
        return this.addFX(new Effects.Glow(this));
    },

    addShadowFX: function ()
    {
        return this.addFX(new Effects.Shadow(this));
    },

    addPixelateFX: function ()
    {
        return this.addFX(new Effects.Pixelate(this));
    },

    addVignetteFX: function ()
    {
        return this.addFX(new Effects.Vignette(this));
    },

    addShineFX: function ()
    {
        return this.addFX(new Effects.Shine(this));
    },

    addBlurFX: function ()
    {
        return this.addFX(new Effects.Blur(this));
    },

    addGradientFX: function ()
    {
        return this.addFX(new Effects.Gradient(this));
    },

    addBloomFX: function ()
    {
        return this.addFX(new Effects.Bloom(this));
    },

    addColorMatrixFX: function ()
    {
        return this.addFX(new Effects.ColorMatrix(this));
    },

    addCircleFX: function ()
    {
        return this.addFX(new Effects.Circle(this));
    },

    addBarrelFX: function ()
    {
        return this.addFX(new Effects.Barrel(this));
    },

    addDisplacementFX: function ()
    {
        return this.addFX(new Effects.Displacement(this));
    },

    addWipeFX: function ()
    {
        return this.addFX(new Effects.Wipe(this));
    }

};

module.exports = FX;
