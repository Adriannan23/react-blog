import shortid from 'shortid';

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

export const addPost = payload => ({ type: 'ADD_POST', payload });

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'REMOVE_POST':
      return statePart.filter((post) => post.id !== action.payload);

    case 'ADD_POST':
      return [...statePart, { ...action.payload, id: shortid() }];

    default:
      return statePart;
  };
};

export default postsReducer;