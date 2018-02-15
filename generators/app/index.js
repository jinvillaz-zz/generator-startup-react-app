const Generator = require('yeoman-generator');
const yosay = require('yosay');
const path = require('path');

class ReactGenerator extends Generator {

    prompting() {
        this.log(
            yosay(
                `Hello! This generator add React,
                styled-components and some useful tools and libraries.
                Auto-generate boilerplate code react app with webpack 3,
                react 16, ui-material, sass style, unit test and code coverage
                with jests, eslint, ecmascript 6, babel translate.`
            )
        );
        const array = this.env.cwd.split('/');
        const prompts = [{
            type: 'input',
            name: 'appName',
            message: 'Your project name',
            // Defaults to the project's folder name if the input is skipped
            default: this.appName || array[array.length - 1]
        }, {
            type: 'input',
            name: 'authorName',
            message: 'Your name',
            default: this.authorName
        }, {
            type: 'confirm',
            name: 'mkdirBool',
            message: 'Would you like to create a folder?',
            default: true
        }];

        return this.prompt(prompts.slice(0, 2)).then(props => {
            this.inputs = props;
            this.appName = this.inputs.appName.trim().split(' ').join('-');
            this.authorName = this.inputs.authorName.trim().split(' ').join('-');
        });
    }

    writing() {
        const copyPath = this.appName;

        // Copy package.json
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath(path.join(copyPath, 'package.json')), {
                appName: this.appName,
                authorName: this.authorName
            }
        );

        // All other files & directories
        this.fs.copy(
            [
                this.templatePath('**.js'),
                this.templatePath('.eslintrc.js'),
                this.templatePath('.babelrc'),
                this.templatePath('.eslintignore'),
                this.templatePath('.gitignore'),
                this.templatePath('env.json'),
                this.templatePath('yarn.lock'),
                this.templatePath('README.md'),
                this.templatePath('src'),
                this.templatePath('jest'),
                this.templatePath('assets'),
                this.templatePath('server')
            ], this.destinationPath(copyPath)
        );
    }

    install() {
        // Install dependencies in new directory
        const yarndir = path.join(process.cwd(), this.appName);
        process.chdir(yarndir);
        this.yarnInstall();
    }
}

module.exports = ReactGenerator;
