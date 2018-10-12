export default ({ callBackId, data, status }, { resolve, reject }) => {
  if (status === 'success') {
    resolve(data)
  } else {
    reject(data)
  }
}
