import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  heroContainer:{
    zIndex: -1,
    width: '100vw',
    height: 'calc(100vh - 70px)',
    overflow: 'hidden',
  },

 inner: {
   display: 'flex',
   justifyContent: 'center !important',
   alignItems: 'center !important',
 },

  content: {
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor:
      theme.colorScheme === 'dark'
        // @ts-ignore
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        // @ts-ignore
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));
