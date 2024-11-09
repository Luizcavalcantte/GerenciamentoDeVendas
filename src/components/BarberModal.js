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
    if (user.availability) {
      let daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
      let newListDays = [];

      for (let i = 1; i <= daysInMonth; i++) {
        let d = new Date(selectedYear, selectedMonth, i);
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let day = d.getDate();
        month = month < 10 ? '0' + month : month;
        day = day < 10 ? '0' + day : day;

        let selDate = year + '-' + month + '-' + day;

        let availability = user.availability.filter(e => e.date === selDate);

        newListDays.push({
          status: availability.length > 0 ? true : false,
          weekDay: days[d.getDay()],
          number: i,
        });
      }

      setListDays(newListDays);
      setSelectedDay(0);
      setListHours([]);
      setSelectedHour(0);
    }
  }, [user, selectedMonth, selectedYear]);

  useEffect(() => {
    if (user.availability && selectedDay > 0) {
      let d = new Date(selectedYear, selectedMonth, selectedDay);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;
      let selDate = year + '-' + month + '-' + day;

      let availability = user.availability.filter(e => e.date === selDate);

      if (availability.length > 0) {
        setListHours(availability[0].hours);
      }
    }
    setSelectedHour(null);
  }, [user, selectedDay]);

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

  function handleFinishClick() {
    if (
      user.id &&
      service != null &&
      selectedYear > 0 &&
      selectedDay > 0 &&
      selectedHour != null
    ) {
      // mandar essas informaçoes pro sistema e registrar o agendamento, no meu caso, esperar o barbeiro confirmar o agendamento e mandar pro firebase
      setShow(false);
      navigation.navigate('Appointments');
    } else {
      Alert('algo esta errado, tente novamente mais tarde');
    }
  }
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
              showsHorizontalScrollIndicator={false}>
              {listDays.map((item, key) => (
                <TouchableOpacity
                  style={[
                    styles.dateItem,
                    {
                      opacity: item.status ? 1 : 0.5,
                      backgroundColor:
                        item.number === selectedDay ? '#4eadb3' : '#fff',
                    },
                  ]}
                  key={key}
                  onPress={() => {
                    if (item.status) {
                      setSelectedDay(item.number);
                    } else {
                      setSelectedDay(0);
                      setListHours([]);
                    }
                  }}>
                  <Text
                    style={[
                      styles.dateItemText,
                      {color: item.number === selectedDay ? '#fff' : '#000'},
                    ]}>
                    {item.weekDay}
                  </Text>
                  <Text
                    style={[
                      styles.dateItemText,
                      {color: item.number === selectedDay ? '#fff' : '#000'},
                    ]}>
                    {item.number}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {selectedDay > 0 && listHours.length > 0 && (
            <View style={styles.modalItem}>
              <ScrollView
                style={styles.timeList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                {listHours.map((item, key) => (
                  <TouchableOpacity
                    style={[
                      styles.timeItem,
                      {
                        backgroundColor:
                          item === selectedHour ? '#4eadb3' : '#fff',
                      },
                    ]}
                    key={key}
                    onPress={() => {
                      setSelectedHour(item);
                    }}>
                    <Text
                      style={[
                        styles.dateItemText,
                        {color: item === selectedHour ? '#fff' : '#000'},
                      ]}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          )}

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
  dateItem: {
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 5,
  },
  dateItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  timeItem: {
    width: 75,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
