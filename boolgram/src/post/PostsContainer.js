import React from 'react';
import useFetchJson from 'api/useFetchJson';
import { GET_POSTS_URL } from 'api/BoolgramApi';

import Post from './Post';
import Error from 'error/Error';

function PostsContainer() {

  const [posts, isLoading, hasError] = useFetchJson(GET_POSTS_URL);
  
  const onAddComment = (post, comment) => {
    console.log(post);
    console.log(comment);
    //In an actual application I'd expect another API call
    //to happen here to actually add the comment.
  };

  if (hasError) {
    return <Error message="Unable to load feed" />;
  }

  if (isLoading) {
    return <Post showLoading={true} />;
  }

  return posts.map((post, index) => (<Post key={index} post={post} onAddComment={comment=>(onAddComment(post, comment))} />));
}

export default PostsContainer;
