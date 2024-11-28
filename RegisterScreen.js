import React, { useEffect, useRef } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Animated,
} from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const fadeIn1 = useRef(new Animated.Value(0)).current;
  const fadeIn2 = useRef(new Animated.Value(0)).current;
  const fadeIn3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loopAnimation = () => {
      // Sequence for fade-in and fade-out
      Animated.sequence([
        Animated.timing(fadeIn1, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeIn2, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeIn3, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeIn1, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeIn2, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeIn3, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => loopAnimation()); // Restart the animation
    };

    loopAnimation();
  }, []);

  return (
    <View style={styles.container}>
      {/* Existing Design */}
      <View style={styles.rectangleBlack1} />
      <View style={styles.rectangleBlack2} />
      <View style={styles.rectangleBlack3} />
      <View style={styles.rectangleBlack4} />
      <View style={styles.rectangleBlack5} />
      <View style={styles.rectangleBlack6} />
      <Image
        source={require('../assets/REG2.gif')}
        style={{ height: 250, width: 300, position: 'absolute', bottom: 820, left: 0, zIndex: 1,}}
      />

      {/* Animated Text */}
      <Animated.Text
        style={{
          ...styles.animatedText,
          color: '#AE8514',
          top: 70,
          left: 320,
          fontSize: 55,
          opacity: fadeIn1,
        }}
      >
        Code
      </Animated.Text>

      <Animated.Text
        style={{
          ...styles.animatedText,
          color: '#5A93B1',
          top: 110,
          left: 320,
          fontSize: 50,
          opacity: fadeIn2,
        }}
      >
        Circuit.co
      </Animated.Text>

      <Animated.Text
        style={{
          ...styles.animatedText,
          color: 'white',
          top: 160,
          left: 400,
          fontSize: 12,
          opacity: fadeIn3,
        }}
      >
        Powered by VSduino.
      </Animated.Text>

      {/* Existing Design and Other UI */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', zIndex: 1, left: 15, bottom: 20 }}>
        REGISTER NOW TO GET THE FULL ACCESS!
      </Text>

      <Text style={styles.registerText}>
        Already have an account?{' '}
        <Text style={styles.linkText} onPress={() => navigation.navigate('Logout')}>
          Login
        </Text>
      </Text>

      <View
        style={{
          width: 560,
          height: 60,
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          top: 265,
          left: 0,
        }}
      />

      <Text style={[styles.title, { color: 'rgba(9, 62, 64, 10)', right: 70 }]}>
        REGISTRATION FORM
      </Text>

      <Text style={styles.label}>Name</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Username</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} secureTextEntry />

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} keyboardType="email-address" />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 100,
    backgroundColor: 'e0e0e0',
  },
  animatedText: {
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 2,
    position: 'absolute',
  },
  registerText: {
    top: 600,
    textAlign: 'center',
    fontSize: 15,
  },
  linkText: {
    fontSize: 15,
    color: 'blue',
    fontWeight: 'bold',
  },
  rectangleBlack1: {
    width: '200%',
    height: 8,
    backgroundColor: 'rgba(90, 147, 177, 0.7)',
    position: 'absolute',
    top: 0,
    zIndex: 2,
    
  },
  rectangleBlack2: {
    width: '70%',
    height: 225,
    backgroundColor: 'rgba(9, 62, 64, 0.9)',
    position: 'absolute',
    top: 17,
    left: 300,
    zIndex: 2,
    borderRadius: 10,
    borderColor: 'rgba(255, 165, 0, 0.8)',
    borderWidth: 2, // Sets the border thickness
  },
  rectangleBlack3: {
    width: '200%',
    height: 8,
    backgroundColor: 'rgba(255, 165, 0, 0.7)',
    position: 'absolute',
    top: 250,
    zIndex: 2,
    
  },
  rectangleBlack4: {
    width: '85%',
    height: 300,
    backgroundColor: 'rgba(9, 62, 64, 0.8)',
    position: 'absolute',
    top: 850,
    right: 370,
    zIndex: 2,
    borderRadius: 200,
    borderColor: 'black', // Sets the border color to black
    borderWidth: 1, // Sets the border thickness
  },
  rectangleBlack5: {
    width: '55%',
    height: 190,
    backgroundColor: 'rgba(90, 147, 177, 0.8)',
    position: 'absolute',
    top: 750,
    right: 450,
    zIndex: 1,
    borderRadius: 200,
    borderColor: 'black', // Sets the border color to black
    borderWidth: 1, // Sets the border thickness
  },
  rectangleBlack6: {
    width: '55%',
    height: 190,
    backgroundColor: 'rgba(255, 165, 0, 0.8)',
    position: 'absolute',
    top: 950,
    right: 280,
    zIndex: 2,
    borderRadius: 200,
    borderColor: 'black', // Sets the border color to black
    borderWidth: 1, // Sets the border thickness
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    top: 100,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    top: 100,
  },
  input: {
    height: 50,
    borderColor: 'rgba(9, 62, 64, 0.9)',
    borderWidth: 2, // Sets the border thickness
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    top: 100,
  },
  button: {
    left: 120,
    width: 120,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    top: 120,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default RegisterScreen;
