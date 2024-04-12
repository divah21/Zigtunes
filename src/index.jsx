import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { store } from './redux/store';
import { ContextProvider } from './contexts/contextprovider';
import { RouterProvider } from 'react-router-dom';
import router from './router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>   
     <Provider store={store}>
      {/* <Router>
        <App />
      </Router> */}
      <RouterProvider router ={router}/>
    </Provider>
    </ContextProvider>

  </React.StrictMode>,
);
