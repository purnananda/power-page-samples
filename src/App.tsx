import React from 'react';
import Dashboard from './components/dashboard';
import Feature from './components/feature';
import { useResponsiveLayoutStyles } from './site/responsive-layout-styles';

function App() {
  const styles = useResponsiveLayoutStyles();
  return (
    <div className={styles.container}>
      <Feature />
    </div>
  );
}

export default App;