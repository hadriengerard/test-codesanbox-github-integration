import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function App() {
  return (
    <div className="App">
      <div className="menu-button">
        <div className="menu-text">Menu</div>
        <div className="menu-anchor" />
        <ul className="menu">
          <li className="menu-item">item 1</li>
          <li className="menu-item">item 2</li>
          <li className="menu-item">item 3</li>
        </ul>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
