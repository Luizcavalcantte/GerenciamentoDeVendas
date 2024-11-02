import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ActivityIndicator,
  Image,
  RefreshControl,
} from 'react-native';

export function Container({children}) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}
export function Scroller({children, refreshing, onRefresh}) {
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}></RefreshControl>
      }
      style={styles.scroller}>
      {children}
    </ScrollView>
  );
}

export function FakeSwiper({children}) {
  return <View style={styles.fakeSwiper}>{children}</View>;
}

export function PageBody({children}) {
  return <View style={styles.pageBody}>{children}</View>;
}

export function UserInfoArea({children}) {
  return <View style={styles.userInfoArea}>{children}</View>;
}

export function ServiceArea({children}) {
  return <View style={styles.serviceArea}>{children}</View>;
}

export function TestimonialArea({children}) {
  return <View style={styles.testimonialArea}>{children}</View>;
}

export function SwiperDot({children}) {
  return <View style={styles.swiperDot}>{children}</View>;
}
export function SwiperDotActive({children}) {
  return <View style={styles.swiperDotActive}>{children}</View>;
}

export function SwiperItem({children}) {
  return <View style={styles.swiperItem}>{children}</View>;
}

export function SwiperImage({source, resizeMode}) {
  return (
    <Image style={styles.swiperImage} source={source} resizeMode={resizeMode} />
  );
}

export function UserInfo({children}) {
  return <View style={styles.userInfo}>{children}</View>;
}

export function UserAvatar({source}) {
  return <Image style={styles.userAvatar} source={source} />;
}

export function UserInfoName({children}) {
  return <Text style={styles.userInfoName}>{children}</Text>;
}

export function UserFavButton({children}) {
  return (
    <TouchableOpacity style={styles.userFavButton}>{children}</TouchableOpacity>
  );
}

export function BackButton({children, onPress}) {
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

export function LoadingIcon(size, color) {
  return (
    <ActivityIndicator size={size} color={color} style={{marginTop: 50}} />
  );
}
export function ServicesTitle({children}) {
  return <Text style={styles.servicesTitle}>{children}</Text>;
}
export function ServiceItem({children}) {
  return <View style={styles.serviceItem}>{children}</View>;
}

export function ServiceInfo({children}) {
  return <View style={styles.serviceInfo}>{children}</View>;
}
export function ServiceName({children}) {
  return <Text style={styles.serviceName}>{children}</Text>;
}
export function ServicePrice({children}) {
  return <Text style={styles.servicePrice}>{children}</Text>;
}

export function ServiceChooseButton({children}) {
  return (
    <TouchableOpacity style={styles.serviceChooseButton}>
      {children}
    </TouchableOpacity>
  );
}

export function ServiceChooseButtonText({children}) {
  return <Text style={styles.serviceChooseButtonText}>{children}</Text>;
}

export function TestimonialItem({children}) {
  return <View style={styles.testimonialItem}>{children}</View>;
}
export function TestimonialInfo({children}) {
  return <View style={styles.testimonialInfo}>{children}</View>;
}

export function TestimonialName({children}) {
  return <Text style={styles.testimonialName}>{children}</Text>;
}

export function TestimonialBody({children}) {
  return <Text style={styles.testimonialBody}>{children}</Text>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroller: {
    flex: 1,
  },
  swiperDot: {
    width: 10,
    height: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 3,
  },
  swiperDotActive: {
    width: 10,
    height: 10,
    backgroundColor: '#000',
    borderRadius: 5,
    margin: 3,
  },
  swiperItem: {
    flex: 1,
    backgroundColor: '#63c2d1',
  },
  swiperImage: {
    width: '100%',
    height: 240,
  },
  pageBody: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    marginTop: -50,
    minHeight: 450,
  },
  userInfoArea: {
    flexDirection: 'row',
    marginTop: -30,
  },
  userAvatar: {
    width: 110,
    height: 110,
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 20,
    borderWidth: 4,
    borderBlockColor: '#FFF',
  },
  userInfoName: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userFavButton: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#99999999',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 9,
  },
  fakeSwiper: {
    height: 240,
    backgroundColor: '#63c2d1',
  },
  serviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginBottom: 20,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#268593',
  },
  servicePrice: {
    fontSize: 14,
    color: '#268593',
  },
  serviceChooseButton: {
    backgroundColor: '#4eadbe',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  serviceChooseButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  servicesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#268596',
    marginLeft: 30,
    marginBottom: 20,
  },
  serviceArea: {
    marginTop: 20,
  },
  testimonialArea: {
    marginTop: 30,
  },
  testimonialItem: {
    backgroundColor: '#268596',
    padding: 15,
    borderRadius: 10,
    height: 110,
    justifyContent: 'center',
    marginHorizontal: 50,
  },
  testimonialInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  testimonialName: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  testimonialBody: {
    color: '#fff',
    fontSize: 13,
  },
});
