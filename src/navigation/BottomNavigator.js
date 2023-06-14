import { Image, Platform, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Chat from '../screens/Chat/Chat';
import Profile from '../screens/Profile/Profile';
import { Feather, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Centre"
      screenOptions={{ headerShown: false, tabBarStyle: { height: Platform.OS == 'ios' ? 80 : 60, paddingTop: 10 } }}
    >
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: "Chats",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="chatbubble-outline" size={24} color={focused ? '#F9AE2A': '#ccc'} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, { color: focused ? '#F9AE2A': '#ccc' }]}>Center</Text>
          )
        }}
      />
      <Tab.Screen
        name="Centre"
        component={Home}
        options={{
          tabBarLabel: "Centre",
          tabBarIcon: ({ focused }) => (
            <Feather name="grid" size={24} color={focused ? '#F9AE2A': '#ccc'} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, { color: focused ? '#F9AE2A': '#ccc' }]}>Center</Text>
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4rsSzLimlQyniEtUV4-1raljzFhS45QBeAw&usqp=CAU",
              }}
              style={{
                width: 25,
                height: 25,
                borderRadius: 25,
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.label, { color: focused ? '#F9AE2A': '#ccc' }]}>Center</Text>
          ),
          tabBarLabelStyle: { marginBottom: -3 }
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 12
  }
});

export default BottomNavigator