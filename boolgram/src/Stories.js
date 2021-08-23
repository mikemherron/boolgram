import React from 'react';

import { SIZE_LARGE } from './ProfileImage';
import { GET_PROFILES_URL } from './BoolgramApi';

import useFetchJson from './useFetchJson';
import ProfileImage from './ProfileImage';

function Stories() {
  
  const [profiles, isLoading, hasError] = useFetchJson(GET_PROFILES_URL)
 
  if(profiles==null) {
    return null;
  }

  return (
    <section className="Stories">
        <ul>
        {profiles.map(profile=> (
          <li>
            <ProfileImage size={SIZE_LARGE} imageUrl={profile.profile_picture}></ProfileImage>
            <div className="Stories-profileName">
              {profile.profile_name}
            </div>
          </li>
        ))}
        </ul>
    </section>    
  );
}

export default Stories;
