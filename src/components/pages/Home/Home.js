import Articles from "../../features/Articles/Articles";
import { Link } from "react-router-dom";


const Home = props => {
  return <div>
    <div className="d-flex justify-content-between">
      <h2>All posts</h2>
      <button type="button" className="btn btn-outline-info">
        <Link to={`/post/add`} className="text-decoration-none">Add post</Link>
      </button>
    </div>
    <Articles />
  </div>
}

export default Home;