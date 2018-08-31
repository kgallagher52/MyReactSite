import React                    from 'react';
import ReactDOM                 from 'react-dom';
import registerServiceWorker    from './registerServiceWorker';
import ArrowComponent           from './components/ArrowComponent';
import HomeComponent            from './components/Home';
import TitleComponent           from './components/TitleComponent';
import './css/index.css';
import './js/main.js';
import './css/Home.css';



ReactDOM.render(<HomeComponent />, document.getElementById('homeComponent'));
ReactDOM.render(<TitleComponent/>, document.getElementById('titleComponent'));
ReactDOM.render(<ArrowComponent/>, document.getElementById('arrowComponent'));


registerServiceWorker();

