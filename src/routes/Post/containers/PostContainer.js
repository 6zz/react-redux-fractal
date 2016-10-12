import { connect } from 'react-redux'
import SinglePost from '../components/SinglePublishedPost'
import { bindActionCreators } from 'redux'
// import fetchPost from '../modules/actions'

const mapStateToProps = (state) => {
  console.log('SinglePost>mapStateToProps', state);
  return ({ item: state.story.post })
}

// const mapDispatchToProps = (dispatch) => ({
//   fetchPost: bindActionCreators(fetchPosts, dispatch)
// })

export default connect(mapStateToProps)(SinglePost)
