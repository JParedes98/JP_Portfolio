/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        extend: {
            colors: {
                transparent: colors.transparent,
                current: colors.current,

                white: colors.white,
                black: colors.black,

                state: colors.state,
                gray: colors.gray,
                zinc: colors.zinc,
                neutral: colors.neutral,
                stone: colors.stone,
                red: colors.red,
                amber: colors.amber,
                yellow: colors.yellow,
                lime: colors.lime,
                green: colors.green,
                esmerald: colors.esmerald,
                teal: colors.teal,
                cyan: colors.cyan,
                sky: colors.sky,
                blue: colors.blue,
                indigo: colors.indigo,
                violet: colors.violet,
                purple: colors.purple,
                fuchsia: colors.fuchsia,
                pink: colors.pink,
                rose: colors.rose,

                theme: {
                    50:  'var(--theme-color-50)',
                    100: 'var(--theme-color-100)',
                    200: 'var(--theme-color-200)',
                    300: 'var(--theme-color-300)',
                    400: 'var(--theme-color-400)',
                    500: 'var(--theme-color-500)',
                    600: 'var(--theme-color-600)',
                    700: 'var(--theme-color-700)',
                    800: 'var(--theme-color-800)',
                    900: 'var(--theme-color-900)',
                    950: 'var(--theme-color-950)',
                },
            },
            fontFamily: {
                'sans': ['"Orbitron", serif',],
            },
        },
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: [
            {
                mine: {
                    "primary": "#358ce7",
                    "primary-content": "#d1dbff",
                    "secondary": "#ff00d3",
                    "secondary-content": "#fff8fd",
                    "accent": "#00d7c0",
                    "accent-content": "#00110e",
                    "neutral": "#3d4451",
                    "neutral-content": "#d7dde4",
                    "base-100": "#ffffff",
                    "base-200": "#f2f2f2",
                    "base-300": "#e5e6e6",

                    "base-content": "#1f2937",
                    "info": "#00b5ff",
                    "info-content": "#000000",
                    "success": "#00a96e",
                    "success-content": "#000000",
                    "warning": "#ffbe00",
                    "warning-content": "#000000",
                    "error": "#ff5861",
                    "error-content": "#000000",
                }
            }
        ],
        darkTheme: false,
        base: true,
        styled: true,
        utils: true,
        prefix: "",
        logs: true,
        themeRoot: ":root",
    },
};
