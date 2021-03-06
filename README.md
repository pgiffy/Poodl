# Poodl

[![Build Status](https://travis-ci.org/dog-house-development/poodl.svg?branch=dev)](https://travis-ci.org/dog-house-development/poodl)
[![Coverage Status](https://coveralls.io/repos/github/dog-house-development/poodl/badge.svg?branch=dev&service=github)](https://coveralls.io/github/dog-house-development/poodl?branch=dev&service=github)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/63b5098b43bc458ea3e5ef8de9f5bc8b)](https://www.codacy.com/app/DogHouseDevelopment/poodl?utm_source=github.com&utm_medium=referral&utm_content=dog-house-development/poodl&utm_campaign=Badge_Grade)
[![Github Version](https://img.shields.io/github/release/dog-house-development/poodl.svg?style=flat)](https://github.com/dog-house-development/poodl/releases)

_Welcome to Poodl!_ Find our application at [https://poodl.herokuapp.com/](https://poodl.herokuapp.com/ 'poodl'). Read [our wiki](https://github.com/dog-house-development/poodl/wiki 'poodl wiki') to learn more.

Project Presentation Slides are available [here](https://drive.google.com/open?id=1fdZ4rtndXsAyTBywn6YVjPrGIAKfaGF_ 'Presentation Slides').

## Sites

**Development:** [poodl-dev.herokuapp.com](http://poodl-dev.herokuapp.com/)

**Production:** [poodl.herokuapp.com](http://poodl-dev.herokuapp.com/)

## Setup for Development

### Read development documentation

Please read our [development documentation](https://github.com/dog-house-development/poodl/wiki/Developer-Documentation)
before starting to develop for our project.

### Ensure that you have yarn, npm, and node installed

If you are not sure if you do, type `yarn -v`, `node -v`,
and `npm -v`, and it will either say `command not found`
or tell you a version number.

If any of the above are not installed, using homebrew,
type `brew install yarn`

Installing yarn will also install node and npm

or, if yarn is installed without node or npm,
`brew install node`. npm comes with node

We are on `yarn 1.13`, `npm 6`, and `node 8-11`

Make sure you have the correct yarn installed.
If none of the commands are working, like `yarn -v`,
then uninstall that yarn and get the correct one

### Clone the repository onto your computer

Clone the repository

```bash
git clone git@github.com:dog-house-development/poodl.git
```

Change directory to poodl

```bash
cd poodl
```

### Install dependencies

To install all dependencies, run:

```bash
yarn install-all
```

### Add config/secrets.js

We keep our database key secret, ask doghousedevelop@gmail.com to
join our slack to have access to our keys.
Make sure you only use our dev database.

```js
// config/secrets.js
module.exports = {
    mongoURI: '<mongo database secret key>'
};
```

You can also start a local mongo database and use that key instead.
See [installing mongodb](https://docs.mongodb.com/manual/installation/).

### Start development server

To start the development server, run:

```bash
yarn start:dev
```

Instead of adding a secrets.js file you can export the
mongo uri as an environment variable:

```bash
export MONGO_URI=<mongodb uri> yarn start:dev
```

### Testing

To run react component tests (located in sibling `tests` folders of component files):

```bash
yarn test:client
```

To run API tests (located in `/test/`):

```bash
yarn test:server
```

To run selenium tests (located in `/test/selenium`):

Start the client app

```bash
yarn start:client
```

In a separate shell run the tests:

```bash
yarn test:selenium
```

### Publish your changes

To merge your changes into production, follow the
merge strategy
[here.](https://github.com/dog-house-development/poodl/wiki/Git-Merging-Strategy)
