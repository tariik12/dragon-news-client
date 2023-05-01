import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase';
const auth = getAuth(app)
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const user = null;

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword (auth,email,password)
    }
    const singInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const authInfo ={
        user,
        createUser,
        singInUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;