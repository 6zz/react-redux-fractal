import { get  } from 'lodash'

function singlePostReducer(state = {
  post: {}
}, action) {
  console.log('single post reducer, action', action);
  const post = get(action, 'payload.state')
  if (post) {
    return Object.assign({}, state, { post });
  } else {
    return state;
  }
}

export default singlePostReducer;
