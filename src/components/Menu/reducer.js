
const defaultState = {
  show: false
}

export default (state = defaultState, action) => {
  const show = action.show || false
  return Object.assign({}, defaultState, {show})
}
