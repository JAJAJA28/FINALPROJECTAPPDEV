import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Image, Text, TouchableOpacity } from 'react-native';

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      {/* Background Rectangles */}
      <View style={styles.rectangleTiltBlue}/>
      <View style={styles.rectangleTiltYellow}/>
      <View style={styles.rectangleRed} />
      <View style={styles.rectangleRed2} />
      <View style={styles.rectangleRed3} />
      <View style={styles.rectangleBlack1} />
      <View style={styles.rectangleGray}/>

      {/* GIF Image */}
      <Image 
        source={require('../assets/OT4.gif')} 
        style={{ height: 249, width: 324, position: 'absolute', bottom: 766, left: 1, zIndex: 1,}} 
      />
       <Image 
        source={require('../assets/TEMP.png')} 
        style={{ height: 60, width: 60, position: 'absolute', top: 440, left: 10, zIndex: 1 }} 
      />
       <Image 
        source={require('../assets/DENC.png')} 
        style={{ height: 60, width: 60, position: 'absolute', top: 640, left: 20, zIndex: 1 }} 
      />
       <Image 
        source={require('../assets/HUMID.png')} 
        style={{ height: 60, width: 60, position: 'absolute', top: 840, left: 20, zIndex: 1 }} 
      />
       <Image 
        source={require('../assets/IMG13.png')} 
        style={{ height: 100, width: 80, position: 'absolute', top: 5, right: 7, zIndex: 1,transform: [{ rotate: '-45deg' }], }} 
      />

      {/* Category Titles */}
      <Text style={styles.categoryHeader}>CATEGORIES to TEST!</Text>
      <Text style={styles.categoryTitle}>TEMPERATURE</Text>
      <Text style={styles.storyTitle}>HUMIDITY</Text>
      <Text style={styles.legendTitle}>DENCITY</Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          zIndex: 2,
          color: '#AE8514',
          position: 'absolute',
          top: 10,
          left: 10,
        }}
      >
        Code
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          zIndex: 2,
          color: '#5A93B1',
          position: 'absolute',
          top: 26,
          left: 10,
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Circuit.co
      </Text>
      <Text
        style={{
          fontSize: 10,
          fontWeight: 'bold',
          zIndex: 2,
          color: 'white',
          position: 'absolute',
          top: 46,
          left: 12,
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Powered by VSduino.
      </Text>
      <Text
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          textAlign: 'center',
          zIndex: 2,
          color: 'black',
          position: 'absolute',
          top: -1,
          left: 327,
        }}
      >
        Did
      </Text>
      <Text
        style={{
          fontSize: 45,
          fontWeight: 'bold',
          zIndex: 2,
          color: 'white',
          position: 'absolute',
          bottom: 946,
          left: 328,
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        You
      </Text>
      <Text
        style={{
          fontSize: 55,
          fontWeight: 'bold',
          zIndex: 2,
          color: 'black',
          position: 'absolute',
          bottom: 908,
          left: 328,
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Know?
      </Text>
      <Text style={styles.textStyle}>Code Circuit.co</Text>
<Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', zIndex: 2,left: 160,top: 100, }}>  " That Code Circuit.co is a </Text>
<Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', zIndex: 2,left: 160,top: 100, }}>  combination of Arduino and VS Code </Text>
<Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', zIndex: 2,left: 160,top: 100,}}> features to streamline project development </Text>
<Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', zIndex: 2,left: 160,top: 100,}}> with tools like debugging</Text>
<Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', zIndex: 2,left: 160,top: 100,}}> and code completion ".</Text>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#5A93B1',
    backgroundColor: 'rgba(90, 147, 177, 0.7)', // Blue with opacity
  },

  rectangleTiltBlue: {
    width: '110%',
    height: 5,
    backgroundColor: '#2E8B57',
    backgroundColor: 'rgba(9, 62, 64, 0.7)', // Dark teal with opacity
    position: 'absolute',
    top: 258,
    zIndex: 1,
  },
  rectangleTiltYellow: {
    width: '110%',
    height: 5,
    backgroundColor: 'rgba(9, 62, 64, 0.8)', // Dark teal with opacity
    position: 'absolute',
    top: 1,
    zIndex: 1,
  },
  rectangleGray: {
    width: '110%',
    height: 45,
    backgroundColor: 'rgba(128, 128, 128, 0.9)', // Gray with opacity
    position: 'absolute',
    top: 268,
    zIndex: 1,
    borderColor: 'black', // Sets the border color to black
    borderWidth: 1, // Sets the border thickness
  },
  rectangleRed: {
    width: '80%',
    height: 100,
    backgroundColor: 'rgba(255, 0, 0, 0.6)', // Red na may 70% opacity
    position: 'absolute',
    top: 420,
    zIndex: 1,
    borderRadius: 20,
    right: 130,
    borderColor: 'black', // Sets the border color to black
    borderWidth: 2, // Sets the border thickness
  },
  rectangleRed2: {
    width: '80%',
    height: 100,
    color: '#2E8B57', // Darker emerald blue shade
    backgroundColor: 'rgba(9, 62, 64, 0.8)', // Dark teal with opacity
    position: 'absolute',
    bottom: 305,
    zIndex: 1,
    borderRadius: 20,
    right: 130,
    borderColor: 'black', // Sets the border color to black
    borderWidth: 2, // Sets the border thickness
  },
  rectangleRed3: {
    width: '80%',
    height: 100,
    backgroundColor: 'rgba(255, 165, 0, 0.7)',
    position: 'absolute',
    bottom: 100,
    zIndex: 1,
    borderRadius: 20,
    right: 130,
    borderColor: 'black', // Sets the border color to black
    borderWidth: 2, // Sets the border thickness
  },
  rectangleBlack1: {
    width: '44%',
    height: 249,
    backgroundColor: 'rgba(255, 165, 0, 0.7)',
    position: 'absolute',
    top: 8,
    left: 326,
    zIndex: 1,
    
  },

  categoryTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    position: 'absolute',
    top: 385,
    zIndex: 3,
    right: 380,
  },
  categoryHeader: {
    fontSize: 30,
    fontWeight: 'bold',
    position: 'absolute',
    top: 275,
    zIndex: 3,
    
  },
  storyTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 200,
    zIndex: 3,
    right: 430,
  },
  legendTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    position: 'absolute',
    top: 590,
    zIndex: 3,
    right: 440,
  },
});
