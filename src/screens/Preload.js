import React, {useEffect} from 'react';
import {Container} from '../components/MyComponents';
import {ActivityIndicator} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {checkAuthState} from '../Api';

export default function Preload() {
  const navigation = useNavigation();

  useEffect(() => {
    checkAuthState(navigation);
  }, [navigation]);

  return (
    <Container>
      <ActivityIndicator
        style={{marginTop: 50}}
        size={'large'}
        color={'#fff'}
      />
    </Container>
  );
}
