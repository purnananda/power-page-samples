import * as React from 'react';
import { AppItem, Hamburger, NavDrawer, NavDrawerBody, NavDrawerHeader, NavItem } from '@fluentui/react-nav-preview';
import { menuConfig, MenuKey } from '../../menuConfig';
import { AppsAddIn32Regular, AppsAddInOff20Filled, AppsAddInOff20Regular, Board20Filled, Board20Regular, bundleIcon, Home20Filled, Home20Regular } from '@fluentui/react-icons';
import { makeStyles, Title2,  Tooltip } from '@fluentui/react-components';

const useStyles = makeStyles({
  nav: {
    width: "100%",
    height: '100vh',
  }
});

type SideMenuProps = {
    selected: MenuKey;
    onSelect: (key: MenuKey) => void;
};

const DashboardIcon = bundleIcon(Board20Filled, Board20Regular);
const HomeIcon = bundleIcon(Home20Filled, Home20Regular);
const FeatureIcon = bundleIcon(AppsAddInOff20Filled, AppsAddInOff20Regular);

const iconArray: Record<MenuKey, JSX.Element> = {
    home: <HomeIcon />,
    dashboard: <DashboardIcon />,
    feature: <FeatureIcon />
};

const SideMenu: React.FC<SideMenuProps> = ({ selected, onSelect }) => {
    const [isOpen, setIsOpen] = React.useState(true);

    const styles = useStyles();

    return (
        <NavDrawer
            defaultSelectedValue={selected}
            open={isOpen}
            type="inline"
            aria-label="Main navigation"
            className={styles.nav}
        >
            <NavDrawerHeader>
                <Tooltip content="Navigation" relationship="label">
                    <Hamburger />
                </Tooltip>
            </NavDrawerHeader>
            <NavDrawerBody>
                <AppItem
                    icon={<AppsAddIn32Regular />}
                    as="a"
                    href="#"
                >
                    <Title2>Sample Pages</Title2>
                </AppItem>
                {menuConfig.map(menu => (
                    <NavItem
                        key={menu.key}
                        value={menu.key}
                        icon={iconArray[menu.key]}
                        onClick={() => onSelect(menu.key)}
                    >
                        {menu.label}
                    </NavItem>
                ))}
            </NavDrawerBody>
        </NavDrawer>
    );
};

export default SideMenu;