import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteConfig from './routeConfig';

function App() {
  return (
    <Router>
      <RouteConfig />
    </Router>
  );
}

export default App;