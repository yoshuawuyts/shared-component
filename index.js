var assert = require('assert')

var cache = window.__shared_component = window.__shared_component || {}
var handlers = window.__shared_component_handlers = window.__shared_component_handlers || {}

exports.oncreate = function (name, cb) {
  assert.equal(typeof name, 'string', 'shared-component: name should be type string')
  assert.equal(typeof cb, 'function', 'shared-component: cb should be type function')

  handlers[name] = cb
}

exports.create = function (name, fn) {
  var element = cache[name]
  if (element) return element

  var handler = handlers[name]
  assert.ok(handler, 'shared-component: no registered handler found for ' + name)

  element = handler(fn)
  assert.ok(element, 'shared-component: no element returned from the handler for ' + name)

  cache[name] = element
  return element
}
