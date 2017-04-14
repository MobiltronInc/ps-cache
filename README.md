# ps-cache

[![Build Status](https://travis-ci.org/MobiltronInc/ps-cache.svg?branch=master)](https://travis-ci.org/MobiltronInc/ps-cache)
[![GitHub issues](https://img.shields.io/github/issues/MobiltronInc/ps-cache.svg)](https://github.com/MobiltronInc/ps-cache/issues)
[![Dependency Status](https://david-dm.org/mobiltroninc/ps-cache.svg)](https://github.com/MobiltronInc/ps-cache)

A simple, yet efficient in memory caching mechanism. With extensibility in our mind we created ps-cache.

__Features__
* In memory caching
* Listeners to extend invalidation of cache mechanism via any medium.

## Getting Started
```javascript
var psCache = require('ps-cache');
var cache = new pscache.Cache();

//Set to cache and time to live 30 minutes
cache.set(key, value,{ ttl: cache.D.THIRTY_MINUTES });

//Set to cache without TTL
cache.set(key, value);

//Get from cache or null if doesn't exists
cache.get(key);

//Delete local only
cache.delete(key, true);

//Delete and notify any attached listener(s)
cache.delete(key);
```

For creating a global cache invalidation listener see [pusher-ps-cache](https://github.com/MobiltronInc/pusher-ps-cache) implementation.

## Requirements
Node.js >= 6.0

## Installation
With [npm](https://www.npmjs.com/) do:

```ruby
npm install ps-cache -save
```
## Running the tests
With [npm](https://www.npmjs.com/) do:

```ruby
npm test
```

## About

<img src="https://github.com/mobiltroninc/Foundation/blob/master/ASSETS/mobiltron_square.png?raw=true" width="70" />

This project is funded and maintained by [Mobiltron, Inc.](http://mobiltron.com). We :heart: open source software!

Check out our other [open source projects](https://github.com/mobiltroninc/) or say :wave: on twitter [@mobiltron](https://twitter.com/mobiltron).

## Contribute

Contributions are welcome :metal: We encourage developers like you to help us improve the projects we've shared with the community. Please see the [Contributing Guide](https://github.com/mobiltroninc/Foundation/blob/master/CONTRIBUTING.md) and the [Code of Conduct](https://github.com/mobiltroninc/Foundation/blob/master/CONDUCT.md).

## Authors

* **Vassilios Karakoidas** - *Initial work* - [Mobiltron, Inc.](http://mobiltron.com)
* **Stavros Schizas** - *Supporting work* - [Mobiltron, Inc.](http://mobiltron.com)

See also the list of [contributors](https://github.com/MobiltronInc/ps-cache/contributors) who participated in this project.

## License

ps-cache is available under the MIT license. See the [LICENSE](LICENSE.md) file for more info.
