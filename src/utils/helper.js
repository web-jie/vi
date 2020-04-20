export const getPx = (val) => {
  if (String(val).includes('%') || String(val).includes('px')) return val
  return `${val}px`
}

export const getParent = (options, parentName) => {
  let parent = options.$parent
  while (parent) {
    if (parent.$options.name === parentName) {
      break
    }
    parent = parent.$parent
  }
  return parent
}

export const isEmptyObject = (obj) => {
  // 判断所传参数是否是对象
  if (obj === null) return
  if (typeof obj !== 'object') return
  if (!Object.keys(obj).length) {
    return true
  } else {
    return false
  }
}
