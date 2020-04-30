
import http from '../request'
import {
  ORDER
} from '../api'


export default class AppUserServer {

  static fetchList = ({
    orderId,
    cardId,
    mobile,
    realName,
    startTime,
    endTime,
    isHaveOverdue,
    orderStatus,
    orderType,
    page,
    size
  }) => http.get(ORDER.LIST, {
    orderId,
    cardId,
    mobile,
    realName,
    startTime,
    endTime,
    isHaveOverdue,
    orderStatus,
    orderType,
    page,
    size
  })

  static transfer = ({
    channelOrderId
  }) => http.post(ORDER.TRANSFER, {
    channelOrderId
  })

  static cancel = ({
    id
  }) => http.get(ORDER.CANCEL + id)

  static planList = ({
    limit,
    offset,
    orderId
  }) => http.post(ORDER.PLAN_LIST, {
    limit,
    offset,
    orderId
  })

}
