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
export default function SignIn() {
  const navigation = useNavigation();
  const [emailField, setEmailfield] = useState('');
  const [passwordField, setPasswordfield] = useState('');

  function handleSignClick() {}

  function handleMessageButtonClick() {
    console.log('tela de cadastro');
    navigation.reset({
      routes: [{name: 'SignUp'}],
    });
  }

  return (
    <Container>
      <ImputArea>
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
          <CustumButtonText>LOGIN</CustumButtonText>
        </CustumButton>
      </ImputArea>
      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>
          Ainda nao possue uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
}
