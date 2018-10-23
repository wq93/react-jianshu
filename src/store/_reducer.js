// 纯函数
const defaultState = {
  focused: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'search_focus':
      return {
        focused: true
      }
      break;
    case 'search_blur':
      return {
        focused: false
      }
      break
  }
  return state
}