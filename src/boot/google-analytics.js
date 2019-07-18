import ga from './analytics'

export default ({ router }) => {
  router.afterEach((to, from) => {
    var sessionId = '12345' // TODO get from localStorage, etc
    ga.logPage(to.path, to.name, sessionId)
  })
}
