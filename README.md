# Vue Top Fixed Navbar

A Simple vue fixed navbar component which will help you to fix the top header or navbar while scrolling the screen.

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
