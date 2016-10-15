"use strict";


module.exports = class BaseListener {
  constructor(cacheInstance) {
    this.cache = cacheInstance;
  }

  onReceiveMessage() {
    // no implementation on base class
  }

  sendMessage() {
    // no implementation on base class
  }

  doInvalidate(key) {
    // invalidate a
  }
};
