import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const GoalSelectionScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedGoal, setSelectedGoal] = useState('Build Muscle');

  const goals = [
    { id: 'Lose Weight', title: 'Lose Weight', subtitle: 'Burn fat and get leaner', icon: 'fitness-center' },
    { id: 'Build Muscle', title: 'Build Muscle', subtitle: 'Gain strength and mass', icon: 'exercise' },
    { id: 'Stay Fit', title: 'Stay Fit', subtitle: 'Maintain health and energy', icon: 'monitor-heart' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background-dark">
      <View className="p-4 pt-6 flex-row items-center justify-between">
        <TouchableOpacity onPress={() => navigation.goBack()} className="size-10 items-center justify-center rounded-full bg-slate-800/30">
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-slate-500 text-sm font-semibold uppercase">Step 2 of 3</Text>
        <View className="size-10" />
      </View>

      <View className="px-6 space-y-2 mb-8 mt-4">
        <View className="flex-row justify-between items-end">
          <Text className="text-white text-2xl font-bold">Fitness Goals</Text>
          <Text className="text-primary font-bold">66%</Text>
        </View>
        <View className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
          <View className="h-full bg-primary w-2/3 rounded-full" />
        </View>
      </View>

      <ScrollView className="flex-1 px-6">
        <Text className="text-slate-400 text-base mb-6">Choose the primary objective for your journey.</Text>

        <View className="gap-4">
          {goals.map((goal) => (
            <TouchableOpacity 
              key={goal.id}
              onPress={() => setSelectedGoal(goal.id)}
              className={`flex-row items-center p-4 rounded-3xl border-2 transition-all ${
                selectedGoal === goal.id ? 'bg-primary/5 border-primary' : 'bg-slate-900/50 border-transparent'
              }`}
            >
              <View className="size-12 rounded-2xl bg-primary/20 items-center justify-center mr-4">
                <MaterialIcons name={goal.icon as any} size={24} color="#3c83f6" />
              </View>
              <View className="flex-1">
                <Text className="text-white font-bold text-lg">{goal.title}</Text>
                <Text className="text-slate-500 text-xs">{goal.subtitle}</Text>
              </View>
              <View className={`size-5 rounded-full border-2 items-center justify-center ${
                selectedGoal === goal.id ? 'border-primary' : 'border-slate-700'
              }`}>
                {selectedGoal === goal.id && <View className="size-2.5 bg-primary rounded-full" />}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View className="p-6 border-t border-slate-800">
        <TouchableOpacity 
          className="w-full bg-primary py-4 rounded-2xl items-center justify-center shadow-lg shadow-primary/20"
          onPress={() => navigation.navigate('FitnessLevel' as any)}
        >
          <Text className="text-white font-bold text-lg">Next Step</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GoalSelectionScreen;
