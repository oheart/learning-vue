/* 发布订阅模式 */

// 收集依赖、订阅
class Dep {
  constructor(){
    // 存放所有订阅者的信息
    this.subs = []
  }

  // 添加订阅者的信息
  addSub(watcher){
    this.subs.push(watcher)
  }

  // 发布订阅通知的方法
  notify(){
    this.subs.forEach(watcher => watcher.update())
  }
}

// 订阅者的类
class Watcher {
  constructor(cb){
    this.cb = cb
  }

  // 触发回调方法
  update(){
    this.cb()
  }
}


const w1 = new Watcher(() => {
  console.log('我是订阅者w1')
})

// w1.update()


const w2 = new Watcher(() => {
  console.log('我是订阅者w2')
});
// w2.update()

const dep = new Dep()
dep.addSub(w1)
dep.addSub(w2)

/*
  只要我们为Vue中data数据重新赋值了，那么这个赋值动作会被vue监听到，然后vue要把数据的变化，通知到每个订阅者
  接下来，订阅（DOM元素者）要根据最新的数据，更新自己的内容
  故当数据变化时， 应该调用notify， 通知订阅者（ DOM元素者），订阅者根据最新的数据更新dom
*/
dep.notify()
