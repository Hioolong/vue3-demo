<template>
  <div>

  </div>
</template>

<script>
import {
  deepClone
} from '../utils/cloneDeep'
export default {
  name: 'DemoCloneDeep',
  data () {
    return {

    }
  },
  methods: {

  },
  created() {
    // 下面是验证代码
    let obj = {
      num: 0,
      str: '',
      boolean: true,
      unf: undefined,
      nul: null,
      obj: { name: '我是一个对象', id: 1 },
      arr: [0, 1, 2],
      func: function () { console.log('我是一个函数obj1') },
      date: new Date(0),
      reg: new RegExp('/我是一个正则/ig'),
      [Symbol('1')]: 1,
    };
    // Object.defineProperty(obj, 'innumerable', {
    //   enumerable: false, value: '不可枚举属性' }
    // );
    obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj))
    obj.loop = obj    // 设置loop成循环引用的属性
    console.log('obj', obj)
    let cloneObj = deepClone(obj)
    cloneObj.arr.push(4)
    console.log('cloneObj', cloneObj)
  }
}
</script>

<style lang='less' scoped>

</style>
