<template>
  <!-- 这里就是MVVM中的View -->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{username}}</p>
    <!-- 双向绑定 -->
    <input type="text" v-model="username" >
  </div>
</template>

<script>
import '../assets/reduce'
import '../assets/reduce2'
import '../assets/publishSubsribe'
import '../assets/defineProperty'


export default {
  name: 'HelloWorld',
  // 这里就是MVVM中的Model
  data(){
    return {
      msg: 'Welcome to the world of vue！',
      username: '小明',
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
