import { useHref } from "react-router-dom";
import { selectPostsById } from "../../../redux/postsRedux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


const Post = props => {
  const href = useHref();
  let tabWithHref = href.split("/");
  const postId = parseInt(tabWithHref[tabWithHref.length - 1]); // Tutaj mamy postId pobrany z danego wcisnietego postu

  const post = useSelector(state => selectPostsById(state, postId));

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div >
      <div key={post.id} className="row" >
        <div className="col-md-3"></div>
        <div className="col-md-5 mb-4">
          <h3>{post.title}</h3>
          <p><b>Author: </b>{post.author}</p>
          <p><b>Published: </b>{post.publishedDate}</p>
          <div>{post.shortDescription}</div>
        </div>
        <div className="col-md-4">
          <button type="button" className="btn btn-outline-info mx-2">
            <Link to={`/post/edit/${post.id}`} className="text-info text-decoration-none">Edit</Link>
          </button>
          <button type="button" className="btn btn-outline-danger" onClick={handleShow}>Delete</button>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              This operation will completely remove this post from the app. Are you sure you want to proceed?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="danger">Remove</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Post;