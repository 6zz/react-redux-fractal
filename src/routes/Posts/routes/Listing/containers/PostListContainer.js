import { connect } from 'react-redux'
import PostList from '../components/PublishedPostList'
import { bindActionCreators } from 'redux'
import { fetchPosts } from 'store/posts'

const mapStateToProps = (state) => ({
  posts: state.posts.items
})

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: bindActionCreators(fetchPosts, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
