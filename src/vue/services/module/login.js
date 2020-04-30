
import http from '../request'
import { LOGIN } from '../api'


export default class LoginServer {

  static login = ({ username, password }) => http.post(LOGIN.URL, { username, password })
}
