# Vue Top Fixed Navbar

Simple vue fixed header component

## Installation

With build systems

```
npm install --save vue-top-fixed-navbar
```

```
yarn add vue-top-fixed-navbar
```

### To make the plugin available globally

In your `main.js`:

```javascript
import VueTopFixedNavbar from "vue-top-fixed-navbar";

Vue.use(VueTopFixedNavbar);
```

### To include only in specific components

```javascript
import {VueTopFixedNavbar} from "vue-top-fixed-navbar";

export default {
    name: 'YourComponent',
    components: {
        VueTopFixedNavbar
    }
}
````

## Usage

```javascript
<template>
    <VueTopFixedNavbar>
        your content
    </VueTopFixedNavbar>
</template>
```

## Open Source License

You may use it under the terms of the [MIT Licenses](https://opensource.org/licenses/MIT)
