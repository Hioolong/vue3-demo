/**
 * 判断数据是否为引用类型
 * Js历史bug： typeof null === 'object'
 */
const isComplexType = (target) => (typeof target === 'object' || typeof target === 'function') && typeof target !== null

const deepClone = (target, hash = new WeakMap()) => {
  if (!isComplexType(target)) return target // 基础类型直接返回
  if (target instanceof Date) return new Date(target)
  if (target instanceof RegExp) return new RegExp(target)
  // 解决循环引用
  if (hash.has(target)) {
    return hash.get(target)
  }
  // 获取target对象自身的属性描述
  let targetDesc = Object.getOwnPropertyDescriptors(target)
  // 继承原型链
  let cloneObj = Object.create(Object.getPrototypeOf(target), targetDesc)
  // 缓存
  hash.set(target, cloneObj)
  for (let key of Reflect.ownKeys(target)) {
    cloneObj[key] = (isComplexType(target[key]) && typeof target !== 'function') ? deepClone(target[key]) : target[key]
  }
  return cloneObj
}
