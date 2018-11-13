import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

function App() {
  return (
    <div className="App">
      <div className="menu">
        <div className="menu__button">Menu</div>
        <div className="menu__anchor" />
        <ul className="menu__container">
          <li className="menu__item">item 1</li>
          <li className="menu__item">item 2</li>
          <li className="menu__item">item 3</li>
          <li className="menu__item">item 4</li>
        </ul>
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
