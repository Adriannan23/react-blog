//selectors
export const selectedPosts = state => state.posts;

export const selectPostsById = (state, id) => {
  return state.posts.filter(post => post.id == id)[0];
}
// actions
const createActionName = actionName => `app/posts/${actionName}`;

export const removePost = (postId) => ({
  type: 'REMOVE_POST',
  payload: postId,
});

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'REMOVE_POST':
      return statePart.filter((post) => post.id !== action.payload);

    default:
      return statePart;
  };
};

export default postsReducer;