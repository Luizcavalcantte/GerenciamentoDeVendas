import React, {useEffect, useState} from 'react';

import SearchIcon from '../assets/search.svg';
import MyLocationIcon from '../assets/my_location.svg';
import {useNavigation} from '@react-navigation/native';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import {Platform, RefreshControl} from 'react-native';
import {getBarbers} from '../Api';

import {
  Container,
  Scroller,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
  LocationFinder,
  LoadingIcon,
  ListArea,
  BarberItem,
} from '../components/ScreenTabComponents';

export default function Home() {
  const navigation = useNavigation();

  const [locationText, setLocationText] = useState();
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [refreshing, setRefresing] = useState(false);

  useEffect(() => {
    updateList();
    console.log(list);
  }, []);

  async function handleLocationFinder() {
    console.log(list);
    setCoords(null);
    let result = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    );
    if (result == 'granted') {
      setLoading(true);
      setLocationText('');
      setList([]);

      Geolocation.getCurrentPosition(info => {
        setCoords(info.coords);
        updateList();
      });
    }
  }

  async function updateList() {
    let res = await getBarbers();
    if (res) {
      setList(res);
    } else {
      console.log('algo de errado ao carregar a lista');
    }
  }
  function onRefresh() {
    updateList();
  }

  return (
    <Container>
      <Scroller refreshing={refreshing} onRefresh={onRefresh}>
        <HeaderArea>
          <HeaderTitle numberOfLines={2}>
            Encontre o seu barbeiro favorito
          </HeaderTitle>
          <SearchButton onPress={() => navigation.navigate('Search')}>
            <SearchIcon width="26" height="26" fill="#fff" />
          </SearchButton>
        </HeaderArea>
        <LocationArea>
          <LocationInput
            value={locationText}
            onChangeText={t => {
              setLocationText(t);
            }}
          />
          <LocationFinder onPress={handleLocationFinder}>
            <MyLocationIcon width="24" height="24" fill="#fff"></MyLocationIcon>
          </LocationFinder>
        </LocationArea>
        <ListArea>
          {list.map((item, key) => (
            <BarberItem key={key} data={item} />
          ))}
        </ListArea>
        {loading && <LoadingIcon />}
      </Scroller>
    </Container>
  );
}
