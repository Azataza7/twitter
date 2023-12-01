import React from 'react';
import {Post} from '../../types';
import {Link} from 'react-router-dom';

interface Props {
  post: Post
}

const PostItem: React.FC<Props> = ({post}) => {
  return (
    <div className="post-box mt-3 p-3">
      <span className="datetime text-success fw-bold">Created at:{post.createdAt}</span>
      <p className="post-title fs-2 fw-bold">{post.title}</p>
      <Link className="btn btn-dark link-opacity-10-hover fw-bold" to={'posts/' + post.id + '.json'}>Read more</Link>
    </div>
  );
};

export default PostItem;