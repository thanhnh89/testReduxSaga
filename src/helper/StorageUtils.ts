export const STORAGE_KEYS = {
  token: 'token',
  userName: 'userName',
  userID: 'userID',
}

export default class StorageUtils {
  // local storage
  static setItem(key: string, value: any) {
    window.localStorage.setItem(key, value)
  }

  static getItem(key: string, defaultValue: any) {
    const result = window.localStorage.getItem(key)
    if (result === null || result === undefined) return defaultValue
    return result
  }

  static removeItem(key: string) {
    window.localStorage.removeItem(key)
  }

  static getToken() {
    return StorageUtils.getItem(STORAGE_KEYS.token, '')
  }
}
