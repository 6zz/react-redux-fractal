import { get } from 'lodash'

const WP_REST_URI = get(window, 'WP_REST_SERVER', '')
const BROWSER_LANG = get(window, 'I18N.lang', 'en')

export default {
  postList: (limit=100, language=BROWSER_LANG) => `${WP_REST_URI}/${language}/wp-json/wp/v2/posts?per_page=${limit}`,
  postSingle: (slug, language=BROWSER_LANG) => `${WP_REST_URI}/${language}/wp-json/wp/v2/posts?slug=${slug}`
}
