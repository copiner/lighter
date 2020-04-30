
import http from '../request'
import { SYSTEM } from '../api'

export default class SysServer {

  /**
   * @description: 菜单
   */
  static menus = async() => await http.post(SYSTEM.MENUS)
  /**
   * @description: 获取公司logo
   */
  static fetchLogo = async() => await http.get(SYSTEM.LOGO.FETCH)

  static version = async() => await http.get(SYSTEM.VERSION)

  static deptList = async() => await http.post(SYSTEM.DEPT.LIST)

  static deptSave = async({ parentId, name, orderNum }) => await http.post(SYSTEM.DEPT.SAVE, { parentId, name, orderNum })

  static deptEdit = async({ deptId }) => await http.get(SYSTEM.DEPT.EDIT + deptId)

  static deptUpdate = async({ deptId, name, orderNum }) => await http.post(SYSTEM.DEPT.UPDATE, { deptId, name, orderNum })

  static deptRemove = async({ deptId }) => await http.post(SYSTEM.DEPT.REMOVE, { deptId })

}
