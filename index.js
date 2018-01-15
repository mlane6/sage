const Metalsmith = require('metalsmith');
const autotoc = require('metalsmith-autotoc');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const collect = require('metalsmith-auto-collections')
const layouts = require('metalsmith-layouts');

Metalsmith(__dirname)
  .metadata({
    title: "Sage",
    description: "A simple knowledge base and documentation static site generator.",
    organization: "Sage",
    author: "Brad Waropay"
  })
  .source('./src')
  .destination('./build')
  .use(collect({
    pattern: ['*.md', '**/*.md', '!index.md']
  }))
  .use(markdown())
  .use(permalinks())
  .use(autotoc(
    {selector: 'h2, h3'}
  ))
  .use(layouts({
    directory: 'layout',
    engine: 'pug',
    default: 'default.pug',
    pretty: true
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
