import React from 'react';
import ReactDOM from 'react-dom';
//import ReactDOMServer from 'react-dom/server';

import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOMServer.renderToString(<App />, document.getElementById('root'));

serviceWorker.unregister();