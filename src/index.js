import VueScrollFixedNavbar from './components/VueScrollFixedNavbar'

export {
  VueScrollFixedNavbar
}

function registerComponents (Vue) {
  Vue.component('VueScrollFixedNavbar', VueScrollFixedNavbar)
}

const plugin = {
  install(Vue) {
    const finalOptions = Object.assign({}, {
      installComponents: true,
    })
    if (finalOptions.installComponents) {
      registerComponents(Vue)
    }
    // Vue.component(component.name, component);
  }
};

export default plugin

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
