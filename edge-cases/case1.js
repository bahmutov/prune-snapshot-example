const snapshot = require('snap-shot-it')

// https://github.com/bahmutov/snap-shot-it/issues/369
// case 1
// two different tests use same snapshot name
// same value
it('a', () => {
  snapshot('foo', 1)
})
it('b', () => {
  snapshot('foo', 1)
})
