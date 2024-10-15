import React, {useEffect} from 'react';
import {Container} from '../components/MyComponents';
import {ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export default function Preload() {
  const navigation = useNavigation();
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        console.log('validar token');
        //valida o token
      } else {
        console.log('login');
        navigation.navigate('SignIn');
        //vai pra tela de login
      }
    };
    checkToken();
  }, []);
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
