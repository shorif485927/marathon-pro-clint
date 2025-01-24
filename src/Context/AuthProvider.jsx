import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.init';
const auth = getAuth(app);

const provider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
      console.log(user);
      
    const [loading , setLoading] = useState(true)

    // new user
    const  newUser = (email,password) => {
      
       return createUserWithEmailAndPassword(auth,email,password)
  }


      // log in 

      const userLogIn = (email,password) => {
        setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
  }


     // google log in 
   
     const googleLogIn = () => {
        setLoading(true)
      return signInWithPopup(auth,provider)
   }
      // observer
      useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unSubscribe()
        }
},[])


    // log out

    const logOut = () => {
        setLoading(true)
       return signOut(auth)
  }





const authInfo = {
     user,
     setUser,
setLoading,
loading,
newUser,
userLogIn,
logOut,
googleLogIn
}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;