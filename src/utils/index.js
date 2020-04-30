
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

// export const bindWindowsEvent = (fn, componentName, type = 'keydown') => {
//   if (dataOptions['is' + type]) {
//     console.log(696969)
//     eventsOptions[type].push({
//       key: componentName,
//       fn,
//       type
//     })
//   } else {
//     dataOptions['is' + type] = true
//     eventsOptions[type] = []
//     eventsOptions[type].push({
//       key: componentName,
//       fn,
//       type
//     })
//     document.addEventListener(type, callback, true)
//   }
//   eventsList.push(type)
// }

// export const removeWindowsEvent = (fn, componentName, type = 'keydown') => {
//   eventsOptions[type].pop()
//   if (!eventsOptions[type].length) {
//     document.removeEventListener(type, callback, true)
//     delete eventsOptions[type]
//     dataOptions['is' + type] = false
//   }
//   const index = eventsList.lastIndexOf(type)
//   if (index > -1) {
//     eventsList.splice(index, 1)
//   }
//   fn && fn()
// }

// function callback (e) {
//   const lastEventType = eventsList[eventsList.length - 1]
//   const lastEvent = eventsOptions[lastEventType]
//   console.log(lastEventType, lastEvent)
//   e.type === lastEventType && lastEvent[lastEvent.length - 1].fn(e)
// }

function callback(e) {
  const lastType = typeList[typeList.length - 1]
  const typeIndex = typeList.lastIndexOf(lastType)
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
