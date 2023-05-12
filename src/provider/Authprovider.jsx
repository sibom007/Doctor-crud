import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase';


export const Authcontext = createContext();
const auth = getAuth(app)

const Authprovider = ({ children }) => {


  const [user,setuser] =useState(null)
  const [loading,setloading] =useState(null)


 
  const createuser =(password,email)=>{
    setloading(true)
    return createUserWithEmailAndPassword(auth,password,email)
  }
  const Signin =(password,email)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth,password,email)
  }
  const Logout =()=>{
    setloading(true)
    return signOut(auth)
  }

  useEffect(() =>{
    const unsubscribe =onAuthStateChanged(auth,currentUser =>{
        setuser(currentUser)
        console.log('current User',currentUser);
        setloading(false)
        
    })
    return () =>{
        return unsubscribe()
    }
  },[])


    const authinfo = {
        user,
        loading,
        createuser,
        Signin,
        Logout
    }


    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;