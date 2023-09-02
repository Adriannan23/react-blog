import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';

const AddPostForm = props => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = e => {

    e.preventDefault();
    dispatch(addPost({ title, shortDescription, author, publishedDate, content }));

    navigate('/');
  };

  return (
    <div className="row" >
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <Form  >
          <Form.Group className="mb-3 col-4" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text" placeholder="Enter title here"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-4" controlId="exampleForm.ControlInput1" >
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter author here"
              value={author}
              onChange={(e) => setAuthor(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3 col-4" controlId="exampleForm.ControlInput1" >
            <Form.Label>Published</Form.Label>
            <Form.Control
              type="date"
              value={publishedDate}
              onChange={(e) => setPublishedDate(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3  col-10" controlId="exampleForm.ControlTextarea1" >
            <Form.Label>Short description</Form.Label>
            <Form.Control as="textarea" rows={3}
              placeholder="Enter a description here"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3  col-10" controlId="exampleForm.ControlTextarea1" >
            <Form.Label>Main content</Form.Label>
            <Form.Control as="textarea" rows={5}
              value={content} placeholder="Leave a comment here"
              onChange={(e) => setContent(e.target.value)} />
          </Form.Group>
        </Form>
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Add post
        </Button>
      </div>
    </div>
  )
}

export default AddPostForm;