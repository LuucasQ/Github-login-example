import { createContext, useState, useContext, useEffect} from 'react';

export const UserContext = createContext({});

const UserContextProvider = ({ children }: any) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user: any = localStorage.getItem('@hubgit:user')

    setUser(JSON.parse(user));
  }, [])

  function handleLogin(userProperties: any) {
    setUser(userProperties);
    
    const userToString = JSON.stringify(userProperties);

    localStorage.setItem('@hubgit:user', userToString);
  }

  function logout() {
    localStorage.removeItem('@hubgit:user')
    setUser('')
  }


  return (
      <UserContext.Provider value={{user, handleLogin, logout}}>
        {children}
      </UserContext.Provider>
    )
}

export const useUser = () =>{
  return useContext(UserContext)
}

export default UserContextProvider;