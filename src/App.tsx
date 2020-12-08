import React from 'react';

import UserContextProvider from './context/user';

import GlobalStyle from './assets/styles/global';
import Routes from './routes';

function App() { 
  return (
    <>
      <UserContextProvider>
        <Routes />
        <GlobalStyle />
      </UserContextProvider>
    </>
  );
}

export default App;