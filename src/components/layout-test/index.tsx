import * as React from 'react';
import  { useResponsiveLayoutStyles } from '../../site/responsive-layout-styles';

const ResponsiveFourColumnGrid = () => {
    const styles = useResponsiveLayoutStyles();

    return (
        <div className={styles.main}>
            <div className={styles.row}>
                <div className={styles.column}>Column 1</div>
                <div className={styles.column}>Column 2</div>
                <div className={styles.column}>Column 3</div>
                <div className={styles.column}>Column 4</div>
            </div>
        </div>
    );
};

export default ResponsiveFourColumnGrid;
