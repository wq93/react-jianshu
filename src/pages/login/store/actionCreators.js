import * as constants from './constants'
import axios from 'axios';

const changeLogin = (value) => ({
  type: constants.CHANGE_LOGIN,
  value
})

export const login = (accountElem, passwordElem) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + accountElem + '&password=' + passwordElem).then((res) => {
      const result = res.data.data;
      if (result) {
        dispatch(changeLogin(true))
      } else {
        alert('登陆失败')
      }
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch(changeLogin(false))
  }
}