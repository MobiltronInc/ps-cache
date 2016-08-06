var _ = require('lodash');


var _internalCache = {};


exports.isValidKey = function(key) {
  return _.has(_internalCache, key);
};


exports.delete = function(key) {
  delete _internalCache[key];
};


exports.set = function(key, value, opts) {
  _internalCache[key] = value;
  if (opts !== null) {
    setTimeout(opts.callback, opts.ttl);
  }
};


exports.get = function(key) {
  return _.get(_internalCache, key, null);
};