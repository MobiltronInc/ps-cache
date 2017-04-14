var _ = require('lodash');


exports.D = {
  SEC: 1000,
  MINUTE: 60*1000,
  FIVE_MINUTES: 5*60*1000,
  TEN_MINUTES: 10*60*1000,
  THIRTY_MINUTES: 30*60*1000,
  HOUR: 60*60*1000,
  DAY: 24*60*60*1000,
  WEEK: 7*24*60*60*1000
};

exports.Cache = class Cache {
  constructor() {
    this.internalCache = {};
    this.listeners = [];
    this.timeouts = {};
  }

  has(key) {
    return this.internalCache[key] !== undefined;
  }

  checkAndRemoveTimeOut(key) {
    if (this.timeouts[key]) {
      clearTimeout(this.timeouts[key]);
      delete this.timeouts[key];
      return true;
    }

    return false;
  }

  remove(key, localOnly = false) {
    if (localOnly !== true) {
      _.forEach(this.listeners, l => {
        l.doDelete(key);
      });
    }

    if (this.internalCache[key]) {
      delete this.internalCache[key];
      this.checkAndRemoveTimeOut(key);
      return true;
    }

    return false;
  }
  
  set(key, value, opts = {}) {
    var selfCache = this;
    this.internalCache[key] = value;

    if (opts.ttl) {
      this.checkAndRemoveTimeOut(key);

      this.timeouts[key] = setTimeout(function() {
        if (opts.callback) {
          opts.callback(key, value, opts);
        }

        selfCache.remove(key);
        selfCache.checkAndRemoveTimeOut(key);
      }, opts.ttl);
    }

    return true;
  }

  get(key) {
    return this.internalCache[key] || null;
  }

  attachListener(listener) {
    this.listeners.push(listener);
  }
};


exports.BaseListener = require('./base_listener.js');

