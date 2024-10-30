import React, {useState} from 'react';
import {Text, View, ScrollView, RefreshControl} from 'react-native';

export default function Search() {
  function onRefresh() {}
  const [refreshing, setRefresing] = useState(false);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}></RefreshControl>
      }></ScrollView>
  );
}
