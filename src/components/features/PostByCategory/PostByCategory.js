import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import dateToStr from "../../../utils/dateToStr";
import { Link } from 'react-router-dom';
import { getPostByCategory } from '../../../redux/postsRedux';

const PostByCategory = () => {
  const { postCategory } = useParams();
  console.log(postCategory)
  const posts = useSelector((state) => getPostByCategory(state, postCategory));

  if (posts.length === 0)
    return (
      <>
        <h1>Category: {postCategory}</h1>
        <h3>No posts in this category</h3>
      </>
    );
  return (
    <>
      <h1>Category: {postCategory}</h1>
      <div className="row">
        {posts.map((post) => (
          <div className="col-12 col-sm-6 col-md-4 mt-4 px-3" key={post.id} xs={12} sm={6} lg={4}>
            <div key={post.id}>
              <div className="border p-3">
                <div>{post.title}</div>
                <div>
                  <strong>Author:</strong> {post.author} <br />
                  <strong>Published:</strong> {dateToStr(post.publishedDate)}
                  <br />
                  <strong>Category:</strong> {post.category}
                </div>
                <div>{post.shortDescription}</div>
                <Button variant='primary' as={Link} to={'/post/' + post.id}>
                  Read more
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostByCategory;