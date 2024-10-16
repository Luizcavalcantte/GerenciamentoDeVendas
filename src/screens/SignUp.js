import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  ImputArea,
  CustumButton,
  CustumButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  SignInput,
} from '../components/MyComponents';
import EmailIcon from '../assets/email.svg';
import LockIcon from '../assets/lock.svg';
import PersonIcon from '../assets/person.svg';
export default function SignIn() {
  const navigation = useNavigation();
  const [emailField, setEmailfield] = useState('');
  const [passwordField, setPasswordfield] = useState('');
  const [nameField, setNameField] = useState('');

  function handleSignClick() {}

  function handleMessageButtonClick() {
    console.log('tela de login');
    navigation.reset({
      routes: [{name: 'SignIn'}],
    });
  }

  return (
    <Container>
      <ImputArea>
        <SignInput
          IconSvg={PersonIcon}
          placeholder="Digite seu Nome"
          value={nameField}
          onChangeText={t => setNameField(t)}
        />
        <SignInput
          IconSvg={EmailIcon}
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={t => setEmailfield(t)}
        />
        <SignInput
          IconSvg={LockIcon}
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={t => setPasswordfield(t)}
          password={true}
        />
        <CustumButton onPress={handleSignClick}>
          <CustumButtonText>CADASTRAR</CustumButtonText>
        </CustumButton>
      </ImputArea>
      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
}
