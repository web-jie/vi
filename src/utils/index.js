
const dataOptions = {
  zIndex: 1000,
  dialogList: [],
  messageBoxList: [],
  callbackList: []
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

let eventsOptions = {}
let eventsList = []
function callback (e) {
  const lastEventType = eventsList[eventsList.length - 1]
  const lastEvent = eventsOptions[lastEventType]
  e.type === lastEventType && lastEvent[lastEvent.length - 1].fn(e)
}
export const bindWindowsEvent = (fn, componentName, type = 'keydown') => {
  if (dataOptions['is' + type]) {
    eventsOptions[type].push({
      key: componentName,
      fn,
      type
    })
  } else {
    dataOptions['is' + type] = true
    eventsOptions[type] = []
    eventsOptions[type].push({
      key: componentName,
      fn,
      type
    })
    document.addEventListener(type, callback, true)
  }
  eventsList.push(type)
}

export const removeWindowsEvent = (fn, componentName, type = 'keydown') => {
  eventsOptions[type].pop()
  if (!eventsOptions[type].length) {
    document.removeEventListener(type, callback, true)
    delete eventsOptions[type]
    dataOptions['is' + type] = false
  }
  const index = eventsList.lastIndexOf(type)
  if (index > -1) {
    eventsList.splice(index, 1)
  }
}

export default {
  install (Vue, options = {}) {
    Vue.prototype['$VIELEMENT'] = dataOptions
  }
}
