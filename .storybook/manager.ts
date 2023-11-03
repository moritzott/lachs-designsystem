import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
    theme: create({
        base: "light",

        fontBase: '"Lato", sans-serif', // TODO: load from local font file 
        fontCode: 'monospace',

        brandTitle: "a design system for life",
        brandUrl: "https://github.com/moritzott/lachs-designsystem",
        brandImage: "/lachs-logo-2.png",
        brandTarget: "_self",

        //
        colorPrimary: '#ff7f50',
        colorSecondary: '#585C6D',
        // colorSecondary: '#ff7f50',

        // UI
        appBg: '#ffffff',
        appContentBg: '#ffffff',
        appBorderColor: '#585C6D',
        appBorderRadius: 4,

        // Text colors
        textColor: '#10162F',
        textInverseColor: '#ffffff',

        // Toolbar default and active colors
        barTextColor: '#9E9E9E',
        barSelectedColor: '#585C6D',
        barBg: '#ffffff',

        // Form colors
        inputBg: '#ffffff',
        inputBorder: '#10162F',
        inputTextColor: '#10162F',
        inputBorderRadius: 2,
    })
});