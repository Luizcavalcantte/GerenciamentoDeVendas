const BASE_API = 'https://api.b7web.com.br/devbarber/api';

export default {
  checkToken: async token => {
    const req = await fetch(`${BASE_API}/auth/refresh`, {
      method: 'POST',
      header: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token}),
    });
    const json = await req.json();
    return json;
  },
  signIn: async (email, password) => {
    console.log(email);
    console.log(password);
    const req = await fetch(`${BASE_API}/auth/login`, {
      method: 'POST',
      header: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });
    const json = await req.json();
    return json;
  },
  signUp: async (name, email, password) => {
    const req = await fetch(`${BASE_API}/auth/user`, {
      method: 'POST',
      header: {
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email, password}),
    });
    const json = await req.json();
    return json;
  },
};
