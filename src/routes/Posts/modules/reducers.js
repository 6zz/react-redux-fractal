// import { combineReducers } from 'redux'
import {
  REQUEST_POSTS, RECEIVE_POSTS
} from './actions'

function postsReducer (state = {
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      console.log('requesting posts...')
      return state
    case RECEIVE_POSTS:
      return Object.assign({}, state, { items: action.items })
    default:
      return state
  }
}

export default postsReducer
