import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  scrollArea: {
    height: 'calc(300vh - 70px)',
    width: '100vw',
  },
  text: {
    fontSize: '2rem',
  },
  circle: {
    zIndex: -1,
    position: 'absolute',
    right: '10em',
    marginBottom: '25em'
  },
  pinataMiataContainer: {
    position: 'absolute',
    width: '100vw',
  },
  firstPage: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
  },
  secondPage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  thirdPage: {
    display: 'flex',
    gap: '3rem',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  }
}));
