import { CSSProperties } from 'react';

const styles: {
  container: CSSProperties;
  header: CSSProperties;
  nameTile: CSSProperties;
} = {
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header: {
    fontSize: '3rem',
    fontWeight: '700',
    color: 'red'
  },
  nameTile: {
    fontSize: '1rem',
    fontWeight: '700',
    color: 'darkorange',
    backgroundColor: 'yellow'
  }
}

export default styles