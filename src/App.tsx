import React from 'react';
import { makeStyles } from "@fluentui/react-components";

import Dashboard from './components/dashboard';

const useStyles = makeStyles({
  mainContainer: {
    width: '1176px',
    margin: '0 auto',
    paddingTop: '16px',
    paddingBottom: '24px',
    minHeight: '100vh',
    alignItems: 'center',
  },
});

function App() {
  const styles = useStyles();
  return (
    <div className={styles.mainContainer}>
      <Dashboard />
    </div>
  );
}

export default App;
