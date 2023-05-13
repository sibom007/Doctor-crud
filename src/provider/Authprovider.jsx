import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/Firebase';


export const Authcontext = createContext();
const auth = getAuth(app)

const Authprovider = ({ children }) => {


  const [user, setuser] = useState(null)
  const [loading, setloading] = useState(null)
  const googleprovider = new GoogleAuthProvider();



  const createuser = (password, email) => {
    setloading(true)
    return createUserWithEmailAndPassword(auth, password, email)
  }
  const Signin = (password, email) => {
    setloading(true)
    return signInWithEmailAndPassword(auth, password, email)
  }
  const googlesignin = () => {
    setloading(true)
    return signInWithPopup(auth, googleprovider)
  }
  const Logout = () => {
    setloading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setuser(currentUser)
      console.log('current User', currentUser);
      setloading(false)

      if (currentUser && currentUser.email) {
        const loggedUser = {
          email: currentUser.email
        }
        fetch('https://doctor-curd-server.vercel.app/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(loggedUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log("jws res", data);
            localStorage.setItem('car-access-token', data.token)

          })
      }
      else{
        localStorage.removeItem('car-access-token')
      }

    })
    return () => {
      return unsubscribe()
    }
  }, [])


  const authinfo = {
    user,
    loading,
    createuser,
    Signin,
    googlesignin,
    Logout
  }


  return (
    <Authcontext.Provider value={authinfo}>
      {children}
    </Authcontext.Provider>
  );
};

export default Authprovider;