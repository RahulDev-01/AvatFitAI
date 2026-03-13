import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

const WorkoutScreen = () => {
  const plans = [
    { day: 'Mon', focus: 'Push (Chest/Shoulders)', completed: true },
    { day: 'Tue', focus: 'Pull (Back/Biceps)', completed: true },
    { day: 'Wed', focus: 'Active Recovery', completed: false, rest: true },
    { day: 'Thu', focus: 'Legs (Quads/Calves)', active: true },
    { day: 'Fri', focus: 'Push (Emphasis Triceps)', completed: false },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background-dark">
      <View className="p-6 pb-2">
        <Text className="text-white text-3xl font-bold">Workout Plan</Text>
        <Text className="text-slate-500 mt-1">Level: Intermediate • Goal: Hypertrophy</Text>
      </View>

      <ScrollView className="flex-1 px-6">
        <View className="bg-slate-900/50 rounded-3xl border border-slate-800 p-6 my-6">
           <View className="flex-row justify-between items-center mb-6">
             <View>
               <Text className="text-slate-500 text-xs font-bold uppercase tracking-widest">Current Streak</Text>
               <Text className="text-white text-2xl font-bold">14 Days</Text>
             </View>
             <View className="size-12 bg-accent-green/20 rounded-2xl items-center justify-center">
                <MaterialIcons name="local-fire-department" size={24} color="#10b981" />
             </View>
           </View>
           
           <View className="flex-row justify-between">
              {['M','T','W','T','F','S','S'].map((d, i) => (
                <View key={i} className="items-center gap-2">
                  <View className={`size-8 rounded-full items-center justify-center border ${
                    i < 2 ? 'bg-accent-green border-accent-green' : i === 3 ? 'border-primary' : 'border-slate-700'
                  }`}>
                    {i < 2 ? <MaterialIcons name="check" size={16} color="#0a0f16" /> : <Text className={`text-[10px] ${i === 3 ? 'text-primary' : 'text-slate-500'}`}>{d}</Text>}
                  </View>
                </View>
              ))}
           </View>
        </View>

        <Text className="text-white text-xl font-bold mb-4">Weekly Schedule</Text>
        <View className="gap-4 mb-10">
          {plans.map((p, i) => (
            <TouchableOpacity 
              key={i}
              className={`flex-row items-center p-4 rounded-3xl border ${
                p.active ? 'bg-primary/5 border-primary/40' : 'bg-slate-900/30 border-transparent'
              }`}
            >
              <View className="size-12 rounded-2xl bg-slate-800 items-center justify-center mr-4">
                 <Text className="text-slate-400 font-bold">{p.day}</Text>
              </View>
              <View className="flex-1">
                <Text className={`${p.completed ? 'text-slate-500 line-through' : 'text-white'} font-bold text-base`}>{p.focus}</Text>
                <Text className="text-slate-500 text-xs">{p.rest ? 'Rest Day' : 'Strength Training'}</Text>
              </View>
              {p.completed ? (
                <MaterialIcons name="check-circle" size={24} color="#10b981" />
              ) : p.active ? (
                <View className="bg-primary px-3 py-1 rounded-lg">
                  <Text className="text-white text-[10px] font-bold uppercase">Active</Text>
                </View>
              ) : (
                <MaterialIcons name="lock-outline" size={20} color="#334155" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WorkoutScreen;
