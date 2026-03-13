import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const { width } = Dimensions.get('window');

const OnboardingScreen1 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView className="flex-1 bg-background-dark">
      <View className="items-end p-6 pb-2">
        <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
          <Text className="text-slate-400 text-sm font-semibold">Skip</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 items-center justify-center px-8 relative">
        <View className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
        <View className="w-full aspect-square rounded-3xl bg-slate-800/50 border border-slate-700/30 shadow-2xl items-center justify-center p-6">
          <MaterialIcons name="auto-awesome" size={100} color="#3c83f6" />
          <View className="mt-8 gap-3 w-full">
            <View className="h-4 w-2/3 bg-primary/20 rounded-full" />
            <View className="h-2 w-full bg-slate-700/50 rounded-full" />
            <View className="h-2 w-3/4 bg-slate-700/50 rounded-full" />
          </View>
        </View>
        
        <View className="absolute -bottom-4 -right-2 bg-primary p-4 rounded-2xl shadow-lg border-4 border-background-dark">
          <MaterialIcons name="bolt" size={24} color="white" />
        </View>
      </View>

      <View className="px-8 pb-12 pt-8 items-center">
        <Text className="text-white text-3xl font-bold leading-tight mb-4 text-center">
          Personalized Workouts
        </Text>
        <Text className="text-slate-400 text-base font-normal leading-relaxed text-center mb-10">
          Tailored routines specifically for your body type, goals, and equipment.
        </Text>

        <View className="flex-row items-center justify-center gap-3 mb-10">
          <View className="h-1.5 w-8 rounded-full bg-primary" />
          <View className="h-1.5 w-1.5 rounded-full bg-slate-700" />
          <View className="h-1.5 w-1.5 rounded-full bg-slate-700" />
        </View>

        <TouchableOpacity 
          className="w-full bg-primary py-4 rounded-2xl shadow-lg shadow-primary/20 flex-row items-center justify-center gap-2"
          onPress={() => navigation.navigate('Onboarding2')}
        >
          <Text className="text-white font-bold text-lg">Continue</Text>
          <MaterialIcons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen1;
