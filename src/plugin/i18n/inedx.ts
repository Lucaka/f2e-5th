import { createI18n } from 'vue-i18n'
import zhTW from './zh-TW.json'

const i18n = createI18n({
  locale: 'zh-TW',
  messages: {
    'zh-TW': zhTW
  }
})


export default i18n