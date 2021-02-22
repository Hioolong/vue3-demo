/*
 * File:
 * File Created: 2021-01-07 4:33:40 pm
 * Author: huangxl (huangxl20@meicloud.com)
 * -----
 * Last Modified: 2021-01-07 4:37:45 pm
 * Modified By: huangxl (huangxl20@meicloud.com)
 */
import analyze from 'rgbaster'

async function getBgOnImg(img) {
  const res = await analyze(img, { scale: 0.6, ignore: [ 'rgb(255,255,255)', 'rgb(0,0,0)' ] })
  console.log(res[0].color)
  return res[0].color
}

export {
  getBgOnImg
}
