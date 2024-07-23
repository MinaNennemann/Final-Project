import 'antd/dist/reset.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={{ token: { colorPrimary: '#b3abc4' } }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
