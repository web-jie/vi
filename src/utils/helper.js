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
