"use strict";


module.exports = class BaseListener {
  constructor(cacheInstance) {
    this.cache = cacheInstance;
  }

  onDelete(key) {
    this.cache.remove(key, true);
  }

  doDelete(key) {

  }
};
