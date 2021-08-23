import React from 'react';
import useFetchJson from 'api/useFetchJson';
import { GET_POSTS_URL } from 'api/BoolgramApi';

import Post from './Post';
import Error from 'error/Error';

function PostsContainer() {

  const [posts, isLoading, hasError] = useFetchJson(GET_POSTS_URL);

  if (hasError) {
    return <Error message="Unable to load feed" />;
  }

  if (isLoading) {
    return <Post showLoading={true} />;
  }

  return posts.map((post, index) => (<Post key={index} post={post} />));
}

export default PostsContainer;
