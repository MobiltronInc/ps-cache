"use strict";


module.exports = class BaseListener {
  constructor(cache) {
    this.cache = cache;
  }

  onDelete(key) {
    this.cache.remove(key, true);
  }

  doDelete(key) {

  }
};
