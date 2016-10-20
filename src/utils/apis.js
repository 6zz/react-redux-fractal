const WP_REST_URI = window.WP_REST_SERVER || ''

export default {
  postList: (limit=100) => `${WP_REST_URI}/wp-json/wp/v2/posts?per_page=${limit}`,
  postSingle: (slug, language='en') => `${WP_REST_URI}/${language}/wp-json/wp/v2/posts?slug=${slug}`
}
