import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  // Load user from AsyncStorage on app launch
  useEffect(() => {
    const loadUserFromStorage = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setAuthUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Failed to load user from storage:', error);
      }
    };
    loadUserFromStorage();
  }, []);

  // Clear user from storage
  const clearAuthUser = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setAuthUser(null);
    } catch (error) {
      console.error('Failed to clear user from storage:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, clearAuthUser, isAuthenticated: !!authUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
