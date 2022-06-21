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
                    DEFAULT: "#F1F1F1",
                },
                white: {
                    DEFAULT: "#FFFFFF",
                },
                black: {
                    DEFAULT: "#000000",
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
