import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { useEffect, useState } from 'react';
import initAuthenticaion from '../Firebase/Firebase.init'
// initialize authentication
initAuthenticaion()

//useFirebase
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [error, setError] = useState(0);

    const googleSignIn = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => setUser(result.user))
            .catch(err => setError(err.code));
        setIsLoading(false)
    }
    const createUser = (email, password) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => setUser(result.user))
            .catch(err => setError(err.code))
        setIsLoading(false);
    }
    const emailSignIn = (email, password) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => setUser(result.user))
            .catch(err => setError(err.code))
        setIsLoading(false);
    }
    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
            .then()
            .catch(error => console.log(error.message))
    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                console.log("Notification")
                setUser({});
            })
            .catch(err => setError(err.code))
        setIsLoading(false)
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false);
        })
    }, [auth])
    return {
        user, isLoading, error, googleSignIn, createUser, emailSignIn, logOut, updateName
    }
};

export default useFirebase;