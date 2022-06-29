module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                yellow: {
                    light: "#F5B301",
                    dark: "#CF9033",
                },
                gray: {
                    default: "#F1F1F1",
                    dark: "#979797",
                    extra_dark: "#797979",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    mode: "JIT",
};
