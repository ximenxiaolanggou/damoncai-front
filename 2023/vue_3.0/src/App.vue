<template>
  <Demo @hello="getMsg" :name="name" :age="12">
    <!-- 具名插槽不能使用 slot="",不起作用，需要使用v-slot: -->
    <template v-slot:te>
      <h3>工作：前端</h3>
      <h3>薪资：30k</h3>
    </template>
  </Demo>
</template>

<script>
import {ref, reactive} from 'vue'
import Demo from "@/component/Demo";
export default {
  name: 'App',
  components: {Demo},
  setup() {
    let name = ref("张三")

    // 获取子组件传递数据
    function getMsg(data) {
      alert(`收到子组件传递数据：${data}`)
    }

    return {
      name,
      getMsg
    }
  }
}
</script>

<style>
</style>
