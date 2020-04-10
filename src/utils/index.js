
const dataOptions = {
  zIndex: 1000,
  dialogList: [],
}

const getZIndex = function (type = '+') {
  return this.zIndex
}

const setZIndex = function (type = '+', val = 1) {
  if (type === '+') {
    this.zIndex += val
  } else {
    this.zIndex -= val
  }
}

dataOptions['getZIndex'] = getZIndex
dataOptions['setZIndex'] = setZIndex

// const callback = (e) => {
// }

var callbackFn
function callback(e) {
  callbackFn && callbackFn(e)
}

export const bindWindowsEvent = (fn, type = 'keydown') => {
  if (dataOptions['is' + type]) return
  dataOptions['is' + type] = true
  callbackFn = fn
  document.addEventListener(type, callback, false)
}

export const removeWindowsEvent = (fn, type = 'keydown') => {
  if (!dataOptions['is' + type]) return
  dataOptions['is' + type] = false
  document.removeEventListener(type, callback, false)
}

export default {
  install (Vue, options = {}) {
    Vue.prototype['$VIELEMENT'] = dataOptions
  }
}
