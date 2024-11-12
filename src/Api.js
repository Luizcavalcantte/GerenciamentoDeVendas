import {initializeApp} from 'firebase/app';
import {getFirestore, doc, getDoc} from 'firebase/firestore';

import {
  initializeAuth,
  getReactNativePersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
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
    console.log(user);
    navigation.reset({
      routes: [{name: 'MainTab'}],
    });
  } catch (error) {
    alert(error.message);
  }
}

export async function getBarbers() {
  const docRef = doc(db, 'data', 'fRKGk5zCawMTccefdDon');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    const barbers = data.barbers;

    return barbers;
  } else {
    console.log('Nenhum documento encontrado!');
    return [];
  }
}

export async function logOut(navigation) {
  try {
    await signOut(auth);
    console.log('Usuário deslogado com sucesso');
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  } catch (error) {
    console.error('Erro ao deslogar: ', error);
  }
}

export async function getBarber(id) {
  const docRef = doc(db, 'data', 'fRKGk5zCawMTccefdDon'); // Acesse o documento específico
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    const barbers = data.barbers;
    const barber = barbers.find(barber => barber.id === id); // Encontre o barbeiro com o ID específico
    if (barber) {
      return barber;
    } else {
      console.log('Barbeiro não encontrado!');
      return null;
    }
  } else {
    console.log('Nenhum documento encontrado!');
    return null;
  }
}

export async function search(barberName) {
  const docRef = doc(db, 'data', 'fRKGk5zCawMTccefdDon'); // Acesse o documento específico
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    const barbers = data.barbers;
    const filteredBarbers = barbers.filter(barber =>
      barber.name.toLowerCase().includes(barberName.toLowerCase()),
    );
    if (filteredBarbers.length > 0) {
      return filteredBarbers;
    } else {
      console.log('Barbeiro não encontrado!');
      return [];
    }
  } else {
    console.log('Nenhum documento encontrado!');
    return [];
  }
}

export async function getFavorites() {
  const docRef = doc(db, 'data', 'fRKGk5zCawMTccefdDon'); // Acesse o documento específico
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    const barbers = data.barbers;
    const filteredBarbers = barbers.filter(barber => barber.favorite == true);

    if (filteredBarbers.length > 0) {
      return filteredBarbers;
    } else {
      console.log('Barbeiro não encontrado!');
      return [];
    }
  } else {
    console.log('Nenhum documento encontrado!');
    return [];
  }
}

export async function getAppointments() {
  const userId = await new Promise((resolve, reject) => {
    onAuthStateChanged(auth, user => {
      if (user) {
        resolve(user.uid);
      } else {
        reject('Usuário não autenticado');
      }
    });
  });

  const docRef = doc(db, 'data', 'fRKGk5zCawMTccefdDon');
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    const appointments = data.appointments;
    const filteredAppointments = appointments.filter(
      appointments => appointments.uid == userId,
    );

    if (filteredAppointments.length > 0) {
      return filteredAppointments;
    } else {
      console.log('serviço não encontrado!');
      return [];
    }
  } else {
    console.log('Nenhum documento encontrado!');
    return [];
  }
}

export async function getUserInfo() {
  const userInfo = await new Promise((resolve, reject) => {
    onAuthStateChanged(auth, user => {
      if (user) {
        resolve(user);
        console.log('user' + user);
      } else {
        reject('Usuário não autenticado');
      }
    });
  });

  return userInfo;
}

export async function updateName(newName) {
  onAuthStateChanged(auth, user => {
    if (user) {
      updateProfile(user, {
        displayName: newName,
      });
    } else {
    }
  });
}
