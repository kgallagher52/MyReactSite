import React from 'react';
import ReactDOM from 'react-dom';
import HomeComponent from './components/Home';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import './js/main.js';


ReactDOM.render(<HomeComponent />, document.getElementById('home'));

registerServiceWorker();

