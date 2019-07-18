export default {
  logEvent (category, action, label, sessionId = null) {
    global.dataLayer.push({
      'appEventCategory': category,
      'appEventAction': action,
      'appEventLabel': label,
      'sessionID': sessionId
    })
    global.dataLayer.push({ 'event': 'appEvent' })
  },

  logPage (path, name, sessionId = null) {
    console.log('logPage fired')
    console.log(global.dataLayer)
    global.dataLayer.push({
      'screenPath': path,
      'screenName': name,
      'sessionID': sessionId
    })
    global.dataLayer.push({ 'event': 'appScreenView' })
  }
}
