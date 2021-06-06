# Vue Scroll Fixed Navbar

A Simple vue scroll fixed navbar package which will help you to fix the top header or navbar while scrolling the screen.

## Demo

[![view vue-scroll-fixed-navbar](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vue-scroll-fixed-navbar-jumxd?file=/src/App.vue)

## Buy Me a Coffee
[![Support me on Patreon](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Fshieldsio-patreon.vercel.app%2Fapi%3Fusername%3Dseeratawan%26type%3Dpledges&style=for-the-badge)](https://patreon.com/mohsin_ali)

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

## API

### Props
| Name | Type | Default Value | Description | Required |
| ------ | ------ | ------ | ------ | ------ |
| `isFixed` | `Boolean` | `true` | Defines whether to fixed the header or not. | `false` |


## Example
In order to stop fixing the navbar or header pass props

```javascript
<template>
    <VueScrollFixedNavbar :isFixed="false">
        your content
    </VueScrollFixedNavbar>
</template>
```


## Open Source License

You may use it under the terms of the [MIT Licenses](https://opensource.org/licenses/MIT)
