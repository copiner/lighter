
module.exports = {
  // 鉴权
  AUTH: {
    SIGN_IN: '/oauth/token',
    REFRESH: '/oauth/token',
  },
  // 系统
  SYS: {
    MENUS: '/sys/user/index',
    LOGO: {
      FETCH: '/api/open/logo/get'
    },
    VERSION: '/version',
    DEPT: {
      LIST: '/system/sysDept/list',
      SAVE: '/system/sysDept/save',
      EDIT: '/system/sysDept/edit/',
      UPDATE: '/system/sysDept/update',
      REMOVE: '/system/sysDept/remove',
    }
  },
  // 推广
  PROMOTE: {
    CHANNEL: '/channel/count/channel',
    CHANNEL_DETAIL: '/channel/count/list',
    CHANNEL_SOURCE_ID: '/channel/count/sourceId'
  },
/**
 * @description: login
 */
  LOGIN: {
    URL: '/sys/user/login'
  },
  PERSONAL_CENTER: {
    UPDATE_NAME: '/sys/user/update/name',
    UPDATE_PASSWORD: '/sys/user/updatePassword',
    USER_INFO: '/sys/user/userInfo'
  },
  APP_USER: {
    LIST: '/audit/appuser/list',
    UPDATE: '/audit/appuser/personal/business/update',
    SELECT: '/audit/appuser/business/select',
    BUSINESS_LIST: '/audit/appuser/business/list',
    RISK: '/risk/v2/',
  },
  UPLOAD:{
    URL:'/smk/customer/list/customerImport'
  }
}
