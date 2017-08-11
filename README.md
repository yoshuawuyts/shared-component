# shared-component
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Share a component instance inside a window context. A component is created
once, and cached so the same component is returned on all following calls.

## Usage
```js
var shared = require('shared-component')
var html = require('html')

shared.oncreate('header', function (header) {
  return header()
})

var header1 = shared.create('header', createHeader)
var header2 = shared.create('header', createHeader)

console.log(header1 === header2)
// => true

function createHeader () {
  return html`
    <header>I'm a header</header>
  `
}
```

## API
### `shared.oncreate(name, cb(createComponent))`
Handle the creation of a new component. Only called the first time
`shared.create(name, create)` is called with the matching `name`.

### `component = shared.create(name, createComponent)`
Create a component instance. If it's the first time that a component is created
it calls the corresponding `shared.oncreate(name, cb)` method. Will return the
initialized component on all subsequent calls.

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/shared-component.svg?style=flat-square
[3]: https://npmjs.org/package/shared-component
[4]: https://img.shields.io/travis/yoshuawuyts/shared-component/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/shared-component
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/shared-component/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/shared-component
[8]: http://img.shields.io/npm/dm/shared-component.svg?style=flat-square
[9]: https://npmjs.org/package/shared-component
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
