import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App';
import Store from '@/redux/store'
import registerServiceWorker from './registerServiceWorker';
import './assets/style/reset.css'
import './assets/style/font.css'
let store = Store()
ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


