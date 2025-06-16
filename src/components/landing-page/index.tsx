import { Body1, Caption1, Card, CardHeader, CardPreview, makeStyles, Subtitle2, Title1, Title3, tokens } from '@fluentui/react-components';
import { Grid } from '@mui/material';
import * as React from 'react';
import { menuConfig } from '../../menuConfig';

// Styles
const useStyles = makeStyles({
    main: {
        width: 'calc(100% - 32px)',
        margin: '0 16px',
        height: '100vh',
    },
    header: {
        paddingTop: '16px',
    },
    headerTitle: {
        marginBottom: '8px',
    },
    headerSubTitle: {
        marginBottom: '8px',
    },
    sectionContainer: {
        width: '100%',
        marginTop: '40px',
    },
    featuresContainer: {
        paddingTop: '16px',
    },
    box: {
        fontSize: '150%',
        alignItems: 'center',
        cursor: 'pointer',
    },
    card: {
        width: '100%',
        height: '100%',
        transition: 'box-shadow 0.2s',
        '&:hover': {
            boxShadow: tokens.shadow16,
        },
    },
    smallRadius: { borderRadius: tokens.borderRadiusSmall },
});

// Feature Card component
type FeatureCardProps = {
    imageSrc: string;
    featureName: string;
    featureDescription: string;
    onClick?: () => void;
};

const FeatureCard: React.FC<FeatureCardProps> = React.memo(({ imageSrc, featureName, featureDescription, onClick }) => {
    const styles = useStyles();
    return (
        <div className={styles.box} onClick={onClick} tabIndex={0} role="button">
            <Card className={styles.card} size="large">
                <CardPreview>
                    <img
                        className={styles.smallRadius}
                        src={imageSrc}
                        alt={featureName}
                    />
                </CardPreview>
                <CardHeader
                    header={
                        <Body1>
                            <b>{featureName}</b>
                        </Body1>
                    }
                    description={<Caption1>{featureDescription}</Caption1>}
                />
            </Card>
        </div>
    );
});

const LandingPage = ({ onFeatureSelect }: { onFeatureSelect?: (featureKey: string) => void }) => {
    const styles = useStyles();

    // Use images from public/images folder
    const resolveAsset = React.useCallback(
        (asset: string) =>
            process.env.PUBLIC_URL
                ? `${process.env.PUBLIC_URL}/images/${asset}`
                : `/images/${asset}`,
        []
    );

    // Map menuConfig to features
    const features = menuConfig.map((menu, idx) => ({
        key: menu.key,
        image: `HomeFeature${idx + 1}.png`,
        name: menu.label,
        desc: menu.desc,
    }));

    const handleFeatureClick = (featureKey: string) => {
        if (onFeatureSelect) {
            onFeatureSelect(featureKey);
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.headerTitle}>
                    <Title1>Power Page Samples</Title1>
                </div>
                <div className={styles.headerSubTitle}>
                    <Subtitle2>
                        Pellentesque blandit non dolor eu imperdiet. Sed blandit ex magna, ac interdum libero consequat in.
                    </Subtitle2>
                </div>
            </div>

            <div className={styles.sectionContainer}>
                <Title3>Pages</Title3>
                <Grid className={styles.featuresContainer} container columns={12} spacing={2}>
                    {features.map((feature) => (
                        <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3 }} key={feature.key}>
                            <FeatureCard
                                imageSrc={resolveAsset(feature.image)}
                                featureName={feature.name}
                                featureDescription={feature.desc}
                                onClick={() => handleFeatureClick(feature.key)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div >
    );
};

export default LandingPage;