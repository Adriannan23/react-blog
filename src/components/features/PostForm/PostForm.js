import PropTypes from 'prop-types';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const PostForm = ({ action, actionText, ...props }) => {

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState('');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [category, setCategory] = useState(props.category || '');

  const { register, handleSubmit: validate, formState: { errors } } = useForm();

  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if (content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content, category });
    }

  };

  const categories = useSelector((state) => state.categories);

  return (
    <div className="row" >
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <Form onSubmit={validate(handleSubmit)} >
          <Form.Group className="mb-3 col-4" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              {...register("title", { required: true, minLength: 3 })}
              value={title}
              onChange={e => setTitle(e.target.value)}
              type="text" placeholder="Enter title"
            />
            {errors.title && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (min. 3 characters)</small>}
          </Form.Group>
          <Form.Group className="mb-3 col-4" controlId="exampleForm.ControlInput1" >
            <Form.Label>Author</Form.Label>
            <Form.Control
              {...register("author", { required: true, minLength: 3 })}
              value={author}
              onChange={e => setAuthor(e.target.value)}
              type="text" placeholder="Enter author"
            />
            {errors.author && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            {errors.author && errors.author.type === "minLength" && (
              <small className="d-block form-text text-danger mt-2">Author must be at least 3 characters long</small>
            )}
          </Form.Group>
          <Form.Group className="mb-3 col-4" controlId="exampleForm.ControlInput1" >
            <Form.Label>Published</Form.Label>
            <DatePicker
              selected={publishedDate ? new Date(publishedDate) : new Date()}
              onChange={(date) => setPublishedDate(date)}
            />
            {dateError && <small className="d-block form-text text-danger mt-2">Please choose date.</small>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Select
              {...register("category", { required: true })}
              as="select"
              placeholder="Please select category"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              {categories.map((category => (<option value={category}>{category}</option>)))}
            </Form.Select>
            {errors.category && <small className="d-block form-text text-danger mt-2">Field is required.</small>}
          </Form.Group>

          <Form.Group className="mb-3  col-10" controlId="exampleForm.ControlTextarea1" >
            <Form.Label>Short description</Form.Label>
            <Form.Control
              {...register("shortDescription", { required: true, minLength: 20 })}
              value={shortDescription}
              onChange={e => setShortDescription(e.target.value)}
              type="text" placeholder="Enter short description"
            />
            {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field is required</small>}
            {errors.shortDescription && errors.shortDescription.type === "minLength" && (
              <small className="d-block form-text text-danger mt-2">Short description must be at least 20 characters long</small>
            )}

          </Form.Group>
          <Form.Group className="mb-3" controlId="content">
            <Form.Label>Main Content</Form.Label>
            <ReactQuill
              theme="snow"
              onChange={setContent
              }
            // placeholder="Write your post here"

            />
            {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
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
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string,
  publishedDate: PropTypes.object,
  title: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  shortDescription: PropTypes.string,
}