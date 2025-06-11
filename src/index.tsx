import React from 'react';
import ReactDOM from 'react-dom/client';
import { FluentProvider, webLightTheme, tokens } from "@fluentui/react-components";
import App from './app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <FluentProvider theme={webLightTheme}>
      <div style={{backgroundColor: tokens.colorNeutralBackground3, margin: '0', padding: '0'}}>
        <App />
      </div>
    </FluentProvider>    
  </React.StrictMode>
);
