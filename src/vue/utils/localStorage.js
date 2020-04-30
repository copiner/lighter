/** 新增&&修改本地缓存
 *  @param {string} key 标示
 *  @param {string} value 新增&修改的值
 */
const setItem = (key, value) => {
  let seller = window.localStorage.__seller__
  if (!seller) {
    seller = {}
  } else {
    seller = JSON.parse(seller)
    if (!seller[key]) {
      seller[key] = {}
    }
  }
  seller[key] = value
  window.localStorage.__seller__ = JSON.stringify(seller)
}
/** 查询本地缓存
 *  @param {string} key 标示
 *  @param {string} def 如果查询不到显示的值
 */
const getItem = (key) => {
  const seller = window.localStorage.__seller__
  if (!seller) {
    return null
  }
  const ret = JSON.parse(seller)[key]
  if (!ret) {
    return null
  }
  return ret
}

/** 清除本地缓存
 *  @param {string} key 标示
 *  @param {string} def 如果查询不到显示的值
 */
const removeItem = (key) => {
  let seller = window.localStorage.__seller__
  if (!seller) {
    return
  }
  seller = JSON.parse(seller)
  if (!seller[key]) {
    seller[key] = null
  }
  window.localStorage.__seller__ = JSON.stringify(seller)
}

const clear = () => {
  window.localStorage.removeItem('__seller__')
}

export default {
  setItem,
  getItem,
  removeItem,
  clear
}
