import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import {Auth0Provider} from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <React.StrictMode>
        <Auth0Provider
        domain="dev-05o0jj0rko2ty63h.us.auth0.com"
        clientId="D1JPLEpnCVR3D6paH2qiRuthJjKtxFXQ"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
        >
        <BrowserRouter>
        <App />
      </BrowserRouter>
        </Auth0Provider>
   </React.StrictMode>,
  </Provider>
);

