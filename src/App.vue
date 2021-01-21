<template>
  <div class="wrapper">
    <Vue2Count msg="点击按钮开始计数" class="comp" />
    <Vue2TodoList  class="comp" />
    <Vue3Count  class="comp" />
    <Vue3TodoList  class="comp" />
    <Vue3TodoList1  class="comp" />
  </div>
</template>

<script>
import Vue2Count from './components/Vue2Count.vue'
import Vue2TodoList from './components/Vue2TodoList.vue'
import Vue3Count from './components/Vue3Count.vue'
import Vue3TodoList from './components/Vue3TodoList.vue'
import Vue3TodoList1 from './components/Vue3TodoList1.vue'

export default {
  name: 'App',
  // vue3引入组件
  components: {
    Vue2Count,
    Vue2TodoList,
    Vue3Count,
    Vue3TodoList,
    Vue3TodoList1
  }
}
</script>

