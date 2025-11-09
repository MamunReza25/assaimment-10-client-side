
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




    // create with Email/Password

    const createWithEmailPassword = (email, password) => {

        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    };

    // update profile
    const updateUserProfile = (name, photo) => {
        setLodding(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    };

    // signIn user
    const signIn = (email, password) => {
        // setLodding(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

    // SignIn with google
    const gooleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        return signInWithPopup(auth, gooleProvider);
    };

    // LogOut 
    const Logout = () => {

        return signOut(auth)
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
        updateUserProfile,
        signIn,
        signInWithGoogle,
        Logout,
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>

    );
};

export default AuthProvider;