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

export const getWeek = (type) => {
  switch (type) {
    case 0: 
      return '日'
    case 1: 
       return '一';
     case 2: 
       return '二';
     case 3: 
       return '三';
     case 4: 
       return '四';
     case 5: 
       return '五';
     case 6: 
       return '六';
  }
}

export const iconType =  {
  'success': 'checked',
  'warning': 'warning',
  'danger': 'error',
  'info': 'info'
}
