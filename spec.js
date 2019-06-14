const snapshot = require('snap-shot-it')

it('works', () => {
  snapshot('foo')
  snapshot('bar')
})

it('works again', () => {
  snapshot(42)
  snapshot(101)
  // throw new Error('nope')
})

it('uses exact spec name', () => {
  snapshot('this name', 1)
  snapshot('this name again', 2)
})
