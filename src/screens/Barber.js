import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getBarber} from '../Api';
import Swiper from 'react-native-swiper';
import {Stars} from '../components/Stars';
import FavoriteIcon from '../assets/favorite.svg';
import BackIcon from '../assets/back.svg';

import {
  Container,
  Scroller,
  FakeSwiper,
  PageBody,
  UserInfoArea,
  ServiceArea,
  TestimonialArea,
  SwiperDot,
  SwiperDotActive,
  SwiperItem,
  SwiperImage,
  UserAvatar,
  UserInfo,
  UserInfoName,
  UserFavButton,
  BackButton,
} from '../components/BarberScreen';

export default function Barber() {
  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = useState(false);

  const [userInfo, setUserInfo] = useState({
    id: route.params.id,
    avatar: route.params.avatar,
    name: route.params.name,
    stars: route.params.stars,
  });

  useEffect(() => {
    async function getBarberInfo() {
      setLoading(true);
      let json = await getBarber(userInfo.id);
      console.log(json);

      setUserInfo(json);
      console.log(userInfo);

      setLoading(false);
    }
    getBarberInfo();
  }, []);

  function handleBackButton() {
    navigation.goBack();
  }

  return (
    <Container>
      <Scroller>
        {userInfo.photos && userInfo.photos.length > 0 ? (
          <Swiper
            style={{height: 240}}
            r
            dot={<SwiperDot />}
            activeDot={<SwiperDotActive />}
            paginationStyle={{
              top: 15,
              right: 15,
              bottom: null,
              left: null,
            }}
            autoplay={true}>
            {userInfo.photos.map((item, key) => (
              <SwiperItem key={key}>
                <SwiperImage source={{uri: item}} resizeMode="cover" />
              </SwiperItem>
            ))}
          </Swiper>
        ) : (
          <FakeSwiper></FakeSwiper>
        )}
        <PageBody>
          <UserInfoArea>
            <UserAvatar source={{uri: userInfo.avatar}} />
            <UserInfo>
              <UserInfoName>{userInfo.name}</UserInfoName>
              <Stars stars={userInfo.stars} showNumber={true} />
            </UserInfo>
            <UserFavButton>
              <FavoriteIcon width="24" height="24" fill="#ff0000" />
            </UserFavButton>
          </UserInfoArea>
          <ServiceArea></ServiceArea>
          <TestimonialArea></TestimonialArea>
        </PageBody>
      </Scroller>
      <BackButton onPress={handleBackButton}>
        <BackIcon width="44" height="44" fill="#fff" />
      </BackButton>
    </Container>
  );
}
