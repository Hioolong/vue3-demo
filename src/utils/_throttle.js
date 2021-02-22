/**
 * 节流 使用时间戳实现
 * @param {Funcion} fn 调用的函数
 * @param {Number} wait 等待时间(ms)
 */
function _throttleByTimestamp (fn, wait) {
  let context,
      args,
      previous = 0

  return function() {
    let now = +new Date() // 获取时间戳
    context = this
    args = arguments
    if (now - previous > wait) {
      fn.apply(context, args)
      previous = now
    }
  }
}

/**
 * 节流 使用定时器实现
 * @param {Function} fn
 * @param {Number} wait
 */
function _throttleByTimeout (fn, wait) {
  let timeout,
      context,
      args

  return function() {
    context = this
    args = arguments
    if (!timeout) {
      timeout = setTimeout(function() {
        fn.apply(context, args)
        timeout = null
      }, wait)
    }
  }
}

export {
  _throttleByTimestamp,
  _throttleByTimeout
}
