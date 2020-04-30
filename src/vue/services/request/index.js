
import axios from 'axios';
import Authorize from '../module/authorize';
import TokenHelpers from '../helpers/token';
import Storage from '../helpers/storage';
import Router from '../../router'

const whitelist = [
  '/sendMailCode',
  '/login',
  '/checkMailCode',
  '/forgetPassword',
  '/reg',
  '/oauth/token',
  '/open'
]

const NODE_ENV = process.env.NODE_ENV

axios.defaults.withCredentials = true //让ajax携带cookie
// axios.defaults.timeout = 10000
if (NODE_ENV === 'development') {

  axios.defaults.baseURL = 'http://192.192.192.245:10100'
} else {
  axios.defaults.baseURL = process.env.BASE_API
}

const addPrefix = (api) => {
  const prefix = '/api/bg'
  const unAddPrefixApi = [
    '/oauth/token',
    '/api/open/logo/get'
  ]
  const isAdd = !unAddPrefixApi.some(i => i.indexOf(api) > -1) && api.indexOf(prefix) === -1
  return isAdd ? `${prefix}${api}` : api
}

const checkNeedRefreshToken = ({
  status,
  data: {
    error,
    error_description
  }
}) => {
  return status === 401 && error === 'invalid_token' && error_description.indexOf('Invalid access token') > -1
}

const encodeSearchParams = (obj) => {
  if (!obj) return ''
  return Object.keys(obj).map(key => obj[key] ? (`${key}=${encodeURIComponent(obj[key])}`) : '').filter(i => i).join('&')
}


axios.interceptors.request.use(async (config) => {

  config.url = addPrefix(config.url)
  config.url = config.url.indexOf('http') > 0 ? `http${config.spilt('http')[0]}` : config.url // axios fixbug

  config.data = encodeSearchParams(config.data)

  const needToken = !whitelist.some(item => config.url.indexOf(item) > -1)
  if (needToken) {
    config.headers.common['Authorization'] = `Bearer ${ await TokenHelpers.getAccessToken() }`
  }
  config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
  return config
}, err => {
  return Promise.reject(err)
})

axios.interceptors.response.use(async response => {
  console.group('request => interceptors => response ')
  console.log('response: ', response)
  console.groupEnd()
  const {
    code,
    msg,
    respData,
    respList,
    retData,
    retCode,
    retMsg
  } = response.data

  if (code === 0 || retCode === '999999' || code === 500) {
    console.error(msg || retMsg)
    return Promise.reject({ ...response.data,
      type: 1
    })
  }
  return respData || respList || retData || response.data
}, async err => {
  console.log(err);

  try {
    // const needRefreshToken = checkNeedRefreshToken(err.response)
    // && error_description.indexOf('Invalid access token') > -1
    if (status === 401 && error === 'invalid_token') {
      return await Authorize.refresh().then(async token => {
        const { access_token, refresh_token, token_type } = token
        const { config } = err
        await TokenHelpers.setAccessToken(access_token)
        await TokenHelpers.setRefreshToken(refresh_token)
        config.headers.Authorization = `${token_type} ${access_token}`
        return await axios.request(config)
      }).catch(errRefresh => {
        console.log(`refresh token err: `, JSON.parse(JSON.stringify(errRefresh)))
        async () => {
          await Storage.clear()
          Router.replace({
            path: '/login'
          })
        }
      })
    } else {
      console.log(`http err status = ${ status }`, JSON.parse(JSON.stringify(err)))

      return Promise.reject(err)
    }
  } catch (error) {
    console.log(`exception: `, JSON.parse(JSON.stringify(error)))
    return Promise.reject({
      error_description: 'server err'
    })
  }
})


export default class Http {
  static get = (url, params) => axios.get(url, {
    params
  })
  static post = (url, data) => axios.post(url, data)
  static put = (url, data) => axios.put(url, data)
  static delete = () => axios.delete(url, data)
}
