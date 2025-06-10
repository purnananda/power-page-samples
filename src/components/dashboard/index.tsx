import * as React from 'react';
import {
  makeStyles,
  Title1,
  Subtitle2,
  Card,
  CardHeader,
  CardFooter,
  Text,
  Button,
  Title3,
  Body1,
  tokens,
  Tooltip,
  Divider,
} from '@fluentui/react-components';
import {
  DonutChart,
  GaugeChart,
  ChartProps,
  getColorFromToken,
  DataVizPalette,
  HorizontalBarChart,
  HorizontalBarChartVariant,
} from '@fluentui/react-charts';

import { Info20Regular } from "@fluentui/react-icons";

// Styles
const useStyles = makeStyles({
  container: {
    minHeight: '100vh',
  },
  header: {
    padding: '16px',
  },
  headerTitle: {
    marginBottom: '8px',
  },
  headerSubTitle: {
    marginBottom: '8px',
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 380px)',
    gap: '10px',
  },
  box: {
    padding: '16px',
    fontSize: '150%',
    alignItems: 'center',
  },
  box1: { gridColumn: 1, gridRow: 1 },
  box2: { gridColumn: 2, gridRow: 1 },
  box3: { gridColumn: 3, gridRow: 1 },
  box4: { gridColumn: '1/3', gridRow: 2 },
  box5: { gridColumn: 3, gridRow: 2 },
  card: {
    width: '100%',
    // maxWidth: '100%',
    height: '100%',
  },
  cardBody: {
    minHeight: '200px',
  },
  cardFooter: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stackNumbers: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px',
    marginBottom: '16px',
    backgroundColor: getColorFromToken(tokens.colorNeutralBackground3),
  },
});

// Chart Data
const donutChartData: ChartProps = {
  chartTitle: 'Donut chart basic example',
  chartData: [
    {
      legend: 'Fulfilled Orders',
      data: 70,
      color: getColorFromToken(DataVizPalette.color1),
    },
    {
      legend: 'Pending Orders',
      data: 30,
      color: getColorFromToken(DataVizPalette.color2),
    },
    {
      legend: 'Rejected Orders',
      data: 20,
      color: getColorFromToken(DataVizPalette.color3),
    },
    {
      legend: 'Cancelled Orders',
      data: 10,
      color: getColorFromToken(DataVizPalette.color4),
    },
  ],
};

const inventoryBreakdownData = [
  {
    chartTitle: 'Inventory breakdown',
    chartData: [
      {
        legend: 'Electronics',
        horizontalBarChartdata: { x: 700 },
        color: getColorFromToken(DataVizPalette.color1),
      },
      {
        legend: 'Office Supplies',
        horizontalBarChartdata: { x: 650 },
        color: getColorFromToken(DataVizPalette.color2),
      },
      {
        legend: 'Furniture',
        horizontalBarChartdata: { x: 547 },
        color: getColorFromToken(DataVizPalette.color3),
      },
      {
        legend: 'Clothing',
        horizontalBarChartdata: { x: 300 },
        color: getColorFromToken(DataVizPalette.color4),
      },
      {
        legend: 'Toys',
        horizontalBarChartdata: { x: 200 },
        color: getColorFromToken(DataVizPalette.color5),
      },
    ],
  },
];

const absoluteScaleData = [
  {
    chartTitle: 'one',
    chartData: [
      {
        legend: 'one',
        horizontalBarChartdata: { x: 1543, total: 15000 },
        color: getColorFromToken(DataVizPalette.color23),
      },
    ],
  },
  {
    chartTitle: 'two',
    chartData: [
      {
        legend: 'two',
        horizontalBarChartdata: { x: 800, total: 15000 },
        color: getColorFromToken(DataVizPalette.color23),
      },
    ],
  },
  {
    chartTitle: 'three',
    chartData: [
      {
        legend: 'three',
        horizontalBarChartdata: { x: 8888, total: 15000 },
        color: getColorFromToken(DataVizPalette.color23),
      },
    ],
  },
  {
    chartTitle: 'four',
    chartData: [
      {
        legend: 'four',
        horizontalBarChartdata: { x: 15888, total: 15000 },
        color: getColorFromToken(DataVizPalette.color23),
      },
    ],
  },
  {
    chartTitle: 'five',
    chartData: [
      {
        legend: 'five',
        horizontalBarChartdata: { x: 11444, total: 15000 },
        color: getColorFromToken(DataVizPalette.color23),
      },
    ],
  },
];

const riskData = [
  {
    size: 33,
    color: getColorFromToken(DataVizPalette.success),
    legend: 'Low Risk',
  },
  {
    size: 34,
    color: getColorFromToken(DataVizPalette.warning),
    legend: 'Medium Risk',
  },
  {
    size: 33,
    color: getColorFromToken(DataVizPalette.error),
    legend: 'High Risk',
  },
];

