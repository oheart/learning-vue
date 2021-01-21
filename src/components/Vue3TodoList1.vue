<template>
  <div>
    <h3>vue3TodoList-每块功能逻辑抽离出去</h3>
    <!-- 学生列表 -->
    <ul>
      <li v-for="(stu, index) in state.stus" :key="stu.id" @click="removeStu(index)">
        {{ stu.name }} -- {{ stu.age }}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "",
  // 组合API的入口函数
  setup() {
    let {state, removeStu} = useRemoveStu();
    return {
      state,
      removeStu
    }
  },
}

// 删除学生功能
function useRemoveStu(){
  /*
    ref函数注意点：
    只能监听简单数据类型的变化，不能监听复杂数据类型的变化（对象／数组）;
    reactive可以监听复杂数据类型的变化.
    */
  let state = reactive({
    stus: [
      { id: 1, name: "张三", age: 10 },
      { id: 2, name: "李四", age: 18 },
      { id: 3, name: "王五", age: 22 },
    ]
  })

  // 删除当前项
  function removeStu(index){
    state.stus = state.stus.filter((stu, idx) => idx != index)
  }

  return {
    state,
    removeStu
   }
}

</script>

<style scoped>
</style>
