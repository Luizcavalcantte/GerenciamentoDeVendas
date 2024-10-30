import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {logOut} from '../Api';

export default function Profile() {
  const navigation = useNavigation();
  async function handleLogoutClick() {
    logOut(navigation);
  }
  return (
    <View>
      <Text>Profile</Text>
      <Button title="Sair" onPress={handleLogoutClick}></Button>
    </View>
  );
}
