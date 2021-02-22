/*
 * File: 卡片组件
 * File Created: 2021-01-07 9:46:02 am
 * Author: huangxl (huangxl20@meicloud.com)
 * -----
 * Last Modified: 2021-01-07 6:27:19 pm
 * Modified By: huangxl (huangxl20@meicloud.com)
 */

<template>
  <div
    class="card"
    :style="{'background': `linear-gradient(${obj.bg}, ${obj.bg} 70%, #ffffff)`}"
  >
    <img
      :src="img"
      alt=""
    >
  </div>
</template>

<script>
import img from '../assets/punk.jpeg'
// import img2 from '../assets/timg.jpeg'
import { ref } from 'vue'
import { getBgOnImg } from '../utils/getBgOnImg'
export default {
  name: 'Card',
  setup() {
    const obj = ref({})
    const getImgColor = async () => {
      obj.value.bg = await getBgOnImg(img)
    }
    console.log(obj.value)
    getImgColor()
    return { obj, img, getImgColor }
  },
  components: {

  },
  props: {

  },
  methods: {

  },

  data () {
    return {

    }
  },
  mounted() {

  }
}
</script>

<style scoped>
  .card {
    height: 100px;
    width: 100px;
  }
  .card img {
    height: 50px;
    width: 100px;
  }
</style>
