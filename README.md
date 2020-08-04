# vue-clicker

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Instructions for Jake

Once you've cloned the repo and checked out onto this branch, run `npm i` in your console. This will download the libraries needed to run the app.

As it says above use command `npm run serve` to run the app. Then go to http://localhost:8080/ to see the app.

## Basic description of the site

This is a cookie clicker style app, looks very basic, was mainly made to learn more about how to use vue than anything else.

You click the button in the centre to get more 'clicks' which you can then use to buy items at the 'shop' above the button which will give you a certain amount of clicks per second. Some items will not be unlocked until you have enough of another item. You can look into the code to find out which item this is.

## Basic layout of the app

This app is split up into 3 components and 1 container/view/whatever vue calls it.

### Config.js

This file contains the `items` object which contains (surprisingly) the items that are displayed at the top of the page, and some other information about them. It's in the file because it's long and it's best to keep files as short as possible. It's imported and used in `App.vue`

### Components

A component is a chunk of html, css and js that is called in the html of view/container. Think of it like a class in java/c#, it should be as small as possible and idealy only do one thing.

Components will often have outputs and inputs. In vue the inputs are put into the `props` part of the component. Outputs are sent using the `emit` method

#### MainButton

This is the button in the centre of the page that the user clicks to manually increase their number of clicks. It has an output to signal when it's been clicked

#### Score

This is the part of the page that shows how many clicks the user has. It takes an input of the number of clicks the user has

#### Shop

This is the part at the top of the page, it shows the items that have been unlocked by the user, it also allows the user to buy more of the unlocked items. It has an input of the items object. It has an output to signal when an item has been bought

### Container

A container is a component that 'contains' multiple other smaller components. This app only has one `App.vue` which contains most of the js, but little html/css compared to the other components.

# Ideas for what to add

First off just mess around with the code. Add `console.log()`'s (a print statement) to different functions to see when they're used/what they do. Just mess around with it to figure out what's going on.

## HTML/CSS

As you can see the page looks very basic. You mentioned that you didn't know much html/css so this might be a way to learn some by trying to make the page look better. This will mean mainly editing the components.

## JS

Currently the cost of each item always stays the same. This means that eventually the iteam will be able to produce enough clicks to buy itself every second, this isn't great. You could try to make the cost increase every time a new item is bought.

# Final notes

If you have any questions about how it works then just send me a message I'm not busy today so I def have time.

If you have any questions when you're adding the html/css/js ideas then it's probably best to start with googling it (finding out stuff yourself generally helps you learn it quicker), but if you still can't figure out what to do then just hmu