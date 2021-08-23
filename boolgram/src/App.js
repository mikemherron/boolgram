import './App.css';
import logo from './logo.png';
import IconButtonHeart from './IconButtonHeart';
import Stories from './Stories';
import Posts from './Posts';

function App() {
  return (
    <div className="App">
      <nav className="App-header">
        <div className="App-header-content">
          <h1>Boolgram</h1>
          <div className="App-search-container">
            <input className="App-search-input" placeholder="Search"/>
          </div>
          <div className="App-icon-container">
            <IconButtonHeart />
            <svg aria-label="Home" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path></svg>          
          </div>
        </div>
      </nav>
      <main className="App-main">
        <section className="App-main-feeds">
          <Stories/>
          <Posts/>
        </section>
        <section className="App-sidebar">
          some content 
          will go here
          in the future
        </section>
      </main>
    </div>
  );
}

export default App;
