import React from 'react';

import { HelmetProvider } from 'react-helmet-async';


import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { App } from './components/App/App';
import { store} from './redux/store';
// import { store, persistor } from './redux/store';
import 'modern-normalize';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);






// CONTACTS

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
// // import { PersistGate } from 'redux-persist/integration/react';
// // import { persistor } from './redux/store';
// import 'modern-normalize';
// import App from './components/App/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       {/* <PersistGate loading={null} persistor={persistor}> */}
//         <App />
//       {/* </PersistGate> */}
//     </Provider>
//   </React.StrictMode>
// );
