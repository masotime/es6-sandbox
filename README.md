# Mucking around with ES6 and the Babel Transpiler

(Starting point - [this excellent article](http://mammal.io/articles/using-es6-today/))

Quick notes:

1. `npm install -g babel` followed by `babel -d <targetdir> <sourcedir>` to transpile
2. `npm` has a `scripts.prepublish` that runs a command before publishing. Defining `scripts.compile` as the command above in #1 and using `npm run compile` as `scripts.prepublish` automatically transpiles before publishing
3. Add `babel` under `devDependencies` so that npm will add the `babel` executable to the path before running any scripts (in particular, `scripts.prepublish` as described above)
4. You'll need `npm install core-js` for additional features like `Map`, `Set` and `String.prototype.repeat`

# What I've fiddled with

see [ES6 Features](https://github.com/lukehoban/es6features)

1. Arrows (as MapReduce)
2. Spread Arguments (I wish you could put them before a single argument, e.g. `(...args, callback)`)
3. Better Object (the ability to have dynamic keys with `[ <some expression> ] : <some value>` is very convenient)
4. Destructure (it's interesting how `{go: here, also: there} => { go: 'one', also: 'two'}` assigns `here` and `there`)
5. Iterators (these are seriously powerful, but you'd need to think hard for a use case. Generators are a subset of iterators)
6. Person (classes... meh...)

# What's left

* Map, Set, WeakMap, WeakSet
* Proxies
* Symbols
* Subclassable Built-Ins
* Math + Number + String + Object APIs
* Binary and Octal Literals
* Promises
* Reflect (???)
* Tail Call Optimization (unsupported, sadly)