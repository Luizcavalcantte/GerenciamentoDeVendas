import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BarberLogo from '../assets/barber.svg';

export function Container({children}) {
  return (
    <SafeAreaView style={styles.container}>
      <BarberLogo height="160" />
      {children}
    </SafeAreaView>
  );
}
export function ImputArea({children}) {
  return <View style={styles.inputArea}>{children}</View>;
}
export function CustumButton({children}) {
  return (
    <TouchableOpacity style={styles.custumButton}>{children}</TouchableOpacity>
  );
}
export function CustumButtonText({children}) {
  return <Text style={styles.custumButtonText}>{children}</Text>;
}
export function SignMessageButton({children}) {
  return (
    <TouchableOpacity style={styles.signMessageButton}>
      {children}
    </TouchableOpacity>
  );
}
export function SignMessageButtonText({children}) {
  return <Text style={styles.signMessageButtonText}>{children}</Text>;
}
export function SignMessageButtonTextBold({children}) {
  return <Text style={styles.signMessageButtonTextBold}>{children}</Text>;
}

export function SignInput({children, IconSvg, placeholder}) {
  return (
    <View style={styles.signInput}>
      <IconSvg width={24} fill="#268596"></IconSvg>
      <TextInput style={styles.textInput} placeholder={placeholder}></TextInput>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63c2d1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputArea: {
    padding: 40,
    width: '100%',
  },
  custumButton: {
    height: 60,
    backgroundColor: '#268596',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  custumButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  signMessageButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  signMessageButtonText: {
    fontSize: 16,
    color: '#268596',
  },
  signMessageButtonTextBold: {
    fontSize: 16,
    color: '#268596',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  signInput: {
    width: '100%',
    height: 60,
    backgroundColor: '#83d6e3',
    flexDirection: 'row',
    borderRadius: 30,
    paddingLeft: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#268596',
    marginLeft: 10,
  },
});
