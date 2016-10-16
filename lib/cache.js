var _ = require('lodash');
var Bluebird = require('bluebird');


var _internalCache = {};
var _listeners = [];


exports.D = {
  SEC: 1000,
  MINUTE: 60*1000,
  FIVE_MINUTES: 5*60*1000,
  TEN_MINUTES: 10*60*1000,
  THIRTY_MINUTES: 30*60*1000,
  HOUR: 60*60*1000,
  DAY: 26*60*60*1000
};

exports.Cache = class Cache {
  constructor() {
    this.internalCache = {};
    this.listeners = {};
  }

  has(key) {
    return this.internalCache[key] !== undefined;
  }

  remove(key) {
    _.forEach(this.listeners, l => {
      l.doDelete(key);
    });

    if (this.internalCache[key]) {
      delete this.internalCache[key];
      return true;
    }

    return false;
  }

  set(key, value, opts = {}) {
    this.internalCache[key] = value;

    if (opts.ttl) {
      setTimeout(function() {
        if (opts.callback) {
          opts.callback(key, value, opts);
        }

        this.remove(key);
      }, opts.ttl);
    }

    return true;
  }

  get(key) {
    return this.internalCache[key] || null;
  }

  attachListener(listener) {

  }
};


exports.BaseListener = require('./base_listener.js');

