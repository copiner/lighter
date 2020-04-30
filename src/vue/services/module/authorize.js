
import http from '../request'
import TokenHelpers from '../helpers/token'
import { AUTH } from '../api'

const accessTokenSecret = {
  grant_type: 'password',
  scope: 'select',
  client_id: 'client_1',
  client_secret: '123456'
}

const refreshTokenSecret = {
  grant_type: 'refresh_token',
  scope: 'select',
  client_id: 'client_1',
  client_secret: '123456'
}

export default class TokenServer {

/**
 * 获取 token
 * @param {string} username
 * @param {string} password
 */
  static signin = async({ username, password }) => http.post(AUTH.SIGN_IN, {
    ...accessTokenSecret,
    username: `kki_${username}`,
    password: encodeURIComponent(password),
  })

/**
 * 刷新 token
 */
  static refresh = async() => http.post(AUTH.REFRESH, {
    ...refreshTokenSecret,
    refresh_token: await TokenHelpers.getRefreshToken(),
  })
}
