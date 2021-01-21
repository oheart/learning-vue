<template>
  <div>
    <h1>{{ msg }}</h1>

    默认count: {{ count }} <br/>
    <button @click="increment">增加</button>
  </div>
</template>

<script>
export default {
  name: 'Vue2Count',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment(){
      // Vue双向绑定原理 从vue2的Object.defineProperty到vue3的proxy ? todo
      console.log('this', this)
      this.count++;
    },
  }
}

</script>
