import React from 'react';
import { FluentProvider, webLightTheme, makeStyles, shorthands, tokens } from "@fluentui/react-components";

import Dashboard from './components/dashboard';

const useStyles = makeStyles({
  mainContainer: {
    width: '1140px', // Set your desired width here
    margin: '0 auto', // Center the container
    ...shorthands.padding('24px'),
    backgroundColor: tokens.colorNeutralBackground1,
    minHeight: '100vh',
  },
});

function App() {
  const styles = useStyles();
  return (
    <FluentProvider theme={webLightTheme}>
      <div className={styles.mainContainer}>
        <Dashboard />
      </div>
    </FluentProvider>
  );
}

export default App;
