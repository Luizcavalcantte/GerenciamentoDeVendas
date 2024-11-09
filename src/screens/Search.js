import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {BarberItem} from '../components/ScreenTabComponents';
import {search} from '../Api';

export default function Search() {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  async function searchBarbers() {
    setLoading(true);
    setList([]);
    if (searchText != '') {
      let res = await search(searchText);
      console.log(res);
      if (res) {
        setList(res);
      } else {
        alert(res.error);
        setList([]);
      }
    }
    setLoading(false);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchArea}>
        <TextInput
          style={styles.searchInput}
          placeholder="Digite o nome do barbeiro"
          placeholderTextColor={'#FFF'}
          value={searchText}
          onChangeText={t => setSearchText(t)}
          onEndEditing={searchBarbers}
          returnKeyType="search"
          autoFocus={true}
          selectTextOnFocus={true}
        />
      </View>
      <ScrollView style={styles.scroller}>
        {loading && (
          <ActivityIndicator
            size="large"
            color="#000"
            style={{marginTop: 30}}
          />
        )}
        <View style={styles.listArea}>
          {list.map((item, key) => (
            <BarberItem key={key} data={item} />
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
  searchArea: {
    backgroundColor: '#4eadbe',
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 20,
    margin: 20,
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
});
