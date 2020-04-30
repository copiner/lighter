
import http from '../request'
import { PERSONAL_CENTER } from '../api'


export default class PersonalCenterServer {

  static updateName = ({ userId, name }) => http.post(PERSONAL_CENTER.UPDATE_NAME, { userId, name })

  static updatePassWord = ({ password, passwordNew }) => http.post(PERSONAL_CENTER.UPDATE_PASSWORD, { password, passwordNew })

  static fetchUserInfo = () => http.post(PERSONAL_CENTER.USER_INFO)
}
