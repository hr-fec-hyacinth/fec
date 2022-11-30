# FEC - Hyacinth

> Front End Capstone for Team Hyacinth. The project goal is to design a commerical website based on the business documents provided.

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Git Tools](#git-tools)
4. [Development](#development)
5. [Installing Dependencies](#installing-dependencies)
6. [Additional Info](#additional-info)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Git Tools
```she
Make New Branch and Push:
git checkout -b branch-name
git add .
git commmit -m "Text"
git push origin branch-name


Resolve Merge Conflict:
git checkout dev
git pull origin dev
git checkout branch-name
git merge master
```

## Development

### Environment Strategy
```sh
main - Primary Branch to hold the working application
dev - Branch where edits will be pushed into. This will be merged with main after testing.
```

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Additional Info
Used this [Repo](https://github.com/DaltonHart/HowTo-React-Webpack-Babel/blob/main/README.md) for project setup
