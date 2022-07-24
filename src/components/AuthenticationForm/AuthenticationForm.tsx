import { signIn } from 'next-auth/react';
import React from 'react';
import { useForm, useToggle, upperFirst } from '@mantine/hooks';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
} from '@mantine/core';
import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';

export function AuthenticationForm(props: PaperProps<'div'>) {
  const type='login'
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },

    validationRules: {
      email: (val) => /^\S+@\S+$/.test(val),
      password: (val) => val.length >= 6,
    },
  });

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" weight={500}>
        Sign in to PinDrive:
      </Text>
      <Group grow mb="md" mt="md">
        <GoogleButton onClick={() => signIn('google')} radius="xl">Google</GoogleButton>
      </Group>
    </Paper>
  );
}
