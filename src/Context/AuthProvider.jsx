import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.init';
import axios from 'axios';
const auth = getAuth(app);

const provider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

      
    const [loading , setLoading] = useState(true);

    const [totalRegistration , setTotalRegistration] = useState(0)

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

            //   post  jwt token 
             if(currentUser?.email) {
                  const user = {   email : currentUser.email}
                  axios.post('https://marathon-pro-server.vercel.app/jwt', user, {withCredentials : true})
                  .then(res => {
     
                     
                  })
             } else{
                   axios.post('https://marathon-pro-server.vercel.app/logout', {}, {withCredentials : true})
                   .then(res => {
               
                     
                   })
             }

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
googleLogIn,
totalRegistration,
setTotalRegistration
}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;