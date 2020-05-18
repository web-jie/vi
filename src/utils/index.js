
const dataOptions = {
  zIndex: 1000,
  dialogList: [],
  messageBoxList: [],
  noticeationsList: [],
  datePickerList: []
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

let eventsList = []
let typeList = []

function callback(e) {
  const lastType = typeList[typeList.length - 1]
  const typeIndex = typeList.lastIndexOf(lastType)
  const list = eventsList.filter(v => v.type === lastType)
  if (list.length > 1) {
    for(let i = 0; i < list.length - 1; i++) {
      list[i].options.windowCallback(e)
    }
  }
  e.type === lastType && eventsList[typeIndex].options.windowCallback(e)
}

export const bindWindowsEvent = (options, type, useCapture = true) => {
  eventsList.push({
    type, 
    options
  })
  typeList.push(type)
  if (!dataOptions['is' + type]) {
    dataOptions['is' + type] = true
    document.addEventListener(type, callback, useCapture)
  }
}

export const removeWindowsEvent = (options, type, fn) => {
  if (eventsList.filter(v => v.type === type).length === 1) {
    document.removeEventListener(type, callback, true)
    dataOptions['is' + type] = false
  } 
  const index = eventsList.findIndex(v => v.options._uid === options._uid)
  if (index > -1) {
    eventsList.splice(index, 1)
  }

  const typeIndex = typeList.lastIndexOf(type)
  if (typeIndex > -1) {
    typeList.splice(typeIndex, 1)
  }

  fn && fn()
}
export default {
  install (Vue, options = {}) {
    Vue.prototype['$VIELEMENT'] = dataOptions
  }
}
