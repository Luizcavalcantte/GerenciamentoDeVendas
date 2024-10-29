import React, {useState} from 'react';

import SearchIcon from '../assets/search.svg';
import MyLocationIcon from '../assets/my_location.svg';
import {useNavigation} from '@react-navigation/native';
import {request, PERMISSIONS} from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import {ActivityIndicator, Platform} from 'react-native';
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
} from '../components/ScreenTabComponents';

export default function Home() {
  const navigation = useNavigation();

  const [locationText, setLocationText] = useState();
  const [coords, setCoords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  async function handleLocationFinder() {
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
        getBarbers();
      });
    }
  }

  return (
    <Container>
      <Scroller>
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
        {loading && <LoadingIcon />}
      </Scroller>
    </Container>
  );
}
