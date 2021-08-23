import useFetchJson from './useFetchJson';
import Post from './Post';
import { GET_POSTS_URL } from './BoolgramApi'

function Posts() {

  const [posts, isLoading, hasError] = useFetchJson(GET_POSTS_URL)

  if (posts==null) {
    return null 
  }

  return posts.map(post=>(<Post post={post}/>))
}

export default Posts;
