import {
  ScrollArea,
  Text
} from '@mantine/core';
import Hero from '../../molecules/Hero/Hero';
import { useStyles } from './LandingPage.styles';

export default function LandingPage() {
  const { classes } = useStyles();
  return (
    <ScrollArea
      style={{
        height: '300vh',
      }}
    >
      <Hero />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Text className={classes.text}>
          Used By Millions Of Concurrent Users
        </Text>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '3rem',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <Text className={classes.text}>
          Endorsed by tech leaders around the globe
        </Text>
        <div
          style={{
            display: 'flex',
            gap: 15
          }}
        >
          <div
            style={{
              backgroundColor: 'red',
              width: 200,
              height: 100,
            }}
          />
          <div
            style={{
              backgroundColor: 'red',
              width: 200,
              height: 100,
            }}
          />
          <div
            style={{
              backgroundColor: 'red',
              width: 200,
              height: 100,
            }}
          />
          <div
            style={{
              backgroundColor: 'red',
              width: 200,
              height: 100,
            }}
          />
        </div>
      </div>
    </ScrollArea>
  );
}
