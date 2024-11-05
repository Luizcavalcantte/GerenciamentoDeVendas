import React, {useEffect, useState} from 'react';
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import ExpendIcon from '../assets/expand.svg';
import {useNavigation} from '@react-navigation/native';
import NavPrevIcon from '../assets/nav_prev.svg';
import NavNextIcon from '../assets/nav_next.svg';
import PersonIcon from '../assets/person.svg';

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];
const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

export default function BarberModal({children, show, setShow, user, service}) {
  const navigation = useNavigation();
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedHour, setSelectedHour] = useState(null);
  const [listDays, setListDays] = useState([]);
  const [listHours, setListHours] = useState([]);

  useEffect(() => {
    let today = new Date();
    setSelectedYear(today.getFullYear());
    setSelectedMonth(today.getMonth());
    setSelectedDay(today.getDate());
  }, []);

  function handleLeftDataClick() {
    if (selectedMonth > 0) {
      let newMonth = selectedMonth - 1;
      setSelectedMonth(newMonth);
    } else {
      let newMonth = 11;
      let newYear = selectedYear - 1;
      setSelectedMonth(newMonth);
      setSelectedYear(newYear);
    }
  }
  function handleRightDataClick() {
    if (selectedMonth < 11) {
      let newMonth = selectedMonth + 1;
      setSelectedMonth(newMonth);
    } else {
      let newMonth = 0;
      let newYear = selectedYear + 1;
      setSelectedMonth(newMonth);
      setSelectedYear(newYear);
    }
  }

  function handleFinishClick() {}
  return (
    <Modal
      style={styles.modal}
      transparent={true}
      visible={show}
      animationType="slide">
      <View style={styles.modalArea}>
        <View style={styles.modalBody}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              setShow(false);
              console.log(service);
            }}>
            <ExpendIcon height={56} width={56} fill="#000" />
          </TouchableOpacity>
          <View style={styles.modalItem}>
            <View style={styles.userInfo}>
              {user.avatar ? (
                <Image style={styles.userAvatar} source={{uri: user.avatar}} />
              ) : (
                <PersonIcon width="56" height="56" fill="#ff0000" />
              )}
              <Text style={styles.userName}> {user.name}</Text>
            </View>
          </View>
          {service != null && (
            <View style={styles.modalItem}>
              <View style={styles.serviceInfo}>
                <Text style={styles.serviceInfoText}>
                  {user.services[service].name}
                </Text>
                <Text style={styles.serviceInfoText}>
                  R$ {user.services[service].price.toFixed(2)}
                </Text>
              </View>
            </View>
          )}
          <View style={styles.modalItem}>
            <View style={styles.dateInfo}>
              <TouchableOpacity
                style={styles.datePrevArea}
                onPress={handleLeftDataClick}>
                <NavPrevIcon width={35} height={35} fill="#000" />
              </TouchableOpacity>
              <View style={styles.dateTitle}>
                <Text style={styles.dateTitleText}>
                  {' '}
                  {months[selectedMonth]} {selectedYear}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.dateNextArea}
                onPress={handleRightDataClick}>
                <NavNextIcon width={35} height={35} fill="#000" />
              </TouchableOpacity>
            </View>
            <ScrollView
              style={styles.dateList}
              horizontal={true}
              showsHorizontalScrollIndicator={false}></ScrollView>
          </View>
          <TouchableOpacity
            style={styles.finishButton}
            onPress={handleFinishClick}>
            <Text style={styles.finishButtonText}>Finalizar Agendamento</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalArea: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalBody: {
    backgroundColor: '#83d6e3',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 300,
    paddingTop: 10,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  closeButton: {
    height: 40,
    width: 40,
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userAvatar: {
    width: 56,
    height: 56,
    borderRadius: 20,
    marginRight: 15,
  },
  userName: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
  },
  serviceInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  serviceInfoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  finishButton: {
    backgroundColor: '#268596',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  finishButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
  dateInfo: {
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  datePrevArea: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  dateNextArea: {
    flex: 1,
    alignItems: 'flex-start',
  },
  dateTitle: {
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateTitleText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
});
