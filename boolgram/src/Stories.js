import ProfileImage from './ProfileImage';
import { SIZE_LARGE } from './ProfileImage';
import React, { useState } from 'react';

function Stories() {
  const [data, setData] = useState({ stories : [{"profile_picture":"https:\/\/flynn.boolean.careers\/exercises\/img\/boolgram\/profile1.jpg","profile_name":"palma.macejkovic"},{"profile_picture":"https:\/\/flynn.boolean.careers\/exercises\/img\/boolgram\/profile2.jpg","profile_name":"caesar39"},{"profile_picture":"https:\/\/flynn.boolean.careers\/exercises\/img\/boolgram\/profile3.jpg","profile_name":"susana24"},{"profile_picture":"https:\/\/flynn.boolean.careers\/exercises\/img\/boolgram\/profile4.jpg","profile_name":"elouise.gaylord"},{"profile_picture":"https:\/\/flynn.boolean.careers\/exercises\/img\/boolgram\/profile5.jpg","profile_name":"gladys.ziemann"},{"profile_picture":"https:\/\/flynn.boolean.careers\/exercises\/img\/boolgram\/profile6.jpg","profile_name":"aframi"},{"profile_picture":"https:\/\/flynn.boolean.careers\/exercises\/img\/boolgram\/profile7.jpg","profile_name":"cathrine.collier"},{"profile_picture":"https:\/\/flynn.boolean.careers\/exercises\/img\/boolgram\/profile8.jpg","profile_name":"golden.herman"}]})
  return (
    <section className="Stories">
        <ul>
        {data.stories.map(story=> (
          <li>
            <ProfileImage size={SIZE_LARGE} imageUrl={story.profile_picture}></ProfileImage>
            <div className="Stories-profileName">
              {story.profile_name}
            </div>
          </li>
        ))}
        </ul>
    </section>    
  );
}

export default Stories;
