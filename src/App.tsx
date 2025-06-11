import React from 'react';
import Dashboard from './components/dashboard';
import { useResponsiveLayoutStyles } from './site/responsive-layout-styles';

function App() {
  const styles = useResponsiveLayoutStyles();
  return (
    <div className={styles.container}>
      <Dashboard />
    </div>
  );
}

export default App;