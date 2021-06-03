# Vue Scroll Fixed Navbar

A Simple vue scroll fixed navbar package which will help you to fix the top header or navbar while scrolling the screen.

## Demo

[![view vue-lazytube](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-scroll-fixed-navbar-jumxd?file=/src/App.vue)

## Installation

With build systems

```
npm install --save vue-scroll-fixed-navbar
```

```
yarn add vue-scroll-fixed-navbar
```

### To make the plugin available globally

In your `main.js`:

```javascript
import VueScrollFixedNavbar from "vue-scroll-fixed-navbar";

Vue.use(VueScrollFixedNavbar);
```

### To include only in specific components

```javascript
import {VueScrollFixedNavbar} from "vue-scroll-fixed-navbar";

export default {
    name: 'YourComponent',
    components: {
        VueScrollFixedNavbar
    }
}
````

## Usage

```javascript
<template>
    <VueScrollFixedNavbar>
        your content
    </VueScrollFixedNavbar>
</template>
```

## Open Source License

You may use it under the terms of the [MIT Licenses](https://opensource.org/licenses/MIT)
