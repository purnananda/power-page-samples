import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from '@mui/material/Container';
import { FluentProvider, webLightTheme, tokens } from "@fluentui/react-components";
import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>    
      <FluentProvider theme={webLightTheme}>
        <Container maxWidth='xl' style={{backgroundColor: tokens.colorNeutralBackground3, height: '100vh'}}>
          <App />
        </Container>
      </FluentProvider>
  </React.StrictMode>
);
