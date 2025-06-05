/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#F83758';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#000000',
    background: '#F5F5F5',
    cardBackground: '#FFFFFF',
    tabBarBackground: '#FFFFFF',
    tint: tintColorLight,
    primary: '#F83758',
    secondary: '#EB3030',
    icon: '#727272',
    tabIconDefault: '#727272',
    tabIconSelected: tintColorLight,
    gray: '#C9C9C9',
    lightGray: '#DFDFDF',
    darkGray: '#090909',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    cardBackground: '#FFFFFF',
    tabBarBackground: '#FFFFFF',
    tint: tintColorDark,
    primary: '#F83758',
    secondary: '#EB3030',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    gray: '#C9C9C9',
    lightGray: '#DFDFDF',
    darkGray: '#090909',
  },
};
