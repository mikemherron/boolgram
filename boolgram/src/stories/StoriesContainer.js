import React from 'react';

import { GET_PROFILES_URL } from 'api/BoolgramApi';
import useFetchJson from 'api/useFetchJson';
import Stories from './Stories';
import Error from 'error/Error';

function StoriesContainer() {

  const [profiles, isLoading, hasError] = useFetchJson(GET_PROFILES_URL);

  if (hasError) {
    return <Error message="Unable to load stories" />;
  }

  if (isLoading) {
    return <Stories showLoading={true} />;
  }

  return <Stories profiles={profiles} />;
}

export default StoriesContainer;
