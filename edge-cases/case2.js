const snapshot = require('snap-shot-it')

// https://github.com/bahmutov/snap-shot-it/issues/369
// case 2
// same test uses same exact name twice
// same value
it('a', () => {
  snapshot('foo', 1)
  snapshot('foo', 1)
})
