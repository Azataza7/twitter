import React, {useCallback, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Post} from '../../types';
import axiosApi from '../../axiosApi';
import Spinner from '../../Components/Spinner/Spinner';

const AddPost: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [newPost, setNewPost] = useState<Post>({
    title: '',
    description: '',
    createdAt: new Date().toLocaleString(),
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