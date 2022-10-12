const fs = require('fs');

module.exports = function (eleventyConfig) {
    // Watch CSS files for changes
    eleventyConfig.setBrowserSyncConfig({
        files: './_site/css/**/*.css'
    });

    // Don't ignore the same files ignored in the git repo
    eleventyConfig.setUseGitIgnore(false);

    // eleventyConfig.addPassthroughCopy('style');

    // Eleventy configuration
    return {
        dir: {
            input: 'src',
            output: '_site',
            includes: '_includes'
        },

        // Files read by Eleventy, add as needed
        markdownTemplateEngine: 'html',
        templateFormats: ['css', 'html', 'md', 'txt', 'liquid', 'jpg', 'gif', 'png', 'webmanifest'],
        passthroughFileCopy: true
    };
};
