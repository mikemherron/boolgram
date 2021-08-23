import './App.css';
import React from 'react';
import { IconButtonHeart, IconButtonHome } from 'icons/IconButton';
import { ProfileImageSmall } from 'profile/ProfileImage';
import LoggedInPlaceholder from 'profile/logged-in-profile.png';
import PostsContainer from 'post/PostsContainer';
import StoriesContainer from 'stories/StoriesContainer';

function App() {
  return (
    <div className="App">
      <nav className="App-header">
        <div className="App-header-content">
          <h1>Boolgram</h1>
          <div className="App-search-container">
            <input className="App-search-input" placeholder="Search" />
          </div>
          <div className="App-icon-container">
            <IconButtonHome />
            <IconButtonHeart />
            <ProfileImageSmall imageUrl={LoggedInPlaceholder} showHighlight={false} />
          </div>
        </div>
      </nav>
      <main className="App-main">
        <section className="App-main-feeds">
          <StoriesContainer />
          <PostsContainer />
        </section>
        <section className="App-sidebar">
          Placeholder area for follow suggestions
        </section>
      </main>
    </div>
  );
}

export default App;
