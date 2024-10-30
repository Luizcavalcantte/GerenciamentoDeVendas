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
import {Stars} from './Stars';

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
export function HeaderArea({children}) {
  return <View style={styles.headerArea}>{children}</View>;
}
export function HeaderTitle({children}) {
  return <Text style={styles.headerTitle}>{children}</Text>;
}
export function SearchButton({children, onPress}) {
  return (
    <TouchableOpacity style={styles.searchButton} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

export function LocationArea({children}) {
  return <View style={styles.locationArea}>{children}</View>;
}
export function LocationInput({children, value, onChangeText}) {
  return (
    <TextInput
      style={styles.locationInput}
      placeholder="Onde você está?"
      placeholderTextColor={'#fff'}
      value={value}
      onChangeText={onChangeText}>
      {children}
    </TextInput>
  );
}
export function LocationFinder({children, onPress}) {
  return (
    <TouchableOpacity style={styles.locationFinder} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

export function LoadingIcon() {
  return (
    <ActivityIndicator size="large" color="#fff" style={{marginTop: 50}} />
  );
}

export function ListArea({children}) {
  return <View style={styles.listArea}>{children}</View>;
}
export function BarberItem({data}) {
  return (
    <TouchableOpacity style={styles.barberItem}>
      <View style={styles.area}>
        <Image style={styles.avatar} source={{uri: data.avatar}} />
        <View style={styles.infoArea}>
          <Text style={styles.userName}>{data.name}</Text>
          <Stars stars={data.stars} showNumber={true} />
          <View style={styles.seeProfileButton}>
            <Text style={styles.seeProfileButtonText}>Ver Perfil</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63c2d1',
  },
  scroller: {
    flex: 1,
    padding: 20,
  },
  headerArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    width: 250,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchButton: {
    width: 26,
    height: 26,
  },
  locationArea: {
    backgroundColor: '#4eadbe',
    height: 60,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  locationInput: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
  locationFinder: {
    width: 24,
    height: 24,
  },
  listArea: {
    marginVertical: 30,
  },
  area: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 20,
    padding: 15,
    flexDirection: 'row',
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 20,
  },
  infoArea: {
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  seeProfileButton: {
    width: 85,
    height: 26,
    borderWidth: 1,
    borderColor: '#4eadbe',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeProfileButtonText: {
    fontSize: 13,
    color: '#268596',
  },
});
