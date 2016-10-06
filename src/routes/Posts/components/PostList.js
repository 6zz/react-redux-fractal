import React, { PropTypes } from 'react'
import Post from './Post'

class PostList extends React.Component {
  componentWillMount () {
    console.log('PostList will mount')
    this.props.fetchPosts()
  }

  render () {
    const posts = this.props.posts
    return (
      <ul>
        {
          posts.map(post =>
            <Post
              key={post.id}
              {...post}
            />
        )}
      </ul>
    )
  }

  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isOptional
    }).isRequired).isRequired,

    fetchPosts: PropTypes.func.isRequired
  }
}

export default PostList
