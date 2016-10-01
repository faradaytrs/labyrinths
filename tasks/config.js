module.exports = {
    script: {
        map: './',
        src: ['src/ts/**/*.{ts,tsx}', 'typings/**/*.d.ts'],
        dst: 'public/js'
    },

    style: {
        src: ['src/less/*.less'],
        dst: 'public/css'
    },

    copy: {
        src: 'src/html/*.*',
        dst: 'public'
    },

    vendor: {
        src: [
           'bower_components/require-css/css.js',
            'node_modules/react/dist/react.js',
            'node_modules/react-dom/dist/react-dom.js',
            'node_modules/requirejs/require.js'
        ],
        dst: 'public/vendor'
    },

    watch: {
        less: 'src/less/**/*.less',
        ts: 'src/ts/**/*.{ts,tsx}',
        css: 'public/css/**/*.css'
    }
}
