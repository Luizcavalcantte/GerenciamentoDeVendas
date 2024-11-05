import React, {useEffect, useState} from 'react';

import {useNavigation, useRoute} from '@react-navigation/native';
import {getBarber} from '../Api';
import Swiper from 'react-native-swiper';
import {Stars} from '../components/Stars';
import BarberModal from '../components/BarberModal';
import FavoriteIcon from '../assets/favorite.svg';
import FavoriteFullIcon from '../assets/favorite_full.svg';
import BackIcon from '../assets/back.svg';
import NavPrevIcon from '../assets/nav_prev.svg';
import NavNextIcon from '../assets/nav_next.svg';

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
  LoadingIcon,
  ServiceItem,
  ServicesTitle,
  ServiceInfo,
  ServiceName,
  ServicePrice,
  ServiceChooseButton,
  ServiceChooseButtonText,
  TestimonialItem,
  TestimonialName,
  TestimonialInfo,
  TestimonialBody,
} from '../components/BarberScreen';

export default function Barber() {
  const navigation = useNavigation();
  const route = useRoute();
  const [loading, setLoading] = useState(false);
  const [favorited, setFavorited] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

      setUserInfo(json);
      setFavorited(json.favorite);

      setLoading(false);
    }
    getBarberInfo();
  }, []);

  function handleBackButton() {
    navigation.goBack();
  }

  function handleFavClick() {
    setFavorited(!favorited);
    //pesquisar como muda o estado desse objeto associado apenas ao usuario q cliqou no botao
  }

  function handleServiceChoose(key) {
    setSelectedService(key);
    setShowModal(true);
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
            <UserFavButton onPress={handleFavClick}>
              {favorited ? (
                <FavoriteFullIcon width="24" height="24" fill="#ff0000" />
              ) : (
                <FavoriteIcon width="24" height="24" fill="#ff0000" />
              )}
            </UserFavButton>
          </UserInfoArea>
          {loading && <LoadingIcon size="large " color="#000" />}

          {userInfo.services && (
            <ServiceArea>
              <ServicesTitle>Lista De Serviços</ServicesTitle>
              {userInfo.services.map((item, key) => (
                <ServiceItem key={key}>
                  <ServiceInfo>
                    <ServiceName>{item.name}</ServiceName>
                    <ServicePrice>R$ {item.price.toFixed(2)}</ServicePrice>
                  </ServiceInfo>
                  <ServiceChooseButton onPress={() => handleServiceChoose(key)}>
                    <ServiceChooseButtonText>Agendar</ServiceChooseButtonText>
                  </ServiceChooseButton>
                </ServiceItem>
              ))}
            </ServiceArea>
          )}
          {userInfo.testimonials && userInfo.testimonials.length > 0 && (
            <TestimonialArea>
              <Swiper
                style={{height: 110}}
                showsPagination={false}
                showsButtons={true}
                prevButton={<NavPrevIcon height="35" width="35" fill="#000" />}
                nextButton={<NavNextIcon height="35" width="35" fill="#000" />}>
                {userInfo.testimonials.map((item, key) => (
                  <TestimonialItem key={key}>
                    <TestimonialInfo>
                      <TestimonialName>{item.name}</TestimonialName>
                      <Stars stars={item.rate} showNumber={false} />
                    </TestimonialInfo>
                    <TestimonialBody>{item.body}</TestimonialBody>
                  </TestimonialItem>
                ))}
              </Swiper>
            </TestimonialArea>
          )}
        </PageBody>
      </Scroller>
      <BackButton onPress={handleBackButton}>
        <BackIcon width="44" height="44" fill="#fff" />
      </BackButton>
      <BarberModal
        show={showModal}
        setShow={setShowModal}
        user={userInfo}
        service={selectedService}
      />
    </Container>
  );
}
