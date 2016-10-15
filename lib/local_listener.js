var BaseListenerClass = require('./base_listener.js');


module.exports = class LocalListener extends BaseListenerClass {
  constructor(cacheInstance) {
    super(cacheInstance);
  }
};