module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
<<<<<<< HEAD
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
=======
                'yellow': {
                  light: '#F5B301',
                  dark: '#CF9033',
                },
                'gray': {
                    DEFAULT: '#F1F1F1'
                }
              },
>>>>>>> main
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
    mode: "JIT",
};
