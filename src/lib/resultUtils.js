export default ({ callBackId, data, status, message }, { resolve, reject }) => {
  if (status === 'success') {
    resolve(data)
  } else {
    reject(message)
  }
}
