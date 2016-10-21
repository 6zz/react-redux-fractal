import { connect } from 'react-redux'
import SinglePost from '../components/SinglePublishedPost'
import { get  } from 'lodash'
import { fetchPosts } from '../../../../../store/posts'
import { bindActionCreators } from 'redux'
// import fetchPost from '../modules/actions'

const mapStateToProps = (state) => {
  // if we come from the posts listing
  // state.location.state contains the single post
  let item = get(state, 'location.state', null)
  if (item === null) {
    // this might be a direct visit to the post
    item = get(state, 'story.items[0]', null)
  }

  return { item }
}

const mapDispatchToProps = {
  fetchPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost)
