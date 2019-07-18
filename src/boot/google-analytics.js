import ga from './analytics'

export default ({ router }) => {
  router.afterEach((to, from) => {
    var key = 'sessionId'
    var sessionId = localStorage.getItem(key)
    if (sessionId == null) {
      sessionId = Math.random()
      localStorage.setItem(key, sessionId)
    }
    ga.logPage(to.path, to.name, sessionId)
  })
}
