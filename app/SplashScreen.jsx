import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data or initializing the app)
    const timer = setTimeout(() => {
      onFinish(); // Notify that splash is done
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to My App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50', // Background color
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff', // Text color
  },
});

export default SplashScreen;
