/**
 * 防抖
 * @param {Function} fn 防抖执行的函数
 * @param {Number} wait 等待的时间(ms)
 * @param {Boolean} immediate 是否立即执行
 */
function _debounce (fn, wait, immediate = false) {
  let timeout
  const debounced = function() {
    let context = this
    let args = arguments
    timeout && clearTimeout(timeout)
    if (immediate) {
      // 如果已经执行过，则不执行
      let callnow = !timeout
      timeout = setTimeout(function(){
        timeout = null
      }, wait)
      callnow && fn.apply(context, args)
    } else {
      timeout = setTimeout(function() {
        fn.apply(context, args)
      }, wait)
    }
  }
  // 添加取消方法
  debounced.cancel = function() {
    clearTimeout(timeout)
    timeout = null
  }
  return debounced
}

export default _debounce
