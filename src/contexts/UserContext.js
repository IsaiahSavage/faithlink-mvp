import React, { createContext, useContext, useReducer } from 'react';
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
    case 'SET_GROUP_ID':
      return {
        ...state,
        userData: { ...userData, groupID: action.payload },
      };
    case 'SET_LOGIN_STREAK':
      return {
        ...state,
        userData: {
          ...state.userData,
          loginStreak: action.payload,
        },
      };
    case 'SET_LAST_LOGIN_DATE':
      return {
        ...state,
        userData: {
          ...state.userData,
          lastLoginDate: action.payload,
        },
      };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
