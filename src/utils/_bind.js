/*
 * File: 模拟实现bind
 * File Created: 2021-02-20 4:28:01 pm
 * Author: huangxl (huangxl20@meicloud.com)
 * -----
 * Last Modified: 2021-02-20 5:08:12 pm
 * Modified By: huangxl (huangxl20@meicloud.com)
 */
// ES5
Function.prototype._bind = function(context) {
  // 判断this是否为function
  if (typeof this !== 'function') {
    throw new Error('what is trying to be bound is not callable')
  }
  // 储存绑定函数
  var fn = this
  // 获取调用_bind方法时的实参
  var args = Array.prototype.slice.call(arguments, 1)
  // 创建一个中转函数，用于_bind的方法new创建对象的时候，能访问绑定函数里的属性
  var fTemp = function() {}
  var fBound = function() {
    // 获取调用绑定后函数时的实参
    var boundArgs = Array.prototype.slice.call(arguments)
    // 当使用new调用fBound的时候，this应该指向new出来的实例
    return fn.apply(this instanceof fTemp ? this : context, boundArgs.concat(args))
  }
  // 让绑定后的函数的原型指向目标函数的原型
  fTemp.prototype = fn.prototype
  fBound.prototype = new fTemp()
  return fBound
}

// ES6更优雅的实现
Function.prototype._bind2 = function(context, ...bindArgs) {
  if (typeof this !== 'function') throw new Error('what is trying to be bound is not callable')
  let fn = this,
      fTemp = function() {};
  let fBound = function(...restArgs) {
    return fn.apply(this instanceof fTemp ? this : context, restArgs.concat(bindArgs))
  }
  fTemp.prototype = fn.prototype
  fBound.prototype = new fTemp()
  return fBound
}
