import React from 'react';
import { createStyles, Paper, Text, Title, Button, Group } from '@mantine/core';
import hero from "../../public/hero.png"
const useStyles = createStyles((theme) => ({
  heroPg: {
    height: 400,
    width: "100vw",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  card: {
    height: 600,
    width: 300,
    display: "flex",
    flexDirection: "column",
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.black,
    lineHeight: 1.2,
    fontSize: 35,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.black,
    opacity: 0.7,
    fontWeight: 700,
   
  },

  about: {
  }
}));

interface aboutProps {
  image: string;
  title: string;
  category: string;
  about: string;
  card: string
}

export default function About({ image, title, category, about, card }: aboutProps) {
  const { classes } = useStyles();

  return (
    <>
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      className={classes.heroPg}
      sx={{backgroundImage: `url(${hero.src})`, justifyContent: "center"}}
    >
      <div>
        <Title order={3} className={classes.title}>
         Our Calling
        </Title>
        <Text className={classes.category} size="xl">
            PinDrive creates opportunity where opportunity doesn't exist using the power of Pinata.  
        </Text>
      </div>
    </Paper>
    <Group className={classes.about} position='apart'>
    <Paper
    shadow="md"
    p="xl"
    radius="md" 
    className={classes.card}>
        <Title order={3} className={classes.title}>Our Story</Title>
        <Text className={classes.category}>PinDrive was always something we had dreamed of creating. Even as kids, I would often hear Noah talking to Micheal about an app that would one day change the world. Years went by, but no progess was made, until one day Noah met Micheal and Isaac at a place called hackathon, they had some drinks and started talking code. Here we are today, with an amazing, one of a kind, masterpiece, PinDrive.</Text>
    </Paper>
    <Paper
    shadow="md"
    p="xl"
    radius="md" 
    className={classes.card}>
        <Title order={3} className={classes.title}>Who Are We?</Title>
        <Text className={classes.category}>We are PinDrive, A team of engineers creating an applicaton that not only is an exact clone of google drive but will only be able to store a limit of 20 files before you run out of space... unlessssss you pay us :)</Text>
    </Paper>
    <Paper
    shadow="md"
    p="xl"
    radius="md" 
    className={classes.card}>
        <Title order={3} className={classes.title}>The Future</Title>
        <Text className={classes.category}>As a developing team we are incredibly motivated to continue improving PinDrive to be the best it can be. Criticism of this application will only fuel us to better our knowledge and better our app to make it one the many greats. As PinDrive continues to grow and gain customers we will always be one step ahead. We are looking at forcing the poor users to pay for their storage at a harmless fee of 30 dollars a month!</Text>
    </Paper>
    </Group>
    </>
  );
}