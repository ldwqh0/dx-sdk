export default ({ callBackId, data, status, message }: CallBackResult, { resolve, reject }: { resolve: (value?: any) => void, reject: (reason?: any) => void }): void => {
  if (status === 'success') {
    resolve(data)
  } else {
    reject(message)
  }
}
