require('./src/utils/sort-by-display-order.js');

module.exports = config => {
    // Returns work items, sorted by display order
    config.addCollection('work', collection => {
        return collection
            .getFilteredByGlob('./src/work/*.md')
            .sortByDisplayOrder();
    });

    // Returns work items, sorted by display order then filtered by featured
    config.addCollection('featuredWork', collection => {
        return collection
            .getFilteredByGlob('./src/work/*.md')
            .sortByDisplayOrder()
            .filter(x => x.data.featured);
    });

    // Set directories to pass through to the dist folder
    config.addPassthroughCopy('./src/images/');

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};
