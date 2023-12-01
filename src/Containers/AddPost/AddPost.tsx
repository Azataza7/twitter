import React, {useCallback, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Post} from '../../types';
import axiosApi from '../../axiosApi';

const AddPost: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [newPost, setNewPost] = useState<Post>({
    id: '',
    title: '',
    description: '',
  });

  const postChanged = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setNewPost(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      await axiosApi.post('posts.json', newPost);
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  let form = (
    <form className="form" onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="name">Post title:</label>
        <input
          id="title" type="text" name="title" required
          className="form-control"
          value={newPost.title}
          onChange={postChanged}
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Description:</label>
        <textarea
          id="description" name="description" required
          className="form-control"
          value={newPost.description}
          onChange={postChanged}
        />
      </div>
      <button className="btn btn-primary" type="submit">Save</button>
    </form>
  );

  return (
    <div>
      {form}
    </div>
  );
};

export default AddPost;