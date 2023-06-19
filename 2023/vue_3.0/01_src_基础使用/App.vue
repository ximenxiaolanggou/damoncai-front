<template>
  <div>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <h2>工作：{{ job.type }}</h2>
    <h2>薪水：{{ job.salary }}</h2>

    <button @click="sayHello">点击我，说hello</button>
    <br>
    <button @click="modifyName">点击我，修改姓名</button>
    <br>
    <button @click="modifyJob">点击我，修改工作</button>
    <br/>
    <hr/>
    <h1>副业：</h1>
    <h2>工作：{{ job_sub.type }}</h2>
    <h2>薪水：{{ job_sub.salary }}</h2>
    <h2></h2>
    <button @click="modifyJobSubSalary">点击我，修改副业薪水</button>
  </div>
</template>

<script>
import {ref, reactive} from 'vue'
export default {
  name: 'App',
  setup() {
    let name = ref("张三")
    let age = ref(12)
    let job = ref({type: '前端工程师', salary: 30})
    let job_sub = reactive({type: '嵌入式工程师', salary: 30})
    function sayHello() {
      alert(`hello，我是${name}`)
    }

    // 修改名称
    function modifyName() {
      name.value = "李四"
    }

    // 修改工作
    function modifyJob() {
      job.value.type = '后端工程师'
    }

    // 修改副业薪水
    function modifyJobSubSalary() {
      job_sub.salary = 40
    }

    return {
      name,
      age,
      job,
      job_sub,
      sayHello,
      modifyName,
      modifyJob,
      modifyJobSubSalary
    }
  }
}
</script>

<style>
</style>
