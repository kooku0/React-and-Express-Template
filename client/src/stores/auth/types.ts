import { loadLogin, failLogin, successLogin, logout } from './actions'

export type LoginAction =
  | ReturnType<typeof loadLogin>
  | ReturnType<typeof failLogin>
  | ReturnType<typeof successLogin>
  | ReturnType<typeof logout>

export type LoginState = {
  isLoading: boolean
  isLogin: boolean
  name: string
}
