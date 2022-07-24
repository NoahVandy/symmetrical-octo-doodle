import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  scrollArea: {
    height: '300vh',
  },
  text: {
    fontSize: '2rem',
  },
  firstPage: {
    height: '100vh',
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
