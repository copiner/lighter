
import Http from './request'
import API from './api'

import Authorize from './module/authorize'
import Risk from './module/risk'
import Sys from './module/sys'
import Dashboard from './module/dashboard'
import Promote from './module/promote'
import Login from './module/login'
import PersonalCenter from './module/personal-center'
import AppUser from './module/app-user'
import Order from './module/order'
import ConstEntry from './module/const-entry'
import Flow from './module/flow'
import Report from './module/report'
import Debt from './module/debt'
import Billing from './module/billing'
import Channel from './module/channel'


const services = {
  installed: false,
  // module
  Authorize,
  Risk,
  Sys,
  Dashboard,
  Promote,
  Login,
  PersonalCenter,
  AppUser,
  Order,
  ConstEntry,
  Flow,
  Report,
  Debt,
  Billing,
  Channel,
}

const install = (Vue) => {
  if(services.installed) return

  Vue.prototype.$http = Http
  Vue.prototype.$API = API
  Vue.prototype.$Services = services

  services.installed = true
}

export default Object.assign(services, { install });
