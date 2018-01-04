const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const collections = require('metalsmith-collections');
const collect = require('metalsmith-auto-collections');
const layouts = require('metalsmith-layouts');

Metalsmith(__dirname)
  .metadata({
    title: "Sage",
    description: "A simple knowledge base and documentation site generator."
  })
  .source('./src')
  .destination('./build')
  .use(collections({
    lore: {
      pattern: ['*.md', '!index.md'],
    }
  }))
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    directory: 'layout',
    engine: 'pug',
    default: 'default.pug'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
