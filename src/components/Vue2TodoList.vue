<template>
  <div>
    <h3>vue2TodoList</h3>
    <!-- 表单 -->
    <form>
      姓名：<input type="text" v-model="stu.name">
      年龄：<input type="text" v-model="stu.age">
      <input type="submit" @click="addStu" value="添加">
    </form>

    <!-- 学生列表 -->
    <ul>
      <li v-for="(stu, index) in stus" :key="stu.id" @click="removeStu(index)">
        {{ stu.name }} -- {{ stu.age }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      // 学生数据
      stus: [
        { id: 1, name: "张三", age: 10 },
        { id: 2, name: "李四", age: 18 },
        { id: 3, name: "王五", age: 22 },
      ],
      // 学生表单
      stu: {
       name: '',
       age: '',
      }
      // 新增功能1的数据
      // 新增功能2的数据
      // ...
    };
  },
  // 新增功能1的业务逻辑
  // 新增功能2的业务逻辑
  // ...
  computed: {

  },
  // 新增功能1的业务逻辑
  // 新增功能2的业务逻辑
  // ...
  watch: {

  },
  created() {},
  mounted() {},
  // 新增功能1的业务逻辑
  // 新增功能2的业务逻辑
  // ...
  methods: {
    // 删除当前项
    removeStu(index){
      this.stus.splice(index, 1);
      // this.stus = this.stus.filter((stu, idx) => idx != index)
    },
    // 添加学生
    addStu(e){
      // 阻止表单提交并清空的默认行为
      e.preventDefault();
      const stu = Object.assign({}, this.stu)
      this.stus.push(stu)
      this.resetStu();
    },
    // 重置表单-学生
    resetStu(){
      this.stu.name = ''
      this.stu.age = ''
    }
  },
};
</script>

<style scoped>
</style>
