import AddPostForm from "../../features/AddPostForm/AddPostForm";

const AddPost = props => {

  return (
    <div className="row" >
      <div className="col-md-2 mb-2"></div>
      <h2 className="col-md-5 mb-4">Add post</h2>
      <AddPostForm />
    </div>
  )
}

export default AddPost;