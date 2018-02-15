# generator-startup-react-app

> Yeoman generator for [ReactJS](https://www.npmjs.com/package/react) - lets you quickly set up a project,
 including jest for unit test and code coverage runner and [Webpack](https://www.npmjs.com/package/webpack) module system.

# About
Generator-startup-react-app will help you build new React projects using modern technologies.

Out of the box it comes with support for:
- React 16
- Ui-material
- React-router
- Webpack 3
- ES2015 via Babel-Loader
- Different supported style languages (sass, scss)
- Style transformations via PostCSS
- Automatic code linting via esLint
- Ability to unit test components via jest
- Code coverage with jest 
- Hot-reload

## Changes since version 0.0.6
This generator is written in ES2015. This means it is ___not compatible with node.js versions before 8.9.4___.


If you are interested, feel free to write your own generator and use generator-startup-react-app as a base (via composition).

## Installation
```bash
# Make sure both is installed globally
npm install -g yo
npm install -g generator-startup-react-app
npm install -g yarn
```

## Setting up projects
```bash
# Create a new directory, and `cd` into it:
mkdir my-new-project && cd my-new-project

# Run the generator
yo startup-react-app
```

## Usage
The following commands are available in your project:
```bash
# Start for development
yarn run dev

# Start the dev-server with the dist version
yarn run start

# Just build the dist version and copy static files
yarn run build

# Run unit tests and get code coverage
yarn run test

# Auto-run unit tests on file changes
yarn run test:auto

# Lint all files in src (also automatically done AFTER tests are run)
yarn run eslint

```

## Contribute
Contributions are welcomed. When submitting a bugfix, write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.


## License
[MIT license](http://opensource.org/licenses/mit-license.php)
