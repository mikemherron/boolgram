import './Stories.css'
import React from 'react';
import { ProfileImageLarge } from 'profile/ProfileImage';

function Stories(props) {
  return (
    <section className="Stories">
        <ul>
        {props.profiles.map(profile=> (
          <li>
            <ProfileImageLarge imageUrl={profile.profile_picture} />
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
