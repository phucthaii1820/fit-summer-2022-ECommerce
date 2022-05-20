const CracoLessPlugin = require("craco-less");
const CracoAlias = require("craco-alias");

module.exports = {
    style: {
        postcss: {
            plugins: [require("tailwindcss"), require("autoprefixer")],
        },
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        // modifyVars: { "@primary-color": "#1DA57A" },
                        javascriptEnabled: true,
                    },
                },
            },
        },
        {
            plugin: CracoAlias,
            options: {
                source: "jsconfig",
                // baseUrl SHOULD be specified
                // plugin does not take it from jsconfig
                baseUrl: ".",
            },
        },
    ],
};
