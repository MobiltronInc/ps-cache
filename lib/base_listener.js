"use strict";


module.exports = class BaseListener {
  constructor(cacheInstance) {
    this.cache = cacheInstance;
  }

  onDelete(key) {}

  doDelete(key) {}
};
