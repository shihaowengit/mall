import Toast from './Toast'
const obj = {}

obj.install = function (Vue) {
  const toastContrustor = Vue.extend()

  Vue.prototype.$toast = 111
}

export default obj