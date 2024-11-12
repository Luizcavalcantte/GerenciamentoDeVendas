import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  RefreshControl,
} from 'react-native';
import AppointmentsItem from '../components/AppointmentsItem';
import {getAppointments} from '../Api';
import {useNavigation} from '@react-navigation/native';

export default function Appointments() {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    getAllAppointments();
  }, []);

  async function getAllAppointments() {
    setLoading(true);
    setList([]);
    let res = await getAppointments();
    if (res) {
      console.log(res);
      setList(res);
    } else {
      setEmptyList(true);
    }

    setLoading(false);
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scroller}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getAllAppointments} />
        }>
        {!loading && list.length === 0 && (
          <Text style={styles.emptyWarning}>Não há Agendamentos</Text>
        )}
        <View style={styles.listArea}>
          {list.map((item, key) => (
            <AppointmentsItem key={key} data={item} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63c2d1',
  },
  headerArea: {
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
  },
  scroller: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listArea: {
    marginVertical: 20,
  },
  emptyWarning: {
    textAlign: 'center',
    marginTop: 30,
    color: '#fff',
    fontSize: 14,
  },
});
