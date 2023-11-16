import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from 'react';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { FIRESTORE_DB } from './firebase/firebaseConfig';

// Currently following this tutorial: https://medium.com/@covenantcodes/managing-global-state-in-react-native-with-expo-a-developers-guide-to-seamless-app-control-15df6ce9799e
// TODO: convert to https://stackoverflow.com/questions/68104551/react-firebase-authentication-and-usecontext

const UserContext = createContext();

const initialState = {
  userID: '',
  userData: {},
};

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER_ID':
      return {
        ...state,
        userID: action.payload,
      };
    case 'SET_USER_DATA':
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  // const [userID, setUserID] = useState('');
  // const [userData, setUserData] = useState({});

  // const getUserAccountData = async () => {
  //   const userQuery = query(
  //     collection(FIRESTORE_DB, 'users'),
  //     where('email', '==', user?.email),
  //   );

  //   getDocs(userQuery)
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         console.log(doc.id, ' => ', doc.data());
  //         setUserID(doc.id);
  //         setUserData(doc.data());
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       return { userID: userID, userData: userData };
  //     });
  // };

  value = {
    // userID,
    // userData,
    state,
    // getUserAccountData,
    dispatch,
  };

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
