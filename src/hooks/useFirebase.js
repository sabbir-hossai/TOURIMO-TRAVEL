import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../componets/Login/Firebase/firebase.init";

// localStorage
const addToDatabase = (packageName, tourPackage) => {
    const exists = localStorage.getItem('tour_package');
    let tour_package = {};
    if (!exists) {
        tour_package[packageName] = tourPackage;
    } else {
        tour_package = JSON.parse(exists);
        if (tour_package[packageName]) {

        } else {
            tour_package[packageName] = tourPackage;
        }
    }
    localStorage.setItem('tour_package', JSON.stringify(packageName));
}
// localStorage end


initializeAuthentication();
const useFirebase = () => {

    const [users, setUsers] = useState({});
    const [error, setError] = useState('');
    const [isLoding, setIsLoging] = useState(true);

    const auth = getAuth();

    // email registation end

    const signInWithGoogle = () => {
        setIsLoging(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)


    }

    const logOut = () => {
        localStorage.removeItem('user')
        setIsLoging(true)
        signOut(auth)
            .then(() => {
                setUsers({})
            }).catch(error => {
                setError(error.messeage)
            })
            .finally(() => {
                setIsLoging(false)
            })
    }
    const unsubscripte = useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user)
            } else {
                setUsers({})
            }
            setIsLoging(false)
        })

    }, []);
    return {
        addToDatabase,
        users,
        error,
        setError,
        isLoding,
        signInWithGoogle,
        logOut,
        unsubscripte,
        setIsLoging,
    }
}

export default useFirebase;