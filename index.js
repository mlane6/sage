const Metalsmith  = require('metalsmith');
const markdown    = require('metalsmith-markdown');
const layouts     = require('metalsmith-layouts');
const permalinks  = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .metadata({
    title: "Sage",
    description: "A simple knowledge base and documentation site generator."
  })
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    engine: 'pug',
    default: 'default.pug',
    directory: 'layout',
    pattern: '**/*.md'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
