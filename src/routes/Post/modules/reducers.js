function singlePostReducer(state = {}, action) {
  console.log('single post reducer, action', action);
  if (action.items) {
    return Object.assign({}, state, { post: action.items[0] });
  } else {
    return state;
  }
}

export default singlePostReducer;
