import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { useAuthContext } from '../context/useAuthContext'; // Updated import path

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { setAuthUser } = useAuthContext(); // AuthContext to manage user session

  const login = async ({ email, password }) => {
    const isValid = handleInputError(email, password);
    if (!isValid) return;

    setLoading(true);

    try {
      const response = await fetch('https://wristwonders-ewmk.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Toast.show({
          type: 'success',
          text1: 'Login Successful',
          text2: 'Welcome back!',
        });

        // Save user info to AsyncStorage
        await AsyncStorage.setItem('user', JSON.stringify(data));
        
        setAuthUser(data); // Update user in AuthContext

        // Navigate to the home screen
        navigation.navigate('(tabs)'); // Replace '(tabs)' with your route name
      } else {
        Toast.show({
          type: 'error',
          text1: 'Login Failed',
          text2: data.message || 'Invalid credentials!',
        });
        alert(data.error)
      }
    } catch (error) {
      alert("ERROR")
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error.message || 'Something went wrong!',
      });
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

// Helper function to validate input
function handleInputError(email, password) {
  if (!email || !password) {
    Toast.show({
      type: 'error',
      text1: 'Input Error',
      text2: 'All fields are required!',
    });
    return false;
  }
  return true;
}