// Main Dashboard
const Dashboard: React.FC = () => {
  const styles = useStyles();

  // Card 1
  const Card1: React.FC = () => (
    <div className={`${styles.box} ${styles.box1}`}>
      <Card className={styles.card} size="large">
        <CardHeader
          header={<Text weight="semibold">Card 1 title</Text>}
          action={
            <Tooltip content="Text" relationship="label">
              <Button
                appearance="transparent"
                icon={<Info20Regular />}
                aria-label="More options"
              />
            </Tooltip>
          } />
        <div className={styles.cardBody}>
          <GaugeChart
            width={262}
            height={150}
            segments={riskData}
            chartValue={40}
            hideMinMax={false}
            variant="multiple-segments"
            enableGradient={false}
            roundCorners={false}
            legendProps={{
              canSelectMultipleLegends: false,
            }}
          />
        </div>
        <CardFooter className={styles.cardFooter}>
        </CardFooter>
      </Card>
    </div>
  );

  // Card 2
  const Card2: React.FC = () => (
    <div className={`${styles.box} ${styles.box2}`}>
      <Card className={styles.card} size="large">
        <CardHeader
          header={<Text weight="semibold">Card 2 title</Text>}
          action={
            <Tooltip content="Text" relationship="label">
              <Button
                appearance="transparent"
                icon={<Info20Regular />}
                aria-label="More options"
              />
            </Tooltip>
          } />
        <div className={styles.cardBody}>
          <div className={styles.stackNumbers}>
            <div>
              <Title3>$2.3K USD</Title3>
              <br />
              <Body1>Total stock value</Body1>
            </div>
            <div>
              <Title3>10K</Title3>
              <br />
              <Body1>Total items</Body1>
            </div>
          </div>
          <HorizontalBarChart data={inventoryBreakdownData} chartDataMode="default" className="hbcstacked" />
        </div>
        <CardFooter className={styles.cardFooter}>
          <Button appearance="outline">Action</Button>
        </CardFooter>
      </Card>
    </div>
  );

  // Card 3
  const Card3: React.FC = () => (
    <div className={`${styles.box} ${styles.box3}`}>
      <Card className={styles.card} size="large">
        <CardHeader
          header={<Text weight="semibold">Card 3 title</Text>}
          action={
            <Tooltip content="Text" relationship="label">
              <Button
                appearance="transparent"
                icon={<Info20Regular />}
                aria-label="More options"
              />
            </Tooltip>
          } />
        <div className={styles.cardBody}>
          <DonutChart
            data={donutChartData}
            height={150}
            width={350}
            innerRadius={40}
            hideLegend={false}
            hideLabels={false}
            showLabelsInPercent
          />
        </div>
        <CardFooter className={styles.cardFooter}>
          <Button appearance="outline">View inventory</Button>
        </CardFooter>
      </Card>
    </div>
  );

  // Card 4
  const Card4: React.FC = () => (
    <div className={`${styles.box} ${styles.box4}`}>
      <Card className={styles.card} size="large">
        <CardHeader
          header={<Text weight="semibold">Card 4 title</Text>}
          action={
            <Tooltip content="Text" relationship="label">
              <Button
                appearance="transparent"
                icon={<Info20Regular />}
                aria-label="More options"
              />
            </Tooltip>
          } />
        <div className={styles.cardBody}>
          <HorizontalBarChart
            width={550}
            data={absoluteScaleData}
            variant={HorizontalBarChartVariant.AbsoluteScale}
            hideLabels={false}
          />
        </div>
        <CardFooter className={styles.cardFooter}>
        </CardFooter>
      </Card>
    </div>
  );

  // Card 5
  const Card5: React.FC = () => (
    <div className={`${styles.box} ${styles.box5}`}>
      <Card className={styles.card} size="large">
        <CardHeader
          header={<Text weight="semibold">Card 5 title</Text>}
          action={
            <Tooltip content="Text" relationship="label">
              <Button
                appearance="transparent"
                icon={<Info20Regular />}
                aria-label="More options"
              />
            </Tooltip>
          } />
        <div className={styles.cardBody}>

        </div>
        <CardFooter className={styles.cardFooter}>
        </CardFooter>
      </Card>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <Title1>Dashboard</Title1>
        </div>
        <div className={styles.headerSubTitle}>
          <Subtitle2>
            Monitor real-time inventory levels, track stock status across categories, and identify key trends to ensure efficient management and timely restocking.
          </Subtitle2>
        </div>
        <Divider />
      </div>

      <div className={styles.wrapper}>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
      </div>
    </div>
  );
};

export default Dashboard;