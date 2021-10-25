import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import memoryUtils from './utils/memoryUtils'
import storageUtils from './utils/storageUtils'

// 读取local中存取的user，保存到内存中
const user = storageUtils.getUser();
memoryUtils.user = user;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

