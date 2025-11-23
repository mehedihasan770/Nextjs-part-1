"use client";
import { auth } from '@/firebase/firebase.config';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';

const googleProvider = new GoogleAuthProvider()

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const signUnEP = (email, pass) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, pass)
    }

    const signInEP = (email, pass) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const googleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false)
        });
        return () => unsubscribe();
    }, []);

    const SignOut = () => {
      return signOut(auth)
    }

    const userInfo = {
        user,
        loading,
        signUnEP,
        signInEP,
        googleSignin,
        SignOut,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};