import axios from 'axios'
import axiosRetry from 'axios-retry'

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

    axiosRetry(axios, { retries: 10, retryDelay: axiosRetry.exponentialDelay })

    axios.get('https://www.google-analytics.com/collect?v=1&t=pageview&tid=UA-44300919-6&cid=' + sessionId + '&dt=' + name + '&dp=%2F' + path, function (result) {
      console.log('Logged to Google Analytics')
    })
  }
}
