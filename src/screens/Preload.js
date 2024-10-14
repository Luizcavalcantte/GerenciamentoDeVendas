import React, {useEffect} from 'react';
import {SafeAreaView, ActivityIndicator, StyleSheet} from 'react-native';
import BarberLogo from '../assets/barber.svg';
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
    <SafeAreaView style={styles.container}>
      <BarberLogo height="160" />
      <ActivityIndicator
        style={{marginTop: 50}}
        size={'large'}
        color={'#fff'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63c2d1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
