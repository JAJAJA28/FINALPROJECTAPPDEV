import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Image, TouchableOpacity, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Import Firebase auth

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState(''); // Changed from username to email
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields.');
      return;
    }

    try {
      // Sign in using Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Login Successful!');
      navigation.navigate('Home'); // Navigate to the Home screen
    } catch (error) {
      // Handle errors (e.g., invalid credentials)
      Alert.alert('Login Failed!', error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust behavior for iOS and Android
    >
      <Image
          source={require('../assets/RR.gif')}
          style={{ height: 110, width: 100, position: 'absolute', top: 75, right: 170, zIndex: 1 }}
        />
      <View style={styles.container}>
        <View style={styles.rectangleBlue3} />
        <View style={styles.rectangleRed2} />
        <View style={styles.rectangleBlue} />
        <View style={styles.rectangleOrange} />
        <View style={styles.rectangleRed} />
        <View style={styles.rectangleBlue1} />
        <View style={styles.rectangleOrange1} />
        <View style={styles.rectangleRed1} />


        <Text style={{ fontSize: 55, fontWeight: 'bold', textAlign: 'center', zIndex: 2, color: '#AE8514', position: 'absolute', top: 120, left: 180 }}>
          CoDE
        </Text>
        <Text style={{ fontSize: 50, fontWeight: 'bold', zIndex: 2, color: '#093E40', position: 'absolute', top: 160, left: 180, display: 'flex', textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
          Circuit.co
        </Text>
        <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center', zIndex: 1, color: 'black', position: 'absolute', top: 430, left: 130 }}>
        Empowering Innovation, One Circuit at a Time!
        </Text>

        <Image
          source={require('../assets/IMG4.png')}
          style={{ height: 160, width: 170, position: 'absolute', top: 245, left: 190, zIndex: 1 }}
        />
        
        

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.showPasswordText}>{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.registerText}>
          Don't have an account?{' '}
          <Text style={styles.linkText} onPress={() => navigation.navigate('Register')}>
            Register
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 90,
    backgroundColor: 'white',
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    position: 'relative', // o 'relative'
    top: 120,
    zIndex: 1,  // Optional, but might help with layer stacking
  },
  showPasswordText: {
    color: 'blue',
    fontWeight: 'bold',
    top: 120,
    alignSelf: 'flex-start',
    left: '87%',
  },
  button: {
    left: 125,
    width: 135,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    top: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  registerText: {
    top: 190,
    textAlign: 'center',
    fontSize: 15,
  },
  linkText: {
    fontSize: 15,
    color: 'blue',
    fontWeight: 'bold',
  },
  rectangleBlue: {
    width: 115,
    height: 107,
    color: '#2E8B57', // Darker emerald blue shade
    backgroundColor: 'rgba(9, 62, 64, 0.8)', // Dark teal with opacity
    position: 'absolute',
    top: 0,
    right: -5,
    borderRadius: 20,
    zIndex: 1,
  },
  rectangleOrange: {
    width: 65,
    height: 95,
    backgroundColor: 'rgba(255, 165, 0, 0.7)',
    position: 'absolute',
    top: 70,
    right: 0,
    borderRadius: 19,
    zIndex: 1,
  },
  rectangleRed: {
    width: 110,
    height: 65,
    backgroundColor: '#5A93B1',
    backgroundColor: 'rgba(90, 147, 177, 0.7)', // Blue with opacity
    position: 'absolute',
    top: 0,
    left: 390,
    borderRadius: 19,
    zIndex: 1,
  },
  rectangleBlue1: {
    width: 115,
    height: 107,
    color: '#2E8B57', // Darker emerald blue shade
    backgroundColor: 'rgba(9, 62, 64, 0.8)', // Dark teal with opacity
    position: 'absolute',
    top: 970,
    right: 440,
    borderRadius: 20,
    zIndex: 1,
  },
  rectangleOrange1: {
    width: 65,
    height: 95,
    backgroundColor: 'rgba(255, 165, 0, 0.7)',
    position: 'absolute',
    top: 905,
    right: 490,
    borderRadius: 19,
    zIndex: 1,
  },
  rectangleRed1: {
    width: 110,
    height: 65,
    backgroundColor: '#5A93B1',
    backgroundColor: 'rgba(90, 147, 177, 0.7)', // Blue with opacity
    position: 'absolute',
    top: 1010,
    right: 390,
    borderRadius: 19,
    zIndex: 1,
  },
  rectangleBlue3: {
    width: 10,
    height: '38%',
    backgroundColor: 'gray',
    position: 'absolute',
    top: 480,
    borderRadius: 5,
    zIndex: 1,
    right: 543,
  },
  rectangleRed2: {
    width: 10,
    height: '60%',
    backgroundColor: 'gray',
    position: 'absolute',
    top: 167,
    borderRadius: 5,
    zIndex: 1,
    left: 543,
  },
});

export default LoginScreen;
