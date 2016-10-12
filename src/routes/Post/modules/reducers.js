function singlePostReducer(state = {
  post: {}
}, action) {
  console.log('single post reducer, action', action);
  if (action.payload && action.payload.state && action.payload.state.post) {
    return Object.assign({}, state, { post: action.payload.state.post });
  } else {
    return state;
  }
}

export default singlePostReducer;
