/*
 * File: 防抖Demo
 * File Created: 2021-02-20 6:18:19 pm
 * Author: huangxl (huangxl20@meicloud.com)
 * -----
 * Last Modified: 2021-02-20 8:35:27 pm
 * Modified By: huangxl (huangxl20@meicloud.com)
 */

<template>
  <div :style="{fontSize: '30px'}">
    <div>监听了document mousemove 事件</div>
    {{ count }}
    <div>
      <button @click="cancel">取消防抖</button>
    </div>
  </div>
</template>

<script>
import _debounce from '@/utils/_debounce'
export default {
  name: 'debounce',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    add(e) {
      // 能获取到event对象
      console.log(e)
      this.count++
    },
    // 取消防抖
    cancel() {
      this.bindAdd.cancel()
    }
  },
  mounted() {
    this.bindAdd = _debounce(this.add, 2000, true)
    let _this = this
    document.addEventListener('mousemove', _this.bindAdd)
  },
  unmounted() {
    let _this = this
    document.removeEventListener('mousemove', _this.bindAdd)
  }
}
</script>
