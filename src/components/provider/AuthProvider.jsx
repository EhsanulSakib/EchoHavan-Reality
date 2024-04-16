import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [properties, setProperties] = useState([])
    const GoogleProvider = new GoogleAuthProvider();
    const GitHubProvider = new GithubAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleGoogleSignIn = () => {
        setLoading(true)
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                setUser(result.user)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }

    const handleGitHubSignIn = () => {
        setLoading(true)
        signInWithPopup(auth, GitHubProvider)
            .then(result => {
                setUser(result.user)
                setLoading(false)
            })
            .catch(error => console.log(error))

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("user in the auth state changed", currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setProperties(data))
    }, [])

    const authInfo = { user, setUser, createUser, logOut, signIn, loading, properties, handleGoogleSignIn, handleGitHubSignIn }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;