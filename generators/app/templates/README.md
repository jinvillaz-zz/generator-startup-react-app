# start_up_react_app

# About
> startup-react-app basic example with modern technologies.

Out of the box it comes with support for:
- React 16
- Ui-material
- React-router
- Webpack 3
- Ecmascript 6 via Babel-Loader
- Style languages (sass, scss)
- Style transformations via PostCSS
- Automatic code linting via esLint
- Ability to unit test components via jest
- Code coverage with jest 
- Hot-reload

## Changes since version 0.0.1
This example is written in ES2015. This means it is ___not compatible with node.js versions before 8.9.4___.


## Installation
```bash
# Make sure both is installed globally
npm install -g yarn
```

## Setting up projects
```bash
# Clone the project
git clone https://github.com/jinvillaz/start_up_react_app.git

```

### Install dependencies

```
# cd into project
cd startup-react-app

# install dependencies 
yarn
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
