# typescript-todo-project
Practising TypeScript by creating to do list with DOM 

Default workflow to start a TypeScript project by running those commands in terminal:

* `tsc --init`
* `mkdir src`
* `mkdir dist`
* `npm install touch-cli -g`
* `touch src/index.ts`
* Go to `tsconfig.json` and change `"outDir"` value to `".dist"`
* Scroll down to the bottom insert "," to the last bracket and add `"include": ["src"]`
* Go for watch mode with tsc -w
* Add `<script src="dist/index.js"></script>` to make it work in browser
* `npm init -y` to install `package.json`