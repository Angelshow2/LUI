import message  from './src/message.vue'

message.install = function (Vue) {
  Vue.component(message.name, message )
}

export default message 