let seed = 0

export default {
  beforeMount() {
    this._popupId = 'popup' + seed ++
  },
}