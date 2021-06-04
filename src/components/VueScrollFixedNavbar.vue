<template>
  <Preview :isFixed="isFixed">
    <div id="myHeader">
      <slot></slot>
    </div>
  </Preview>
</template>

<script>
import Preview from './common/Preview'

export default {
  name: 'VueScrollFixedNavbar',
  props: {
    isFixed: {
      type: Boolean,
      default: true
    }
  },
  components: {
    Preview
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {

      window.onscroll = function () {myFunction()}
      const header = document.getElementById('myHeader')
      const sticky = header.offsetTop

      function myFunction () {
        if (window.pageYOffset > sticky) {
          header.classList.add('sticky')
        } else {
          header.classList.remove('sticky')
        }
      }
    }
  }
}
</script>

