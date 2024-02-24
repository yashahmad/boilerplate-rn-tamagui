import { shorthands } from '@tamagui/shorthands';
import { createTamagui, createTokens } from 'tamagui';
import { radius, size, space, zIndex } from "@tamagui/themes";
import { createInterFont } from "@tamagui/font-inter";
// import { createAnimations } from "@tamagui/animations-react-native";

// const animations = createAnimations({
//   bouncy: {
//     type: 'spring',
//     damping: 10,
//     mass: 0.9,
//     stiffness: 100,
//   },
//   lazy: {
//     type: 'spring',
//     damping: 20,
//     stiffness: 60,
//   },
//   quick: {
//     type: 'spring',
//     damping: 20,
//     mass: 1.2,
//     stiffness: 250,
//   },
// });

export const tokens = createTokens({
    size,
    space,
    radius,
    zIndex,
    color: {
        primary: '#9acd32',
        $true: '#000',
        primaryRGBA: 'rgba(154, 205, 50, 0.2)',
        defaultPress: '#8BB430',
        outlinePress: 'rgba(154, 205, 50, 0.6)',
        step0: '#ffffff',
        step50: '#f3f3f3',
        step100: '#e8e8e8',
        step150: '#dcdcdc',
        step200: '#d1d1d1',
        step250: '#c5c5c5',
        step300: '#b9b9b9',
        step350: '#aeaeae',
        step400: '#a2a2a2',
        step450: '#979797',
        step500: '#8b8b8b',
        step550: '#7f7f7f',
        step600: '#747474',
        step650: '#686868',
        step700: '#5d5d5d',
        step750: '#515151',
        step800: '#454545',
        step850: '#3a3a3a',
        step900: '#2e2e2e',
        step950: '#232323',
        step1000: '#000000',
    },
});

const headingFont = createInterFont();
const bodyFont = createInterFont({
    weight: {
        1: '300',
        2: '600',
    }
});
export default createTamagui({
    //   animations,
    themes: {
        light: {
            primary: tokens.color.primary,
            $true: '#000',
            primaryRGBA: tokens.color.primaryRGBA,
            defaultPress: tokens.color.defaultPress,
            outlinePress: tokens.color.outlinePress,
            step0: tokens.color.step0,
            step50: tokens.color.step50,
            step100: tokens.color.step100,
            step150: tokens.color.step150,
            step200: tokens.color.step200,
            step250: tokens.color.step250,
            step300: tokens.color.step300,
            step350: tokens.color.step350,
            step400: tokens.color.step400,
            step500: tokens.color.step500,
            step550: tokens.color.step550,
            step600: tokens.color.step600,
            step650: tokens.color.step650,
            step700: tokens.color.step700,
            step750: tokens.color.step750,
            step800: tokens.color.step800,
            step850: tokens.color.step850,
            step900: tokens.color.step900,
            step950: tokens.color.step950,
            step1000: tokens.color.step1000,
        },
    },
    tokens,
    shorthands,
    fonts: {
        heading: headingFont,
        body: bodyFont,
    },
});
