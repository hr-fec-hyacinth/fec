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

> The `npm run prod` script creates the css file, uses webpack/babel to build the bundle file, then start the express server that servers up the bundle. See [Additional Info](#additional-info) for more information on these tools

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Git Tools
Make New Branch and Push:
```she
git checkout -b branch-name
git add .
git commmit -m "Text"
git push origin branch-name
```


Resolve Merge Conflict locally:
```she
git checkout dev
git pull origin dev
git checkout branch-name
git merge dev
```


## Development

### Git Workflow
> The main branch is used for production code only and should only be pushed to from dev branch after testing. The dev branch is used to stage changes from feature branches. Feature branches are used for all four of the main widgets while new branches off dev are opened for bug fixes.


### Installing Dependencies
From within the root directory:

```sh
npm install -g webpack
npm install
```

### Active Development
Run both of the below commands in seperate terminals. Webpack is setup to [hot reload](https://blog.bitsrc.io/webpacks-hot-module-replacement-feature-explained-43c13b169986), so when a file is saved the webpage should update.
```she
npm run dev
npm run tail
```

## Additional Info
Used this [Repo](https://github.com/DaltonHart/HowTo-React-Webpack-Babel/blob/main/README.md) for setting up this project with React, Babel, and Webpack.
<br>
For inline css styling [tailwindcss](https://tailwindcss.com/) was used. It has been configured to create and ```output.css``` file in the public folder that styles the app.
<br>
For creating an extremely simple server to serve the ```bundle.js``` file [express](https://expressjs.com/) was used. This was setup in ```index.js```