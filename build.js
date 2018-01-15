const Metalsmith = require('metalsmith');
const collect = require('metalsmith-auto-collections')
const markdown = require('metalsmith-markdown');
const autotoc = require('metalsmith-autotoc');
const filter = require('metalsmith-filter');
const permalinks = require('metalsmith-permalinks');
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
  .use(filter([
    '*',
    '!src/**/*.md'
  ]))
  .use(markdown())
  .use(autotoc(
    {selector: 'h2, h3'}
  ))
  .use(permalinks())
  .use(layouts({
    directory: 'layout',
    engine: 'pug',
    default: 'default.pug',
    pretty: true
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
