import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';
import { useNavigate } from 'react-router-dom';
import { useHref } from "react-router-dom";
import { selectPostsById } from "../../../redux/postsRedux";

const EditPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const href = useHref();
  let tabWithHref = href.split("/");
  const postId = parseInt(tabWithHref[tabWithHref.length - 1]);

  const handleSubmit = post => {
    dispatch(editPost({ ...post, postId }));
    navigate('/')
    console.log('edit? ')
  };

  const post = useSelector(state => selectPostsById(state, postId));
  console.log('post', post.title);

  return (

    <PostForm action={handleSubmit} actionText="Edit post" {...post} />
  )
};

export default EditPostForm;