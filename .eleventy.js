const fs = require('fs');

module.exports = function (eleventyConfig) {
    // Watch CSS files for changes
    eleventyConfig.setBrowserSyncConfig({
        files: './_site/css/**/*.css'
    });

    // Don't ignore the same files ignored in the git repo
    eleventyConfig.setUseGitIgnore(false);

    // eleventyConfig.addPassthroughCopy('style');
    eleventyConfig.addPassthroughCopy('src/_redirects');

    eleventyConfig.addWatchTarget('./styles/tailwind.config.js');
    eleventyConfig.addWatchTarget('./styles/tailwind.css');

    eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' });

    // Eleventy configuration
    return {
        dir: {
            input: 'src',
            output: '_site',
            includes: '_includes'
        },

        // Files read by Eleventy, add as needed
        markdownTemplateEngine: 'html',
        templateFormats: ['html', 'md', 'txt', 'liquid', 'jpg', 'gif', 'png', 'webmanifest', 'woff', 'woff2', 'mp4', 'js', 'svg'],
        passthroughFileCopy: true
    };
};
