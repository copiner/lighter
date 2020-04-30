
import http from '../request'
import { SYS } from '../api'

export default class SysServer {

  /**
   * @description: 菜单
   */
  static menus = async() => await http.post(SYS.MENUS)
  /**
   * @description: 获取公司logo
   */
  static fetchLogo = async() => await http.get(SYS.LOGO.FETCH)

  static version = async() => await http.get(SYS.VERSION)

  static deptList = async() => await http.post(SYS.DEPT.LIST)

  static deptSave = async({ parentId, name, orderNum }) => await http.post(SYS.DEPT.SAVE, { parentId, name, orderNum })

  static deptEdit = async({ deptId }) => await http.get(SYS.DEPT.EDIT + deptId)

  static deptUpdate = async({ deptId, name, orderNum }) => await http.post(SYS.DEPT.UPDATE, { deptId, name, orderNum })

  static deptRemove = async({ deptId }) => await http.post(SYS.DEPT.REMOVE, { deptId })

}
