import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

export default function AppointmentsItem({data, state, navigation}) {
  let d = data.datetime.split(' ');
  let hourString = d[1].substring(0, 5);
  let dateString =
    d[0].substring(8, 10) +
    '/' +
    d[0].substring(5, 7) +
    '/' +
    d[0].substring(0, 4);

  return (
    <View style={styles.area}>
      <View style={styles.userArea}>
        <Image style={styles.avatar} source={{uri: data.barber.avatar}} />
        <Text style={styles.userName}>{data.barber.name}</Text>
      </View>

      <View style={styles.splitArea}>
        <Text style={styles.serviceText}>{data.service.name}</Text>
        <Text style={styles.serviceText}>
          R$ {data.service.price.toFixed(2)}
        </Text>
      </View>
      <View style={styles.splitArea}>
        <Text style={styles.dateText}>{dateString}</Text>
        <Text style={styles.dateText}>{hourString}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  area: {
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 20,
    padding: 15,
  },
  userArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 20,
    marginRight: 20,
  },
  infoArea: {
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  splitArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  serviceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#4eadbe',
  },
});
