import React from 'react';
import './App.css';
import { LinkBorderLineRouter, LinkBorderLine, ContentCard } from './components/Utils.js';

function GodotGame() {
  return (
    <div className='GameContent'  style={{ width: '70%', height: '600px', overflow: 'hidden' }}>
      <h1>Chess</h1>
      <iframe
        src={process.env.PUBLIC_URL + '/chess_game/AjedrezDaifer.html'}
        title="Godot Game"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <side className='side-icon'>
          <img src= {process.env.PUBLIC_URL + '/img/Icon.png'} className='use-icon' alt='Profile icon'></img>
        </side>
        <nav className="Navigation-container">
          <LinkBorderLineRouter href="/#home-title" content="Home" smooth={true}/>
          <LinkBorderLineRouter href="/#cv-title" content="CV"  smooth={true}/>
          <LinkBorderLineRouter href="/#features-title" content="Features"  smooth={true}/>
          <LinkBorderLineRouter href="/#project-title" content="Projects"  smooth={true}/>
          <LinkBorderLineRouter href="/#art-title" content="Art"  smooth={true}/>
          <LinkBorderLineRouter href="/#contact-title" content="Contact" smooth={true} />
        </nav>
      </header>

      <main className="app-main">
      <GodotGame/>
      </main>

      <footer>
        <div class="footer-content">
          <p>&copy; 2024. All rights reserved by Daifer Ramirez</p>
          <section className='contact-data'>
            <LinkBorderLine href="" content="daiferramirez@gmail.com" />
            <LinkBorderLine href="" content="+34 653 84 81 46" />
            <LinkBorderLine href="" content="PG. Urrutia 94-96, 08031" />
          </section>
        </div>
      </footer>
    </div>
  );
}

export default App;
