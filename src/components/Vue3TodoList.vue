<template>
  <div>
    <h3>vue3TodoList</h3>
    <!-- 表单 -->
    <form>
      姓名：<input type="text" v-model="state.stu.name">
      年龄：<input type="text" v-model="state.stu.age">
      <input  type="submit" @click="addStu" value="添加">
    </form>
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
      ],
      stu: {
       name: '',
       age: '',
      }
    })

    // 删除当前项
    function removeStu(index){
      state.stus.splice(index, 1);
      // state.stus = state.stus.filter((stu, idx) => idx != index)
    }

    // 添加学生
    function addStu(e){
      // // 阻止表单提交并清空的默认行为
      e.preventDefault();
      console.log('state', state)
      const stu = Object.assign({}, state.stu)
      state.stus.push(stu)
    }

    return {
      state,
      removeStu,
      addStu
    }
  },
};
</script>

<style scoped>
</style>
