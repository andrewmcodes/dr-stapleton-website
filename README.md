# Ann Stapleton Personal Site

## **Getting Started**
To get started, clone the project and install the dependencies:
```
npm install
```
Then run the following command in your terminal:
```
npm run watch
```

### **Prerequisites**
In order to install the node dependencies, you will need to install Node.js and NPM, or use Yarn.

#### **Homebrew**
First, install Homebrew
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Then run `brew update` to make sure Homebrew is up to date

```
brew update
```

Next, add Homebrew's location to your $PATH in your `.bash_profile` or `.zshrc` file.

```
export PATH="/usr/local/bin:$PATH"
```

#### **NPM**
Install Node.js (NPM will be installed with Node):
```
brew install node
```
To make sure everything downloaded correctly, run the following command
```
npm -v
```
If all went well, you should get a version number like `6.1.0`

## **Tools and Technologies**

### **Tools**

Recommended development tool is [VS Code](https://code.visualstudio.com/). You can use a different editor, but VS Code has a nice variety of plugins like [Live Reload](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) which make development much easier.

You will also need a good terminal. If you you use VS Code, there is one built in. If not, I recommend [Archipelago](https://github.com/npezza93/archipelago) or [iTerm2](https://www.iterm2.com/). I would also suggest using ZSH over Bash. Read more [here](https://github.com/robbyrussell/oh-my-zsh)

You will also need to ensure you have [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed on your computer. Simply execute the following command to get the project
```
git clone https://github.com/andrewmcodes/dr-stapleton-website.git
```

### **Technologies**

This website heavily relies on the following technologies:
1. [Webpack](https://webpack.js.org/)
2. [PostCSS](https://github.com/postcss/postcss)
3. [TailwindCSS](https://tailwindcss.com/)

## **Tailwind CSS**
This project is built primarly with Tailwind CSS. Tailwind is a utility-first CSS framework for rapidly building custom user interfaces. Tailwind provides highly composable, low-level utility classes that make it easy to build complex user interfaces without encouraging any two sites to look the same. Tailwind provides tools for extracting component classes from repeated utility patterns, making it easy to update multiple instances of a component from one place. Tailwind is written in PostCSS and configured in JavaScript, which means you have the full power of a real programming language at your fingertips.

By using this framework, we are able to extract our CSS into components for easy editing. When you run the `npm run watch` command, Tailwind transform their Javascript utilities into CSS, along with any other custom CSS, into the `./dist/styles.css` file, which is what the site looks for to grep styles. All changes should be made in the `./src/styles.css` file and by running `npm run watch` or `npm run dev`, these changes will be put in your `./dist/styles.css` folder, and ready to go live.

### **Why TailwindCSS?**

Tailwind CSS is a way to stay consistent and build design systems. Component extraction is currently a widely used trend and forces consistently throughout the website. If you would like to update a style, it will persit throughout the application, making editing very easy.

## **Adding to your UCNW People Server**

Please consult this [link](https://uncw.edu/ITSD/working/uploadwebfiles.html) for instructions on how to upload your site to the UNCW People Server.
