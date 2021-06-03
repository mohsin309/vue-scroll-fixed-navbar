<template>
  <div id="myHeader">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VueScrollFixedNavbar',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#myHeader{
  border:3px solid black;
  padding: 10px;
}
.sticky {
  width: 100%;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
