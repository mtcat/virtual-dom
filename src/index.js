const el = require('./element');
const diff = require('./diff');
const patch = require('./patch');
const dom = { el, diff, patch };

module.exports = dom;
