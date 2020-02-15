export const LOAD_LOGIN = 'login/LOAD_LOGIN' as const
export const FAIL_LOGIN = 'login/FAIL_LOGIN' as const
export const SUCCESS_LOGIN = 'login/SUCCESS_LOGIN' as const
export const LOGOUT = 'login/LOGOUT' as const

export const loadLogin = () => ({ type: LOAD_LOGIN })
export const failLogin = () => ({ type: FAIL_LOGIN })
export const successLogin = (name: string) => ({
  type: SUCCESS_LOGIN,
  payload: {
    name: name,
  },
})
export const logout = () => ({ type: LOGOUT })
