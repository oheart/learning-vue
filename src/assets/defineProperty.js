
const obj = {
  name: '张三',
  age: 18,
  info: {
    a: 1,
    b: 2,
  }
}

// 取值操作
console.log('姓名1：', obj.name)

// 赋值操作
obj.name = '李四'
console.log('姓名2：', obj.name)


// 监听取值、赋值操作
Object.defineProperty(obj, 'name' ,{
  enumerable: true, // 当前属性允许被循环，当设为false时，则无法使用循环遍历其属性
  configurable: true, // 当前属性允许被配置, 允许删除属性（delete）
  get(){ // 取值
    console.log('有人获取了obj.name的值')
    return '我不是张三'
  },
  set(newVal){ // 设置值（赋值）
    console.log('我不要你给的值：', newVal)
    
    // dep.notify()
  },
})

console.log('姓名3：', obj.name)
obj.name = '王五'
