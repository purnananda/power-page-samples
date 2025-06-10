import * as React from 'react';
import {
  makeStyles,
  shorthands,
  tokens,
  Title1,
  Subtitle1,
  Card,
  CardHeader,
  CardFooter,
  Text,
} from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    ...shorthands.padding('24px'),
    backgroundColor: tokens.colorNeutralBackground1,
    minHeight: '100vh',
  },
  header: {
    marginBottom: '24px',
  },
  grid: {
    rowGap: '16px',
    columnGap: '16px',
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '200px 200px 200px',
    gridGap: '10px',
    backgroundColor: '#fff',
    color: '#444'
  },
  box: {
    backgroundColor: '#444',
    color: '#fff',
    borderRadius: '5px',
    padding: '20px',
    fontSize: '150%'
  },
  boxA: {
    backgroundColor: '#444',
    color: '#fff',
    borderRadius: '5px',
    padding: '20px',
    fontSize: '150%',
    gridColumn: '2 / 3',
    gridRow: 1
  },
  boxB: {
    backgroundColor: '#444',
    color: '#fff',
    borderRadius: '5px',
    padding: '20px',
    fontSize: '150%',
    gridColumn: 3,
    gridRow: '1 / 3',
  },
  a: {
    gridColumn: '1 / 3',
    gridRow: 1,
  },
  b: {
    gridColumn: 3,
    gridRow: '1 / 3',
  },
  c: {
    gridColumn: 1,
    gridRow: 2,
  },
  d: {
    gridColumn: 2,
    gridRow: 2,
  },
});

const Dashboard: React.FC = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title1>Welcome to Your Dashboard</Title1>
        <Subtitle1>Overview of your key metrics</Subtitle1>
      </div>

      <div className={styles.wrapper}>
        {/* <Card>
          <CardHeader header={<Text weight="semibold">Active Users</Text>} />
          <Text size={600}>1,245</Text>
          <CardFooter>Updated 5 mins ago</CardFooter>
        </Card>

        <Card>
          <CardHeader header={<Text weight="semibold">Tasks Completed</Text>} />
          <Text size={600}>87%</Text>
          <CardFooter>Today</CardFooter>
        </Card>

        <Card>
          <CardHeader header={<Text weight="semibold">System Health</Text>} />
          <Text size={600}>Good</Text>
          <CardFooter>No issues reported</CardFooter>
        </Card> */}
        <div className={styles.box + styles.a}>A</div>
        <div className={styles.boxB}>B</div>
        <div className={styles.box + styles.c}>C</div>
        <div className={styles.box + styles.d}>D</div>
        {/* <div className={styles.box}>E</div>
        <div className={styles.box}>F</div> */}
      </div>
    </div>
  );
};

export default Dashboard;
