import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import 'react-slideshow-image/dist/styles.css'
// import 'bootstrap/dist/css/bootstrap.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

// import "./featuresBackEnd/styles/stylesBE.css"
import "./app/layout/styles.css";
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { StoreContext, store } from './app/stores/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);


reportWebVitals();
