//selectors
export const selectedPosts = state => state.posts;

export const selectPostsById = (state, id) => {
  return state.posts.filter(post => post.id == id)[0];
}
// actions
const createActionName = actionName => `app/posts/${actionName}`;

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default postsReducer;