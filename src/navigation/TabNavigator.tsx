import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';

import DashboardScreen from '../screens/DashboardScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import AvatarScreen from '../screens/AvatarScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0a1017',
          borderTopWidth: 1,
          borderTopColor: '#1e293b',
          height: 85,
          paddingBottom: 25,
          paddingTop: 10,
        },
        tabBarActiveTintColor: '#3c83f6',
        tabBarInactiveTintColor: '#64748b',
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="grid-view" size={24} color={color} />,
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen 
        name="Workouts" 
        component={WorkoutScreen} 
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="fitness-center" size={24} color={color} />,
          tabBarLabel: 'Plan',
        }}
      />
      <Tab.Screen 
        name="Add" 
        component={View} 
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity 
              {...props}
              className="relative -top-8 size-16 bg-accent-green rounded-full items-center justify-center border-[6px] border-background-dark shadow-2xl"
            >
              <MaterialIcons name="add" size={36} color="#0a0f16" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen 
        name="Stats" 
        component={AvatarScreen} 
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="insights" size={24} color={color} />,
          tabBarLabel: 'Stats',
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="person" size={24} color={color} />,
          tabBarLabel: 'You',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
