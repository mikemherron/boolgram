import React from 'react';

import { GET_PROFILES_URL } from 'api/BoolgramApi';
import useFetchJson from 'api/useFetchJson';
import Stories from './Stories';

function StoriesContainer() {
  
  const [profiles, isLoading, hasError] = useFetchJson(GET_PROFILES_URL)
 
  if(profiles==null) {
    return null;
  }

  return <Stories profiles={profiles}/>;
}

export default StoriesContainer;
