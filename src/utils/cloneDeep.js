
/**
 * 深拷贝
 * 实现思路：判断数据类型，基础数据类型直接返回，引用类型需要开辟新的堆内存；
 * 嵌套问题通过递归解决；
 * 循环引用问题通过weakMap解决；
 * 对象不可枚举的属性可以通过Object.getOwnPropertyDescriptors获取，该方法可获取对象全部的属性
 * RegExp和Date这两个类型生成新的实例返回
 * @param {} obj
 */

// 判断数据是否为引用类型
const isComplexDataType = obj => (typeof obj === 'object' || typeof obj === 'function') && obj !== null

const deepClone = (obj, hash = new WeakMap()) => {
  if(!isComplexDataType(obj)) return obj
  if (obj.constructor === Date) return new Date(obj)
  if (obj.constructor === RegExp) return new RegExp(obj)
  // 解决循环引用问题
  if (hash.has(obj)) {
    return hash.get(obj)
  }
  let allDesc = Object.getOwnPropertyDescriptors(obj)
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)
  hash.set(obj, cloneObj)
  for(let key of Reflect.ownKeys(obj)) {
    cloneObj[key] = (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') ? deepClone(obj[key], hash) : obj[key]
  }
  return cloneObj
}

export {
  deepClone
}
