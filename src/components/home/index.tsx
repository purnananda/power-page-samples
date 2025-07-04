import * as React from 'react';
import {
  makeStyles,
  Title1,
  Subtitle2,
  Card,
  CardHeader,
  CardPreview,
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
  useId,
  tokens,
  Title3,
} from '@fluentui/react-components';
import {
  DocumentPdfRegular,
  DocumentRegular,
  EditRegular,
  FolderRegular,
  OpenRegular,
  PeopleRegular,
  VideoRegular,
} from '@fluentui/react-icons';
import { Grid } from '@mui/material';

// Styles
const useStyles = makeStyles({
  main: {
    width: 'calc(100% - 32px)',
    margin: '0 16px',
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
  wrapper: {
    marginTop: '16px',
  },
  resourceswrapper: {
    marginTop: '16px',
  },
  gridContainer: {
    marginTop: '16px',
  },
  box: {
    fontSize: '150%',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    height: '100%',
  },
  sectionContainer: {
    width: '100%',
    marginTop: '40px',
  },
  lastSection: {
    marginBottom: '16px',
  },
  itemsCountCell: {
    paddingTop: '4px',
  },
  categoryCell: {
    minWidth: '150px',
  },
  smallRadius: { borderRadius: tokens.borderRadiusSmall },
});

// Feature Card component
type FeatureCardProps = {
  imageSrc: string;
  featureName: string;
  featureDescription: string;
};

const FeatureCard: React.FC<FeatureCardProps> = React.memo(({ imageSrc, featureName, featureDescription }) => {
  const styles = useStyles();
  return (
    <div className={styles.box}>
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

// Resource Card component
type ResourceCardProps = {
  imageSrc: string;
  resourceName: string;
  resourceDescription: string;
};

const ResourceCard: React.FC<ResourceCardProps> = React.memo(({ imageSrc, resourceName, resourceDescription }) => {
  const styles = useStyles();
  return (
    <div className={styles.box}>
      <Card className={styles.card} size="large">
        <CardHeader
          image={
            <img
              src={imageSrc}
              alt={resourceName}
              width="50px"
              height="50px"
            />
          }
          header={
            <Body1>
              <b>{resourceName}</b>
            </Body1>
          }
          description={<Caption1>{resourceDescription}</Caption1>}
        />
      </Card>
    </div>
  );
});

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
}> = React.memo(({
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
));

const Home: React.FC = () => {
  const styles = useStyles();
  const txtSearchId = useId("txtSearchId");

  // Use images from public/images folder
  const resolveAsset = React.useCallback(
    (asset: string) =>
      process.env.PUBLIC_URL
        ? `${process.env.PUBLIC_URL}/images/${asset}`
        : `/images/${asset}`,
    []
  );

  const [sortState, setSortState] = React.useState<
    Parameters<NonNullable<DataGridProps["onSortChange"]>>[1]
  >({
    sortColumn: "file",
    sortDirection: "ascending",
  });
  const onSortChange: DataGridProps["onSortChange"] = (e, nextSortState) => {
    setSortState(nextSortState);
  };

  // Feature and resource data arrays for easier mapping
  const features = [
    {
      image: "HomeFeature1.png",
      name: "Feature One",
      desc: "Description for feature one.",
    },
    {
      image: "HomeFeature2.png",
      name: "Feature Two",
      desc: "Description for feature two.",
    },
    {
      image: "HomeFeature3.png",
      name: "Feature Three",
      desc: "Description for feature three.",
    },
    {
      image: "HomeFeature4.png",
      name: "Feature Four",
      desc: "Description for feature four.",
    },
  ];

  const resources = [
    {
      image: "HomeResource1.png",
      name: "Documentation",
      desc: "Discover how the code review work.",
    },
    {
      image: "HomeResource2.png",
      name: "Quick Start",
      desc: "Create a review for your solution.",
    },
    {
      image: "HomeResource3.png",
      name: "Coming Soon",
      desc: "See the release plan.",
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <Title1>Hub Landing Page</Title1>
        </div>
        <div className={styles.headerSubTitle}>
          <Subtitle2>
            Pellentesque blandit non dolor eu imperdiet. Sed blandit ex magna, ac interdum libero consequat in.
          </Subtitle2>
        </div>
      </div>

      <div className={styles.sectionContainer}>
        <Title3>Features</Title3>
        <Grid container columns={12} spacing={2} className={styles.wrapper}>
          {features.map((feature, idx) => (
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 3 }} key={feature.name}>
              <FeatureCard
                imageSrc={resolveAsset(feature.image)}
                featureName={feature.name}
                featureDescription={feature.desc}
              />
            </Grid>
          ))}
        </Grid>
      </div>

      <div className={styles.sectionContainer}>
        <Title3>Latest</Title3>
        <div className={styles.gridContainer}>
          <Grid container columns={12} spacing={2}>
            <Grid size={12}>
              <Card className={styles.card} size="large">
                <DataGridControl sortState={sortState} onSortChange={onSortChange} />
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className={`${styles.sectionContainer} ${styles.lastSection}`}>
        <Title3>Learning Resources</Title3>
        <Grid container columns={12} spacing={2} className={styles.resourceswrapper}>
          {resources.map((resource) => (
            <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }} key={resource.name}>
              <ResourceCard
                imageSrc={resolveAsset(resource.image)}
                resourceName={resource.name}
                resourceDescription={resource.desc}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Home;