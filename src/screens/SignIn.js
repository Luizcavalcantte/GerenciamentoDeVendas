import React from 'react';

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
  return (
    <Container>
      <ImputArea>
        <SignInput IconSvg={EmailIcon} placeholder="Digite seu e-mail" />
        <SignInput IconSvg={LockIcon} placeholder="Digite sua senha" />
        <CustumButton>
          <CustumButtonText>LOGIN</CustumButtonText>
        </CustumButton>
      </ImputArea>
      <SignMessageButton>
        <SignMessageButtonText>
          Ainda nao possue uma conta?
        </SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
}
