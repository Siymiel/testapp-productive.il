import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store, saveState } from './store';

store.subscribe(() => {
  saveState(store.getState());
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Toaster
      toastOptions={{
        duration: 4000
      }}
    />
    <Router>
      <App />
    </Router>
  </Provider>
);
