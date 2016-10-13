export default {
  postList: (limit=100) => `http://localhost:8888/wp-json/wp/v2/posts?per_page=${limit}`,
  postSingle: (slug) => `http://localhost:8888/wp-json/wp/v2/posts?slug=${slug}`
}
