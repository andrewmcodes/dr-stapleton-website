# Dr. Ann E. Stapleton's Personal Site

Dr. Ann E. Stapleton's personal website. Designed and developed by Onshore Studios.

- [Dr. Ann E. Stapleton's Personal Site](#dr-ann-e-stapletons-personal-site)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
      - [git](#git)
      - [Node.js](#nodejs)
      - [NPM](#npm)
      - [Gatsby CLI](#gatsby-cli)
  - [Resources](#resources)
    - [Recommended Development Tools](#recommended-development-tools)
    - [Documentation](#documentation)
  - [Making Changes](#making-changes)
    - [Format and lint](#format-and-lint)
    - [Build your site](#build-your-site)
    - [Deploy](#deploy)
    - [Updating Assets](#updating-assets)
    - [Updating Content](#updating-content)
    - [Styles](#styles)
      - [TailwindCSS](#tailwindcss)
      - [Custom CSS](#custom-css)

## Getting Started

Getting started is easy, assuming you have the relevant dependencies. Clone the project and install the dependencies:

```sh
git clone https://github.com/andrewmcodes/dr-stapleton-website
cd dr-stapleton-website
npm run develop
```

The project should now be running on [localhost:8000](http://localhost:8000/).

### Prerequisites

In order to contribute to this project, you will need to make sure you have the following:

- git
- Node.js
- NPM (or Yarn)
- Gatsby CLI

#### git

Most non-Windows operating systems have git installed by default. Follow the [official documentation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) if you have any trouble.

To make sure everything downloaded correctly, run the following command:

```sh
git --version
```

If all went well, you should get a version number like `git version 2.21.0`

#### Node.js

- [Official download](https://nodejs.org/en/download/)
- [Via package manager](https://nodejs.org/en/download/package-manager/)

To make sure everything downloaded correctly, run the following command:

```sh
node -v
```

If all went well, you should get a version number like `v11.12.0`

#### NPM

NPM is automatically installed with Node.js.

To make sure everything downloaded correctly, run the following command:

```sh
npm -v
```

If all went well, you should get a version number like `6.9.0`

#### Gatsby CLI

Install Gatsby CLI with the following command:

```sh
npm install -g gatsby-cli
```

Check the [official documentation](https://www.gatsbyjs.org/docs/quick-start) for more information.

## Resources

### Recommended Development Tools

- [VS Code](https://code.visualstudio.com/)
- [Archipelago](https://github.com/npezza93/archipelago)

### Documentation

- [Gatsby documentation](https://www.gatsbyjs.org/docs/)
- [Tailwind documentation](https://tailwindcss.com/docs/what-is-tailwind/)
- [Prettier documentation](https://prettier.io/docs/en/index.html)
- [ESLint documentation](https://eslint.org/docs/user-guide/configuring)

## Making Changes

### Format and lint

- `npm run analyze` - See what ESLint and Prettier can fix
- `npm run fix` - Run Prettier and ESLint with the `--fix` option

### Build your site

Use `npm run build` to build your site for production.

### Deploy

Please consult this [link](https://uncw.edu/ITSD/working/uploadwebfiles.html) for instructions on how to upload your site to the UNCW People Server.

### Updating Assets

Assets are typically referred to as external content that is loaded in to the site like pictures and documents.

If you would like to change out an asset, there are two steps:

1. Find the actual asset. These will all be located in `./src/` folder. Simply delete the existing asset and copy in your new asset.
2. Unless the asset has the **exact** name of the old asset, you will have to update the reference. Simply search the HTML for the name of your asset (e.g. my-cv.pdf) and replace with the name of your new asset. Unless you move the asset, which there is no reason to do, you just have to change the file name.

### Updating Content

Changing content is pretty simple and should not break any of the styling due to the component based style implemented. Simply find the content in the HTML, delete it, and paste in your new content.

### Styles

#### TailwindCSS

Styling on this website is done via TailwindCSS base classes or custom CSS classes that extend the Tailwind classes. Refer to the [Tailwind documentation](https://tailwindcss.com/docs/what-is-tailwind/) for help.

#### Custom CSS

Because of the component architecture of this site, changing the styling of a custom CSS class will change every element that uses that class across the site. To change a class, navigate to `./src/css/styles.css`, find the class you want to change, e.g. `.btn`, and update the styles.
