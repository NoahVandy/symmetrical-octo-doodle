import React, {
  useState,
  useCallback
} from 'react';
import {
  ScrollArea,
  Text,
} from '@mantine/core';
import Hero from '../../molecules/Hero/Hero';
import { useStyles } from './LandingPage.styles';
import MaangBanner from '../../atoms/MaangBanner/MaangBanner';
import PinataMiata from '../../atoms/PinataMiata/PinataMiata';

export type ScrollTop = number;

// todo before push rm header status
export default function LandingPage() {
  const { classes } = useStyles();
  const [scrollTop, setScrollTop] = useState(0);

  const getScrollTop = useCallback(async () => {
    const scrollTop = await window && window.scrollY;
    setScrollTop(scrollTop);
  }, []);

  return (
    <>
    <ScrollArea
      style={{
        height: '300vh',
        width: '100vw',
      }}
      onWheel={getScrollTop}
    >
      <PinataMiata scrollTop={scrollTop} />
      <div className={classes.firstPage}>
        <Hero />
      </div>
      <div className={classes.secondPage}>
        <Text className={classes.text}>
          Used By Millions Of Concurrent Users
        </Text>
        <div className={classes.circle}>

        </div>
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
          <MaangBanner />
        </div>
      </div>
    </ScrollArea>
    </>
  );
}
