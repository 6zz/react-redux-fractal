import React, { PropTypes } from 'react'
import Post from './Post'

const PostList = ({ posts }) => {
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

PostList.componentWillMount = () => {
  console.log('componentWillMount')
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default PostList
