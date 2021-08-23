import useFetchJson from 'api/useFetchJson';
import { GET_POSTS_URL } from 'api/BoolgramApi'
import Post from './Post';

function PostsContainer() {

  const [posts, isLoading, hasError] = useFetchJson(GET_POSTS_URL)

  if (posts==null) {
    return null 
  }

  return posts.map(post=>(<Post post={post}/>))
}

export default PostsContainer;
