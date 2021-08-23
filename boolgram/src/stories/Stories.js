import './Stories.css'
import React from 'react';
import { ProfileImageLarge } from 'profile/ProfileImage';

const PLACEHOLDER_STORIES = 5;

function Stories(props) {
    let profileItems;

    if (props.showLoading) {
        profileItems = [];
        for (let i = 0; i !== PLACEHOLDER_STORIES; i++) {
            profileItems.push(
                <li key={i}>
                    <ProfileImageLarge showLoading={true} />
                    <div className="Stories-profileName">&nbsp;</div>
                </li>)
        }
    }
    else {
        profileItems = props.profiles.map((profile, index) => (
            <li key={index}>
                <ProfileImageLarge imageUrl={profile.profile_picture} />
                <div className="Stories-profileName">
                    {profile.profile_name}
                </div>
            </li>
        ));
    }

    return (
        <section className="Stories">
            <ul>{profileItems}</ul>
        </section>
    );
}

export default Stories;
