import {signIn, useSession} from 'next-auth/react';
import {useRouter} from 'next/router';
import {useCallback} from 'react';
import {Button} from '@mantine/core';

export default function AuthButton() {
  const { status } = useSession()
  const isAuthenticated = status === 'authenticated';
  const {push: navigate} = useRouter();
  const handleGoToDrive = useCallback(() => {
    isAuthenticated ? navigate('/drive') : signIn('google');
  }, [isAuthenticated, navigate, signIn]);

  return (
    <Button
      radius="xl"
      onClick={handleGoToDrive}
    >
      Go to Pin Drive
    </Button>
  );
}
