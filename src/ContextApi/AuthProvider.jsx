
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




    // create with Email/Password

    const createWithEmailPassword = (email, password) => {

        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // console.log(currentUser)
            setLoading(false);
        });
        return () => {
            unsubscribe()
        }

    }, []);

    const authInfo = {
        user,
        loading,
        createWithEmailPassword,
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>

    );
};

export default AuthProvider;