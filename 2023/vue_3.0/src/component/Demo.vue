<template>
  <div>
    <h1>Demo</h1>
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
    <button @click="sendMsg">点击我，向父组件发送消息</button>
    <slot name="te" :age="12"></slot>
  </div>
</template>

<script>
export default {
  name: "Demo",
  props: ['name','age'],
  setup(props, context) {
    console.log('props', props)
    console.log('context', context)
    console.log('attrs', context.attrs)
    console.log('emit', context.emit)
    console.log('slots', context.slots)

    function sendMsg() {
      context.emit('hello', 666)
    }

    return {
      sendMsg,
    }
  }
}
</script>

<style scoped>

</style>