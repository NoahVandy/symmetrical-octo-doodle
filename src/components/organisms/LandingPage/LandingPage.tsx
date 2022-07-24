import {
  ScrollArea,
  Text
} from '@mantine/core';
import Hero from '../../molecules/Hero/Hero';
import { useStyles } from './LandingPage.styles';

const bannersArray = [
  {},
  {},
  {},
  {},
];

// todo before push rm header status
export default function LandingPage() {
  const { classes } = useStyles();
  const banners = bannersArray.map((banner) => {
    return (
      <div
        style={{
          backgroundColor: 'red',
          width: 200,
          height: 100,
        }}
      />
    );
  });
  return (
    <ScrollArea className={classes.scrollArea}>
      <div className={classes.firstPage}>
        <Hero />
      </div>
      <div className={classes.secondPage}>
        <Text className={classes.text}>
          Used By Millions Of Concurrent Users
        </Text>
      </div>
      <div className={classes.thirdPage}>
        <Text className={classes.text}>
          Endorsed by tech leaders around the globe
        </Text>
        <div
          style={{
            display: 'flex',
            gap: 15
          }}
        >
          {banners}
        </div>
      </div>
    </ScrollArea>
  );
}
