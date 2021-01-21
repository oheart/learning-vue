/* reduce实现链式获取对象属性的值*/

const obj = {
  name: 'zs',
  info: {
    address: {
      location: '浙江杭州'
    }
  }
}

const location = obj.info.address.location;
console.log('location1: ', location)


const attrs = ['info', 'address', 'location']
const getLocation = (accumulator, currentValue) => accumulator[currentValue];
attrs.reduce(getLocation, obj)
console.log('location2: ', location)


const attrStr = 'info.address.location'
const attrsArr = attrStr.split('.');
const getLocation2 = (accumulator, currentValue) => accumulator[currentValue];
attrsArr.reduce(getLocation2, obj)
console.log('location3: ', location)

/*
  vue页面里会有以下访问数据的写法
  {{info.address.location}}
*/



