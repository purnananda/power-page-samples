import { makeStyles, tokens } from '@fluentui/react-components';

export const useResponsiveLayoutStyles = makeStyles({
    container: {
        width: '100%',
        maxWidth: '100%',
        margin: '0 auto',

        paddingTop: '16px',
        paddingBottom: '24px',

        minHeight: '100vh',
        alignItems: 'center',
        '@media (min-width: 1176px)': {
            width: '1176px',
            maxWidth: '1176px',
        },
    },
    main: {
        width: 'calc(100% - 32px)',
        marginLeft: '16px',
        marginRight: '16px',
    },
    row: {
        display: 'grid',
        gap: tokens.spacingHorizontalM,

        // Mobile: 4-column grid
        gridTemplateColumns: 'repeat(4, 1fr)',

        // Tablet: 8-column grid
        '@media (min-width: 600px)': {
            gridTemplateColumns: 'repeat(8, 1fr)',
        },

        // Desktop: 12-column grid
        '@media (min-width: 1024px)': {
            gridTemplateColumns: 'repeat(12, 1fr)',
        },
    },
    column: {
        gridColumn: 'span 4', // Mobile: full width (4 of 4)
        '@media (min-width: 600px)': {
            gridColumn: 'span 4', // Tablet: half width (4 of 8)
        },
        '@media (min-width: 1024px)': {
            gridColumn: 'span 3', // Desktop: quarter width (3 of 12)
        },
        textAlign: 'center',
    },
    dashboardRow: {
        display: 'grid',
        gap: tokens.spacingHorizontalM,

        gridTemplateColumns: 'repeat(1, 376px)',

        '@media (min-width: 800px)': {
            gridTemplateColumns: 'repeat(2, 376px)',
        },

        '@media (min-width: 950px)': {
            gridTemplateColumns: 'repeat(3, 376px)',
        },
    },
    dashboardColumn: {
        gridColumn: 'span 1',
        textAlign: 'center',
    },
});