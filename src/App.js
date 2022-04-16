import * as React from 'react';
import { Router } from './config';
import './App.css';

const App = () => {
  const role = 'superadmin';
  return <Router role={role} />;
};

export default App;
