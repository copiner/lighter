import http from '../request'
import { PROMOTE } from '../api'

// const pagination = {
//   limit: 10,
//   offset: 0,
//   pageSize: 10,
//   total: 0,
//   currentPage: 1
// }

const pagination = {
  limit: 10,
  offset: 0,
}

// const pagination = ({ pageSize, currentPage }) => {
//   return ({
//     limit: pageSize,
//     offset: currentPage * pageSize
//   })
// }

// const transformPagination = ({ limit, offset, total }) => {
//   return ({
//   })
// }

export default class PromoteServer {
  /**
   * @param sourceId 渠道id
   * @param limit 分页大小
   * @param offset 偏移量
   */
  static channels = ({ sourceId, limit = 10, offset = 0 }) => http.get(PROMOTE.CHANNEL, {
    sourceId, limit, offset
  })

  static channelDetail = ({sourceId, endTime, startTime, limit = 10, offset = 0}) => http.get()

}
