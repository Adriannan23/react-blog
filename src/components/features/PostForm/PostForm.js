import PropTypes from 'prop-types';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const PostForm = ({ action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');


  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };

  return (
    <div className="row" >
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <Form onSubmit={handleSubmit} >
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
            <DatePicker
              selected={publishedDate ? new Date(publishedDate) : new Date()}
              onChange={(date) => setPublishedDate(date)}
            />
          </Form.Group>
          <Form.Group className="mb-3  col-10" controlId="exampleForm.ControlTextarea1" >
            <Form.Label>Short description</Form.Label>
            <Form.Control as="textarea" rows={3}
              placeholder="Enter a description here"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 col-10" controlId="exampleForm.ControlTextarea1" >
            <Form.Label>Main content</Form.Label>
            <ReactQuill theme="snow" onChange={setContent} placeholder='Write your post here' />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
          >
            {actionText}
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default PostForm;

PostForm.propTypes = {
  action: () => { },
  actionText: PropTypes.string,
  publishedDate: PropTypes.object,
  title: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  shortDescription: PropTypes.string,
}