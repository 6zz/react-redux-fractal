import fetch from 'isomorphic-fetch'

const API = 'http://localhost:8888/wp-json/wp/v2/posts?per_page=100'

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts () {
  return {
    type: REQUEST_POSTS
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts (json) {
  return {
    type: RECEIVE_POSTS,
    posts: json => console.log(json)
  }
}

export default function fetchPosts () {
  return function asyncFetch (dispatch) {
    dispatch(requestPosts())

    return fetch(API)
      .then(response => response.json())
      .then(json => {
        console.log('fetch result', json)
        dispatch(receivePosts(json))
      })
  }
}
