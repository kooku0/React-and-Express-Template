import { LOAD_LOGIN, FAIL_LOGIN, SUCCESS_LOGIN, LOGOUT } from './actions'
import { LoginState, LoginAction } from './types'

const initialState: LoginState = {
  isLoading: false,
  isLogin: false,
  name: '',
}

function login(state: LoginState = initialState, action: LoginAction) {
  switch (action.type) {
    case LOAD_LOGIN:
      return {
        isLoading: true,
        isLogin: false,
        name: '',
      }
    case FAIL_LOGIN:
      return initialState
    case SUCCESS_LOGIN:
      return {
        isLoading: false,
        isLogin: true,
        name: action.payload.name,
      }
    case LOGOUT:
      return {
        isLogin: false,
      }
    default:
      return state
  }
}

export default login
