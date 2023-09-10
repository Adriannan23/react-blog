import { useSelector } from "react-redux";
import { selectedPosts } from "../../../redux/postsRedux";
import { Link } from "react-router-dom";
import dateToStr from "../../../utils/dateToStr";
const Articles = props => {

  const posts = useSelector(selectedPosts);

  return (
    <div className="row">
      {posts.map(post => (
        <div key={post.id} className="col-12 col-sm-6 col-md-4 mt-4 px-3">
          <div className="border p-3">
            <h3>{post.title}</h3>
            <p><b>Author: </b>{post.author}</p>
            <p><b>Published: </b>{dateToStr(post.publishedDate)}</p>
            <div>{post.shortDescription}</div>
            <button type="button" className="btn btn-primary mt-3">
              <Link to={`/post/${post.id}`} className="text-light text-decoration-none">Read More</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Articles;




