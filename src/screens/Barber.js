import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getBarber} from '../Api';

export default function Barber() {
  const navigation = useNavigation();
  const route = useRoute();

  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars,
  });

  useEffect(() => {
    async function getBarberInfo() {
      let json = await getBarber(userInfo.id);
      console.log(json);
      setUserInfo(json);
      console.log(userInfo);
    }
    getBarberInfo();
  }, []);

  return (
    <View>
      <Text>Barber: {userInfo.name}</Text>

      {userInfo.services && <Text>unha: {userInfo.services.unha}</Text>}
    </View>
  );
}
