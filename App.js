import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Importing Screens
import DashboardScreen from './screens/DashboardScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import RegisterScreen from './screens/RegisterScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* Login Screen - No Tab Bar */}
        <Tab.Screen 
          name="Logout" 
          component={LoginScreen} 
          options={{
            tabBarStyle: { display: 'none' },  // Hides the tab bar on this screen
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="log-out" color={color} size={size} />
            ),
          }} 
        />
        
        {/* Register Screen - No Tab Bar */}
        <Tab.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{
            tabBarStyle: { display: 'none' },  // Hides the tab bar on this screen
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-add" color={color} size={size} />
            ),
          }} 
        />
        
        {/* Home Screen - Shows Tab Bar */}
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        
        {/* About Screen - Shows Tab Bar */}
        <Tab.Screen 
          name="About" 
          component={AboutScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle" color={color} size={size} />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
