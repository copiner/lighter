
import http from '../request'
import { APP_USER } from '../api'


export default class AppUserServer {

  static fetchList = ({ orderVersions, size, page, userId, mobile, sourceId, cardId, realName, startTime, endTime }) => http.get(APP_USER.LIST, { orderVersions, size, page, userId, mobile, sourceId, cardId, realName, startTime, endTime })

  static update = ({ loanMinAmount, loanMaxAmount, userId }) => http.post(APP_USER.UPDATE, { loanMinAmount, loanMaxAmount, userId })

  static select = ({ id, userId }) => http.post(APP_USER.SELECT, { id, userId })

  static fetchBusinessList = ({ userId }) => http.get(APP_USER.BUSINESS_LIST, { userId })
  static risk = ({ userId }) => http.put(APP_USER.RISK + userId)
}
