import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from './config';
import { store, persistor } from './redux/store';
import './App.css';
import Snackbar from './app/Common/components/Alert/Snackbar';
import { AlertContext } from './contexts/AlertContext';

const App = () => {
  const snackbarRef = useRef(null);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AlertContext.Provider value={snackbarRef}>
          <Router />
          <Snackbar ref={snackbarRef} />
        </AlertContext.Provider>
      </PersistGate>
    </Provider>
  );
};

export default App;
