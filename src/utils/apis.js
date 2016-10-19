export default {
  postList: (limit=100) => `http://localhost:8888/wp-json/wp/v2/posts?per_page=${limit}`,
  postSingle: (slug, language='en') => `http://localhost:8888/${language}/wp-json/wp/v2/posts?slug=${slug}`
}
