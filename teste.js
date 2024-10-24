import {initializeApp} from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithCustomToken,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAOrhcLAAGq8V1hUlYnSJcZP1Nm9uxtUB8',
  authDomain: 'meus-estabelecimentos.firebaseapp.com',
  projectId: 'meus-estabelecimentos',
  storageBucket: 'meus-estabelecimentos.appspot.com',
  messagingSenderId: '1022710222188',
  appId: '1:1022710222188:web:dff1139b67529f1c40b749',
  measurementId: 'G-35X37EE7YK',
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export async function checkToken(navigation) {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    try {
      const userCredential = await signInWithCustomToken(auth, token);
      const user = userCredential.user;

      console.log('User ID:', user.uid);
      console.log('Email:', user.email);
      console.log('Display Name:', user.displayName);

      alert('Login realizado com sucesso!');

      navigation.reset({
        routes: [{name: 'MainTab'}],
      });
    } catch (error) {
      navigation.navigate('SignIn');
      // alert('Erro ao fazer login: ' + error.message);
      console.log('Erro ao fazer login: ' + error.message);
    }
    console.log('token encontrado:' + token);
  } else {
    navigation.navigate('SignIn');
  }
}

export async function signUp(navigation, name, emailField, passwordField) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      emailField,
      passwordField,
    );
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: name,
    });
    const idToken = await user.getIdToken();
    console.log('ID Token:', idToken);
    await AsyncStorage.setItem('token', idToken);

    alert('Usuário cadastrado com sucesso!');
    navigation.reset({
      routes: [{name: 'MainTab'}],
    });
  } catch (error) {
    alert(error.message);
  }
}

export async function signIn(navigation, emailField, passwordField) {
  try {
    alert('Login realizado com sucesso!');
    const userCredential = await signInWithEmailAndPassword(
      auth,
      emailField,
      passwordField,
    );
    const user = userCredential.user;
    const idToken = await user.getIdToken();
    await AsyncStorage.setItem('token', idToken);
    alert('Login realizado com sucesso!');
    navigation.reset({
      routes: [{name: 'MainTab'}],
    });
  } catch (error) {
    alert(error.message);
  }
}
