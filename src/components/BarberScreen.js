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
});
