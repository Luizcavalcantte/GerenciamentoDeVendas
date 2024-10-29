import {initializeApp} from 'firebase/app';
import {getFirestore, collection, doc, getDoc} from 'firebase/firestore';

import {
  initializeAuth,
  getReactNativePersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
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

const db = getFirestore(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

auth.setPersistence(getReactNativePersistence(AsyncStorage));

export async function checkAuthState(navigation) {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log('Usuário logado:', user.displayName);
      navigation.reset({
        routes: [{name: 'MainTab'}],
      });
    } else {
      navigation.navigate('SignIn');
    }
  });
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

    alert('Login realizado com sucesso!');
    navigation.reset({
      routes: [{name: 'MainTab'}],
    });
  } catch (error) {
    alert(error.message);
  }
}

export async function getBarbers() {
  console.log('Iniciada função getBarbers');
  const docRef = doc(db, 'data', 'fRKGk5zCawMTccefdDon');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    const barbers = data.barbers;
    console.log('Barbeiros:', barbers);
    return barbers;
  } else {
    console.log('Nenhum documento encontrado!');
    return [];
  }
}
