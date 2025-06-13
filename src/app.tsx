import React from 'react';
import Dashboard from './components/dashboard';
import Feature from './components/feature';
import Home from './components/home';
import { useResponsiveLayoutStyles } from './site/responsive-layout-styles';
import SideMenu from './components/side-menu';
import { MenuKey } from './menuConfig';

// Type for menu keys
//type MenuKey = 'home' | 'dashboard' | 'feature';

// RenderPage component (renders the selected page)
type RenderPageProps = {
  selected: MenuKey;
};

const RenderPage: React.FC<RenderPageProps> = ({ selected }) => {
  switch (selected) {
    case 'dashboard':
      return <Dashboard />;
    case 'feature':
      return <Feature />;
    case 'home':
    default:
      return <Home />;
  }
};

function App() {
  const [selected, setSelected] = React.useState<MenuKey>('home');

  const styles = useResponsiveLayoutStyles();

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <SideMenu selected={selected} onSelect={setSelected} />
      <div className={styles.container}>
        <RenderPage selected={selected} />
      </div>
    </div>
  );
}

export default App;
