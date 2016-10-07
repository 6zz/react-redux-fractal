import { connect } from 'react-redux'
import PostList from '../components/PublishedPostList.js.jsx'
import { bindActionCreators } from 'redux'
import fetchPosts from '../modules/actions'

const mapStateToProps = (state) => ({
  posts: state.posts.items
})

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: bindActionCreators(fetchPosts, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
