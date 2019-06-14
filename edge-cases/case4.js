const snapshot = require('snap-shot-it')

// https://github.com/bahmutov/snap-shot-it/issues/369
// case 2b
// same test uses same exact name twice
// different values
it('a', () => {
  snapshot('foo', 1)
  snapshot('foo', 22)
})
