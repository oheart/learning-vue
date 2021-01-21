<template>
  <div>
    <h1>{{ msg }}</h1>

    默认count: {{ count }} <br/>
    <button @click="increment">增加</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "",
  // 组合API的入口函数
  setup() {
    // let count = 0; 普通变量不能响应变化
    /*
        定义里一个名称叫做count的变量，这个变量的初始值是0.
        当这个变量发生改变后，Vue会自动更新UI.
        用ref可以监听变量数据变化并更新视图.
      */

    //  声明多个变量时，是否有简便写法 ? todo
    let count = ref(0);

    /*  在组合API中，如果想定义方法，不用定义到methods中，直接定义即可 */
    // count递增
    function increment() {
      console.log("count", count);
      count.value++;
    }

    /*
      注意点：
      在组合API中定义的变量/方法，要想在外界使用，必须通过return{xxx, xxx}暴露出去
   */
    return {
      count,
      increment,
    };
  },
};
</script>

<style scoped>
</style>
