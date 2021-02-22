<template>
  <div class="box">
    <div class="normal" ref="normal">
      <div>未开启节流</div>
      {{ count1 }}
    </div>
    <div class="throttle" ref="throttle">
      <div>开启节流(每0.5秒执行一次)</div>
      {{ count2 }}
    </div>
    <div class="throttle timeout" ref="throttle2">
      <div>定时器实现</div>
      {{ count3 }}
    </div>
  </div>
</template>

<script>
import {
  _throttleByTimestamp,
  _throttleByTimeout
} from '@/utils/_throttle'
export default {
  name: 'throttle',
  data () {
    return {
      count1: 0,
      count2: 0,
      count3: 0
    }
  },
  methods: {
    add1() {
      this.count1++
    },
    add2() {
      this.count2++
    },
    add3() {
      this.count3++
    }
  },
  mounted() {
    const _this = this,
          div1 = this.$refs['normal'],
          div2 = this.$refs['throttle'],
          div3 = this.$refs['throttle2']
    // 没有节流的容器
    div1.addEventListener('mousemove', _this.add1)
    // 节流: 时间戳实现
    this.throttleAdd = _throttleByTimestamp(_this.add2, 500)
    div2.addEventListener('mousemove', _this.throttleAdd)
    // 节流： 定时器实现
    this.throttleAdd3 = _throttleByTimeout(_this.add3, 500)
    div3.addEventListener('mousemove', _this.throttleAdd3)
  },
  unmounted() {
    const _this = this,
          div1 = this.$refs['normal'],
          div2 = this.$refs['throttle'],
          div3 = this.$refs['throttle2']
    div1.removeEventListener('mousemove', _this.add1)
    div2.removeEventListener('mousemove', _this.throttleAdd)
    div3.removeEventListener('mousemove', _this.throttleAdd3)
  }
}
</script>

<style scoped>
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .normal {
    width: 300px;
    height: 300px;
    background: gray;
    font-size: 30px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .throttle {
    margin-top: 30px;
    width: 300px;
    height: 300px;
    background: skyblue;
    font-size: 30px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .timeout {
    background: violet;
  }
</style>
