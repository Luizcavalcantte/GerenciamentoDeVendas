import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

export function Container({children}) {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}
export function Scroller({children}) {
  return <ScrollView style={styles.scroller}>{children}</ScrollView>;
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
});
