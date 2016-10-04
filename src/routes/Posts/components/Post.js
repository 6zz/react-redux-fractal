import React, { PropTypes } from 'react'

const Post = ({ title, author }) => (
  <li><b>{title}</b> {author}</li>
)

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Post
