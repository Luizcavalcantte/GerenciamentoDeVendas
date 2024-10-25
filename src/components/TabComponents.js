import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import HomeIcon from '../assets/home.svg';
import SearchIcon from '../assets/search.svg';
import TodayIcon from '../assets/today.svg';
import FavoriteIcon from '../assets/favorite.svg';
import AccountIcon from '../assets/account.svg';

export function TabArea({state, navigation}) {
  function goTo(screenName) {
    navigation.navigate(screenName);
  }
  return (
    <View style={styles.tabArea}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => {
          goTo('Home');
        }}>
        <HomeIcon
          style={{opacity: state.index === 0 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#fff"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => {
          goTo('Search');
        }}>
        <SearchIcon
          style={{opacity: state.index === 1 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#fff"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => {
          goTo('Appointments');
        }}>
        <TodayIcon
          style={{opacity: state.index === 2 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#fff"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => {
          goTo('Favorites');
        }}>
        <FavoriteIcon
          style={{opacity: state.index === 3 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#fff"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => {
          goTo('Profile');
        }}>
        <AccountIcon
          style={{opacity: state.index === 4 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#fff"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabArea: {
    height: 60,
    backgroundColor: '#4eadbe',
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
