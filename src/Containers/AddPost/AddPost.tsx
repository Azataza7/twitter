import React, {useCallback, useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {NewPost, Post} from '../../types';
import axiosApi from '../../axiosApi';
import Spinner from '../../Components/Spinner/Spinner';

const AddPost: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [newPost, setNewPost] = useState<NewPost>({
    title: '',
    description: '',
    createdAt: new Date().toLocaleString(),
  });

  useEffect(() => {
    if (location.state && location.state.post) {
      const post: Post = location.state.post;

      setNewPost({
        title: post.title || '',
        description: post.description || '',
        createdAt: post.createdAt || new Date().toLocaleString()
      })
    }
  }, [location.state])

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

  if (loading) {
    form = <Spinner/>;
  }

  return (
    <div>
      {form}
    </div>
  );
};

export default AddPost;