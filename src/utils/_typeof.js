/*
 * File: 判断数据类型
 * File Created: 2020-12-08 8:06:04 pm
 * Author: huangxl (huangxl20@meicloud.com)
 * -----
 * Last Modified: 2021-01-12 10:52:14 am
 * Modified By: huangxl (huangxl20@meicloud.com)
 */

const _typeof = (data) => {
  if (typeof data != 'object') {
    return data
  }
  let regexp = /\[object (.*?)\]/ // /^\[object (\S+)\]$/ 这样写也可
  return Object.prototype.toString.call(data).match(regexp)[1]
}

export default _typeof
