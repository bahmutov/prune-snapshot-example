const snapshot = require('snap-shot-it')

// https://github.com/bahmutov/snap-shot-it/issues/369
// case 3
// same final snapshot name formed from the context + test names
// "foo works 1"
// same or different value
context('foo', () => {
  it('works', () => {
    snapshot(1)
  })
})
it('foo works', () => {
  snapshot(100)
})
