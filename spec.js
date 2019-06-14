const snapshot = require('snap-shot-it')

it('works', () => {
  snapshot('foo')
  snapshot('bar')
})

it('works again', () => {
  snapshot(42)
  snapshot(101)
})
