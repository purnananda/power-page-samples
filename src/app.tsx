import React from 'react';
import { Grid } from '@mui/material';
import Dashboard from './components/dashboard';
import Feature from './components/feature';
import Home from './components/home';
import { useResponsiveLayoutStyles } from './site/responsive-layout-styles';
import SideMenu from './components/side-menu';
import { MenuKey } from './menuConfig';

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
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={2}>
      <Grid size={{ xs: 4, sm: 3, md: 3}} >
        <SideMenu selected={selected} onSelect={setSelected} />
      </Grid>
      <Grid size={{ xs: 4, sm: 5, md: 9}}>
        <RenderPage selected={selected} />
      </Grid>
    </Grid>
  );
}

export default App;
