
//selectors
export const selectedPosts = state => state.posts;

export const selectPostsById = (state, id) => {
  return state.posts.filter(post => post.id == id)[0];
}

export const getPostByCategory = ({ posts }, postCategory) =>
  posts.filter((post) => post.category.toLowerCase() === postCategory.toLowerCase());



// actions
const createActionName = actionName => `app/posts/${actionName}`;

export const removePost = (postId) => ({
  type: 'REMOVE_POST',
  payload: postId,
});

export const addPost = payload => {
  return ({ type: 'ADD_POST', payload })
};

export const editPost = payload => {
  return ({ type: 'EDIT_POST', payload })
};



// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'REMOVE_POST':
      return statePart.filter((post) => post.id !== action.payload);

    case 'ADD_POST':
      return [...statePart, { ...action.payload, id: statePart.length + 1 }];

    case 'EDIT_POST':
      return statePart.map(post => (post.id == action.payload.postId ? { ...post, ...action.payload } : post));

    default:
      return statePart;
  };
};

export default postsReducer;