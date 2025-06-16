import * as React from 'react';
import {
    makeStyles,
    Title1,
    Subtitle2,
    Divider,
    Card,
    CardHeader,
    Text,
    Body1,
    Caption1,
    TableColumnDefinition,
    createTableColumn,
    TableCellLayout,
    Avatar,
    DataGridProps,
    DataGrid,
    DataGridHeader,
    DataGridRow,
    DataGridHeaderCell,
    DataGridBody,
    DataGridCell,
    PresenceBadgeStatus,
    Button,
    Dropdown,
    Option,
    Input,
    useId,
} from '@fluentui/react-components';
import {
    AddRegular,
    ArrowSyncRegular,
    DocumentPdfRegular,
    DocumentRegular,
    EditRegular,
    FolderRegular,
    OpenRegular,
    PeopleRegular,
    VideoRegular,
} from '@fluentui/react-icons';
import { Box, Grid } from '@mui/material';

// Styles
const useStyles = makeStyles({
    main: {
        width: 'calc(100% - 32px)',
        margin: '0 16px',
    },
    header: {
        padding: '16px 0',
    },
    headerTitle: {
        marginBottom: '8px',
    },
    headerSubTitle: {
        marginBottom: '8px',
    },
    box: {
        fontSize: '150%',
        alignItems: 'center',
    },
    card: {
        width: '100%',
        height: '100%',
    },
    featuresContainer: {
        marginTop: '16px',
    },
    dataGridContainer: {
        marginTop: '48px',
    },
    refreshButton: {
        marginLeft: '8px',
    },
    actionsParentRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        height: '48px',
        paddingBottom: '8px',
    },
    actionsChildRow: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginLeft: 'auto',
    },
    itemsCountCell: {
        paddingTop: '4px',
    },
    categoryCell: {
        minWidth: '150px',
    },
});

