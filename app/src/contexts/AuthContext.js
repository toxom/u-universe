import React, { useContext, useState, useEffect } from "react";
import firebaseApp from "../firebase";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { GetAdminUid, GetUserData, GetContractsList } from "../components/Database/Functions";
import { getDatabase, ref, update } from "firebase/database";//TODO: put updateUserData to Functions file
const db = getDatabase();

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authToken, setAuthToken] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  const [userData, setUserData] = useState();

  const [contracts, setContracts] = useState([]);
  const [contractsLastFetchTime, setContractsLastFetchTime] = useState(0);

  const auth = getAuth(firebaseApp);

  var googleProvider = new GoogleAuthProvider();
  googleProvider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  function signinGoogle() {
    return signInWithPopup(auth, googleProvider);
  }

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function getUserData() {
    return userData;
  }
  function updateUserData(newData) {
    setUserData(newData);

    const updates = {};
    updates[`users/${currentUser.uid}`] = newData;
    return update(ref(db), updates);
  }

  function rerfreshContracts(force = false) {
    const now = new Date();
    const diffTime = ( now- contractsLastFetchTime ); //in seconds

    if (force || diffTime > 20 * 1000){
      return GetContractsList().then((items) => {
        setContracts(items.reverse());
        setContractsLastFetchTime(new Date());
        console.log("getting new contracts data from DB", diffTime);
        return true;
      });
    } else {
      console.log("Contracts are up to date. Not fetching.", diffTime);
      return new Promise((resolve, reject) => (resolve(false)));
    }

  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setLoading(true);
      setCurrentUser(user);

      if (currentUser && 'uid' in currentUser){//TODO: chek it
        GetUserData(currentUser.uid).then((data) => {
          setUserData(data);
        });
      }
      setLoading(false);
    });

    auth.onIdTokenChanged(function (user) {
      if (user) {
        auth.currentUser
          .getIdToken(true)
          .then(function (idToken) {
            setAuthToken(idToken);
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });

    GetAdminUid().then((uid) => {
      setIsAdmin(currentUser.uid == uid);
    });

    rerfreshContracts();

    // return unsubscribe;
  }, [currentUser]);

  const value = {
    auth,
    authToken,
    currentUser,
    login,
    signinGoogle,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    isAdmin,
    getUserData,
    updateUserData,

    contracts,
    rerfreshContracts,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
