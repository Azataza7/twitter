import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import axiosApi from '../../axiosApi';
import {Post} from '../../types';
import Spinner from '../../Components/Spinner/Spinner';

const PostDetails = () => {
  const [postDetail, setPostDetail] = useState<Post>();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const params = useParams();

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axiosApi.get(`posts/${params.articleId}`);
      const data: Post = response.data;
      !data ? navigate('*') : setPostDetail(data);
    }
    finally {
      setLoading(false);
    }
  };

  const deletePost = async () => {
    return await axiosApi.delete(`posts/${params.articleId}`);
  };

  useEffect(() => {
    void fetchData();
  }, []);

  let post = (
    <div className="post-details m-2">
      <h3 className="title-post text-center">{postDetail?.title}</h3>
      <p className="post-datetime text-primary">Posted at {postDetail?.createdAt}</p>
      <p className="post-text">{postDetail?.description}</p>

      <div className="control-buttons">
        <Link className="btn btn-danger" to="/" onClick={deletePost}>Delete</Link>
        <Link
          className="btn btn-secondary"
          to={{pathname: '/posts' + params.articleId + '/edit', state: { post: postDetail}
          }}>Edit</Link>
      </div>
    </div>
  );

  if (loading) {
    post = <Spinner/>;
  }

  return (
    <>
      {post}
    </>
  );
};

export default PostDetails;