// Feature Card component
type FeatureCardProps = {
    imageSrc: string;
    featureName: string;
    featureDescription: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, featureName, featureDescription }) => {
    const styles = useStyles();
    return (
        <div className={styles.box}>
            <Card className={styles.card} size="large">
                <CardHeader
                    image={
                        <img
                            src={imageSrc}
                            alt={featureName}
                            width="55px"
                            height="55px"
                        />
                    }
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
};

// DataGrid types and data
type FileCell = {
    label: string;
    icon: JSX.Element;
};
type LastUpdatedCell = {
    label: string;
    timestamp: number;
};
type LastUpdateCell = {
    label: string;
    icon: JSX.Element;
};
type AuthorCell = {
    label: string;
    status: PresenceBadgeStatus;
};
type Item = {
    file: FileCell;
    author: AuthorCell;
    lastUpdated: LastUpdatedCell;
    lastUpdate: LastUpdateCell;
};
const features = [
    {
        image: 'feature1.png',
        name: 'Feature One',
        desc: 'Description for feature one.',
    },
    {
        image: 'feature2.png',
        name: 'Feature Two',
        desc: 'Description for feature two.',
    },
    {
        image: 'feature3.png',
        name: 'Feature Three',
        desc: 'Description for feature three.',
    },
    {
        image: 'feature4.png',
        name: 'Feature Four',
        desc: 'Description for feature four.',
    },
]

const items: Item[] = [
    {
        file: { label: "Meeting notes", icon: <DocumentRegular /> },
        author: { label: "Max Mustermann", status: "available" },
        lastUpdated: { label: "7h ago", timestamp: 1 },
        lastUpdate: {
            label: "You edited this",
            icon: <EditRegular />,
        },
    },
    {
        file: { label: "Thursday presentation", icon: <FolderRegular /> },
        author: { label: "Erika Mustermann", status: "busy" },
        lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
        lastUpdate: {
            label: "You recently opened this",
            icon: <OpenRegular />,
        },
    },
    {
        file: { label: "Training recording", icon: <VideoRegular /> },
        author: { label: "John Doe", status: "away" },
        lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
        lastUpdate: {
            label: "You recently opened this",
            icon: <OpenRegular />,
        },
    },
    {
        file: { label: "Purchase order", icon: <DocumentPdfRegular /> },
        author: { label: "Jane Doe", status: "offline" },
        lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
        lastUpdate: {
            label: "You shared this in a Teams chat",
            icon: <PeopleRegular />,
        },
    },
    {
        file: { label: "Training recording", icon: <VideoRegular /> },
        author: { label: "Purnananda Behera", status: "busy" },
        lastUpdated: { label: "Yesterday at 2:45 PM", timestamp: 2 },
        lastUpdate: {
            label: "You recently opened this",
            icon: <OpenRegular />,
        },
    },
];

const columns: TableColumnDefinition<Item>[] = [
    createTableColumn<Item>({
        columnId: "file",
        compare: (a, b) => a.file.label.localeCompare(b.file.label),
        renderHeaderCell: () => "File",
        renderCell: (item) => (
            <TableCellLayout media={item.file.icon}>
                {item.file.label}
            </TableCellLayout>
        ),
    }),
    createTableColumn<Item>({
        columnId: "author",
        compare: (a, b) => a.author.label.localeCompare(b.author.label),
        renderHeaderCell: () => "Author",
        renderCell: (item) => (
            <TableCellLayout
                media={
                    <Avatar
                        aria-label={item.author.label}
                        name={item.author.label}
                        badge={{ status: item.author.status }}
                    />
                }
            >
                {item.author.label}
            </TableCellLayout>
        ),
    }),
    createTableColumn<Item>({
        columnId: "lastUpdated",
        compare: (a, b) => a.lastUpdated.timestamp - b.lastUpdated.timestamp,
        renderHeaderCell: () => "Last updated",
        renderCell: (item) => item.lastUpdated.label,
    }),
    createTableColumn<Item>({
        columnId: "lastUpdate",
        compare: (a, b) => a.lastUpdate.label.localeCompare(b.lastUpdate.label),
        renderHeaderCell: () => "Last update",
        renderCell: (item) => (
            <TableCellLayout media={item.lastUpdate.icon}>
                {item.lastUpdate.label}
            </TableCellLayout>
        ),
    }),
];

// DataGridControl as a separate component
const DataGridControl: React.FC<{
    items?: Item[];
    columns?: TableColumnDefinition<Item>[];
    sortState?: DataGridProps['sortState'];
    onSortChange?: DataGridProps['onSortChange'];
}> = ({
    items: gridItems = items,
    columns: gridColumns = columns,
    sortState,
    onSortChange,
}) => (
        <DataGrid
            items={gridItems}
            columns={gridColumns}
            sortable
            sortState={sortState}
            onSortChange={onSortChange}
            style={{ minWidth: "500px" }}
        >
            <DataGridHeader>
                <DataGridRow>
                    {({ renderHeaderCell }) => (
                        <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
                    )}
                </DataGridRow>
            </DataGridHeader>
            <DataGridBody<Item>>
                {({ item, rowId }) => (
                    <DataGridRow<Item> key={rowId}>
                        {({ renderCell }) => (
                            <DataGridCell>{renderCell(item)}</DataGridCell>
                        )}
                    </DataGridRow>
                )}
            </DataGridBody>
        </DataGrid>
    );

const Feature: React.FC = () => {
    const styles = useStyles();
    const txtSearchId = useId("txtSearchId");

    // Use images from public/images folder
    const resolveAsset = (asset: string) =>
        process.env.PUBLIC_URL
            ? `${process.env.PUBLIC_URL}/images/${asset}`
            : `/images/${asset}`;

    const [sortState, setSortState] = React.useState<
        Parameters<NonNullable<DataGridProps["onSortChange"]>>[1]
    >({
        sortColumn: "file",
        sortDirection: "ascending",
    });
    const onSortChange: DataGridProps["onSortChange"] = (e, nextSortState) => {
        setSortState(nextSortState);
    };

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div className={styles.headerTitle}>
                    <Title1>Feature Name</Title1>
                </div>
                <div className={styles.headerSubTitle}>
                    <Subtitle2>
                        Subtitle for the feature.
                    </Subtitle2>
                </div>
            </div>

            <Grid container columns={12} spacing={2}>
                {features.map((feature, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 12, md: 6, lg: 3 }} >
                        <FeatureCard
                            imageSrc={resolveAsset(feature.image)}
                            featureName={feature.name}
                            featureDescription={feature.desc}
                        />
                    </Grid>
                ))}
            </Grid>

            <Grid container columns={12} spacing={2} className={styles.dataGridContainer}>
                <Grid size={12}>
                    <Card className={styles.card} size="large">
                        <Grid container columns={12} spacing={2}>
                            <Grid size={{ xs: 12, sm: 12, md: 5 }}>
                                <Button appearance="primary" icon={<AddRegular />}>New</Button>
                                <Button appearance="outline" icon={<ArrowSyncRegular />} className={styles.refreshButton}>Refresh</Button>
                            </Grid>
                            <Grid size={{ xs: 12, sm: 12, md: 7 }}>
                                <div className={styles.actionsChildRow}>
                                    <div className={styles.itemsCountCell}>
                                        <Text>
                                            <b>{items.length}</b>
                                        </Text>
                                        <Caption1> items</Caption1>
                                    </div>
                                    <div className={styles.categoryCell}>
                                        <Dropdown id="dropdown-id" placeholder="Select category" size="medium" appearance="filled-darker">
                                            <Option>All</Option>
                                            <Option>Option 1</Option>
                                            <Option>Option 2</Option>
                                        </Dropdown>
                                    </div>
                                    <div>
                                        <Input id={txtSearchId} placeholder='Search' />
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container columns={12} spacing={2}>
                            <Grid size={12}>
                                <DataGridControl sortState={sortState} onSortChange={onSortChange} />
                            </Grid>
                        </Grid>
                    </Card>
                    <Divider />
                </Grid>
            </Grid>
        </div>
    );
};

export default Feature;