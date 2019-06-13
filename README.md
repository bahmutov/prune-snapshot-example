Example of not pruning second snapshot for https://github.com/bahmutov/snap-shot-core/issues/265

Debug output with `DEBUG=snap-shot* npm t`

```
snap-shot-it the test run was a success +0ms
snap-shot-it pruning snapshots +0ms
snap-shot-it seen 1 spec +1ms
snap-shot-it [ { file: '/Users/gleb/git/prune-snapshot-example/spec.js',
snap-shot-it     specName: 'works' } ] +0ms
snap-shot-core pruning snapshots +0ms
snap-shot-core run time tests +0ms
snap-shot-core [ { file: '/Users/gleb/git/prune-snapshot-example/spec.js',
snap-shot-core     specName: 'works' } ] +0ms
snap-shot-core:verbose spec file "/Users/gleb/git/prune-snapshot-example/spec.js" has name "spec.js" and snapshot folder __snapshots__ +5ms
snap-shot-core:verbose formed filename __snapshots__/spec.js +0ms
snap-shot-core:verbose full resolved name /Users/gleb/git/prune-snapshot-example/__snapshots__/spec.js +0ms
snap-shot-core:verbose from spec /Users/gleb/git/prune-snapshot-example/spec.js got snap filename /Users/gleb/git/prune-snapshot-example/__snapshots__/spec.js +0ms
snap-shot-core loading snapshots from /Users/gleb/git/prune-snapshot-example/__snapshots__/spec.js +5ms
snap-shot-core have 1 name before pruning +1ms
snap-shot-core [ 'works' ] +0ms
snap-shot-core after pruning remaining 2 names +1ms
snap-shot-core [ 'works 1', 'works 2' ] +0ms
snap-shot-core nothing to prune for file /Users/gleb/git/prune-snapshot-example/spec.js +0ms
snap-shot-it deleting snap-shot-it from cache +3ms
```

Both snapshots remain in [__snapshots__/spec.js](__snapshots__/spec.js) even if the second one should have been removed.
