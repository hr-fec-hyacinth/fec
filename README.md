# FEC - Hyacinth

> The goal of this project was to create a front end website that allows a user to interact with a specific product. The website is titled 'Swan' and contains four sections that were completed by each team member. Every click on the website sends an interaction to the api supplied by the business requirements. The color scheme of the website adjusts based on whether a user has dark mode or light mode enabled.

## Table of Contents

1. [Usage](#Usage)
2. [Modules](#modules)
3. [Tech Stack](#tech-stack)
4. [Git Tools](#git-tools)
5. [Development](#development)
6. [Installing Dependencies](#installing-dependencies)
7. [Additional Info](#additional-info)
8. [Contributors](#contributors)

## Usage

> The `npm run prod` script creates the css file, uses webpack/babel to build the bundle file, then start the express server that servers up the bundle. See [Additional Info](#additional-info) for more information on these tools

## Tech Stack
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![Node](https://img.shields.io/badge/-Node-9ACD32?logo=node.js&logoColor=white&style=for-the-badge)
![Express](https://img.shields.io/badge/-Express-DCDCDC?logo=express&logoColor=black&style=for-the-badge)
![Axios](https://img.shields.io/badge/-Axios-671ddf?logo=axios&logoColor=black&style=for-the-badge)


## Modules

### Overview - Jon

> The top of the page shows an overview of the current product. An image carousel displays on the left side of the screen, allowing the user to click on thumbnails or arrows to change the current image. Clicking on an image will open up an expanded view. This expanded view opens another carousel that displays the images at the size of the screen. Clicking on an image in expanded view will increase the zoom by 2.5 and clicking again will go back to the normal view.

> On the right side of the screen is the product details and the cart. The social media icons display at the top with the star ratings. Clicking on the number of ratings will take the user down the the Ratings & Reviews section. Underneath the product details, a list of styles appear as clickable icons. Clicking on these will update the images in the carousel and the product information. The cart allows the user to select both a size and quantity, and sends an api call to add the product to the user cart.

### Questions and Answers - Nathan

> The Questions and Answers section is made up of many nested objects, but its main components are the search bar, the question, and the answer. There are buttons to expand and collapse both the questions and answers, as well as the option to add both a question and answer. When either is added, a modal appears and blurs the rest of the screen, allowing the user to focus on the entry. Within the answer modal, users can also upload pictures that will be displayed as thumbnails. Overall, the design of this section is clean and free of distractions, making it easy for the user to find the answer they are seeking.

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

### Deploying with environment variables
> By default, a browser is unable to access the environment variables stored in a .env file. To make this information available, dotenv and process libraries were installed. At the top of our webpack file, we will invoke the config command from dotenv. This gives webpack access to the environment variables. New environment plugins needed to be added to the webpack plugin array for each variable in the env file. To prevent 'process not defined' errors, we need to require the process module at the top of the webpack file. The webpack resolve needs to have an alias that matches 'process' to 'process/browser'. Lastly, we need to provide a new plugin to webpack, giving an object that matches 'process' to 'process/broswer'.

### Installing Dependencies
From within the root directory:

```sh
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

## Contributors

<a href="https://github.com/hr-fec-hyacinth/fec/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hr-fec-hyacinth/fec" />
</a>