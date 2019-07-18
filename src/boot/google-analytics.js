import ga from './analytics'

var sessionId = '12345'

export default ({ router }) => {
  router.afterEach((to, from) => {
    ga.logPage(to.path, to.name, sessionId)
  })
}
