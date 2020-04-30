
import Http from './request'
import API from './api'

import Authorize from './module/authorize'
import System from './module/system'
import Promote from './module/promote'
import Login from './module/login'
import PersonalCenter from './module/personal-center'
import AppUser from './module/app-user'


const services = {
  installed: false,
  // module
  Authorize,
  System,
  Promote,
  Login,
  PersonalCenter,
  AppUser
}

const install = (Vue) => {
  if(services.installed) return

  Vue.prototype.$http = Http
  Vue.prototype.$API = API
  Vue.prototype.$Services = services

  services.installed = true
}

export default Object.assign(services, { install });
