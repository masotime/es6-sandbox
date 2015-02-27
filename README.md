# Mucking around with ES6 and the Babel Transpiler

Quick notes:

* 1. `npm install -g babel` followed by `babel -d <targetdir> <sourcedir>` to transpile
* 2. `npm` has a `scripts.prepublish` that runs a command before publishing. Defining `scripts.compile` as the command above in #1 and using `npm run compile` as `scripts.prepublish` automatically transpiles before publishing
* 3. Add `babel` under `devDependencies` so that npm will add the `babel` executable to the path before running any scripts (in particular, `scripts.prepublish` as described above)
* 4. You'll need `npm install core-js` for additional features like `Map`, `Set` and `String.prototype.repeat`