export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'justin',
        uid: '12345678'
      })
    }, 1000)
  })
}
