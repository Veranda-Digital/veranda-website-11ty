const fs = require('fs');

module.exports = function (eleventyConfig) {
    eleventyConfig.addCollection('publishedNews', function (collectionApi) {
        return collectionApi.getFilteredByTag('news').filter((item) => !item.data.draft);
    });

    eleventyConfig.addCollection('newsTypes', function (collectionApi) {
        const types = [
            ...new Set(
                collectionApi
                    .getFilteredByTag('news')
                    .filter((item) => !item.data.draft)
                    .map((item) => item.data.newsType || 'News')
            )
        ];
        return types.sort();
    });

    eleventyConfig.addFilter('getNewsNeighbors', function (collection, currentUrl) {
        const articles = [...collection].sort((a, b) => a.date - b.date);
        const index = articles.findIndex((item) => item.url === currentUrl);
        if (index === -1) return { prev: null, next: null };

        return {
            prev: index > 0 ? articles[index - 1] : null,
            next: index < articles.length - 1 ? articles[index + 1] : null
        };
    });

    eleventyConfig.addShortcode('articleImage', function ({ src, alt = '', position = '', variant = 'inline' }) {
        const styleAttr = position ? ` style="object-position: ${position};"` : '';

        if (variant === 'full') {
            return `<div class="w-full overflow-hidden rounded-[20px]"><img class="w-full object-contain"${styleAttr} src="${src}" alt="${alt}" /></div>`;
        }

        return `<img class="w-full rounded-[20px] object-cover"${styleAttr} src="${src}" alt="${alt}" />`;
    });

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

    eleventyConfig.addPassthroughCopy('./node_modules/aos/dist');

    // Eleventy configuration
    return {
        dir: {
            input: 'src',
            output: '_site',
            includes: '_includes'
        },

        // Files read by Eleventy, add as needed
        markdownTemplateEngine: 'html',
        templateFormats: ['html', 'md', 'txt', 'liquid', 'jpg', 'jpeg', 'gif', 'png', 'webmanifest', 'woff', 'woff2', 'js', 'svg', 'webp', 'gif'],
        passthroughFileCopy: true
    };
};
