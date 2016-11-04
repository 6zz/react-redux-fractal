// posts retrieving actions and reducers
// this can be used by both Posts (list) and Post (single) routes
import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts () {
  return {
    type: REQUEST_POSTS
  }
}

const REQUEST_FAILURE = 'REQUEST_FAILURE'
function requestFailed (error) {
  console.log('request failed:', error.message)
  return {
    type: REQUEST_FAILURE
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts (json) {
  return {
    type: RECEIVE_POSTS,
    items: json.map(post => (
      Object.assign(
        {},
        post,
        {
          title: post.title.rendered
        }
      )
    ))
  }
}

/**
 * returns an asncy thunk for fetching posts through the rest api
 * @param  {sting} api rest api to execute
 * @return {function}  an async function to be processed by thunk middleware
 */
export function fetchPosts (api) {
  return function asyncFetch (dispatch) {
    dispatch(requestPosts())

    return fetch(api)
      .then(response => response.json())
      .then(json => {
        console.log('fetch result', json)
        dispatch(receivePosts(json))
      })
      .catch(error => {
        dispatch(requestFailed(error))
      })
  }
}

/**********
 * reducers
 */

function postsReducer (state = {
  items: []
}, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign({}, state, { items: action.items })
    case REQUEST_POSTS:
      /* fall through */
    default:
      return state
  }
}

export default postsReducer
