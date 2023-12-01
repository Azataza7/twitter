import React, {useEffect, useState} from 'react';
import axiosApi from '../../axiosApi';
import PostItem from './PostItem';
import Spinner from '../Spinner/Spinner';
import {Post, PostList} from '../../types';

const Posts = () => {
  const [postList, setPostList] = useState<PostList[]>([]);
  const [loading, setLoading] = useState(false);


  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axiosApi.get('posts.json');
      const data = response.data;

      const postsArray = Object.keys(data).map((postId) => ({
        id: postId,
        ...data[postId],
      }));

      setPostList(postsArray.reverse());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchData();
  }, []);

  console.log(postList);

  let posts = (
    postList.map((postItem, i) => (
        <PostItem key={i} post={postItem}/>
      ))
  );


  return (
    <div className="p-2">
      <h3>Recent posts:</h3>
      {loading ? <Spinner/> : posts}
    </div>
  );
};

export default Posts;