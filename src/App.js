import * as React from 'react';
import { Router } from './config';

const App = () => {
  const role = 'keuangan';
  return <Router role={role} />;
};

export default App;
