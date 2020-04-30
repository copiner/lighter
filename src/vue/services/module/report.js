
import http from '../request'
import {
  REPORT
} from '../api'

export default class ReportServer {

  static list = async ({
    startTime,
    endTime,
    page,
    size
  }) => await http.get(REPORT.LIST, {
    startTime,
    endTime,
    page,
    size
  })

  static repayList = async ({
    startTime,
    endTime,
    mobile,
    realName,
    page,
    size
  }) => await http.get(REPORT.REPAY_LIST, {
    startTime,
    endTime,
    mobile,
    realName,
    page,
    size
  })


}
