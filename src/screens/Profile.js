import React, {useEffect, useState} from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {logOut, getUserInfo} from '../Api';

export default function Profile() {
  const [userInfo, setUserInfo] = useState(null);
  const [userName, setUserName] = useState('');
  const [informalName, setInformalName] = useState('');
  const [phone, setPhone] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    async function getUser() {
      try {
        const user = await getUserInfo();
        setUserInfo(user);
        console.log('user ' + JSON.stringify(userInfo));
      } catch {
        console.log('error');
      }
    }

    getUser();
  }, []);

  async function handleLogoutClick() {
    logOut(navigation);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          height={80}
          width={80}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/9368/9368284.png',
          }}></Image>
        {userInfo?.email ? (
          <Text style={styles.userName}>{userInfo.email}</Text>
        ) : (
          <Text style={styles.userName}>Sem Nome de Usuario</Text>
        )}
      </View>
      <View style={styles.body}>
        <View style={styles.inputField}>
          <TextInput
            style={styles.editingInput}
            placeholder="User Name"
            placeholderTextColor={'#000'}
            returnKeyType="done"
            selectTextOnFocus={true}
            value={userName}
            onChangeText={t => setUserName(t)}
          />
          <TouchableOpacity style={styles.editingButton}>
            <Image
              style={styles.editingButtonImage}
              source={require('../assets/editingIcon.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputField}>
          <TextInput
            style={styles.editingInput}
            placeholder="Apelido"
            placeholderTextColor={'#000'}
            returnKeyType="done"
            selectTextOnFocus={true}
            value={informalName}
            onChangeText={t => setInformalName(t)}
          />
          <TouchableOpacity style={styles.editingButton}>
            <Image
              style={styles.editingButtonImage}
              source={require('../assets/editingIcon.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.inputField}>
          <TextInput
            style={styles.editingInput}
            placeholder="Telefone"
            placeholderTextColor={'#000'}
            returnKeyType="done"
            selectTextOnFocus={true}
            value={phone}
            onChangeText={t => setPhone(t)}
          />
          <TouchableOpacity style={styles.editingButton}>
            <Image
              style={styles.editingButtonImage}
              source={require('../assets/editingIcon.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{padding: 30}}>
        <Button title="Sair" onPress={handleLogoutClick}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63c2d1',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
  },
  userName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  body: {
    flex: 1,
    paddingHorizontal: 30,
  },
  editingInput: {
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 5,
    width: 280,
    paddingLeft: 10,
  },
  inputField: {
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  editingButton: {
    backgroundColor: '#fff',
    height: 30,
    width: 30,
    borderRadius: 5,
  },
  editingButtonImage: {
    height: 30,
    width: 30,
    color: '#fff',
  },
});
