import { Container, Title } from '@mantine/core';
import Head from 'next/head';
import {
  AuthenticationForm
} from '../../../components/AuthenticationForm/AuthenticationForm';

export default function SignInPage() {
  return (
    <>
      <Head>
        <title>PinDrive Sign In</title>
        <meta name="description" content="Sign in to your account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container size="xs">
        <Title
          align="center"
          pt={80}
          pb="xl"
          sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
        >
          Welcome back!
        </Title>
        <AuthenticationForm shadow="xl"/>
      </Container>

    </>
  );
}
