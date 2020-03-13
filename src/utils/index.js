
const dataOptions = {
  zIndex: 1000
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
export default {
  install (Vue, options = {}) {
    Vue.prototype['$VIELEMENT'] = dataOptions
  }
}
