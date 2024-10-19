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

import Api from '../Api';
import EmailIcon from '../assets/email.svg';
import LockIcon from '../assets/lock.svg';

export default function SignIn() {
  const navigation = useNavigation();
  const [emailField, setEmailfield] = useState('');
  const [passwordField, setPasswordfield] = useState('');

  async function handleSignClick() {
    console.log('teste');
    if (emailField != '' && passwordField != '') {
      let json = await Api.signIn(emailField, passwordField);
      console.log(json);
      if (json.token) {
        alert('Deu certo!');
      } else {
        alert('E-mail e/ou senha errados!');
      }
    } else {
      alert('preencha os campos');
    }
  }

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
