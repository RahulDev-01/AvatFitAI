import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const FitnessLevelScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [level, setLevel] = useState('Intermediate');
  const [environment, setEnvironment] = useState('Home');

  const levels = [
    { id: 'Beginner', title: 'Beginner', desc: 'New to fitness or returning after 6+ months.', icon: 'child-care' },
    { id: 'Intermediate', title: 'Intermediate', desc: 'Active 2-3 times a week. Familiar with core movements.', icon: 'fitness-center', recommended: true },
    { id: 'Advanced', title: 'Advanced', desc: 'Training 5+ times a week. Seeking peak performance.', icon: 'bolt' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background-dark">
      <View className="p-4 pt-6 flex-row items-center justify-between">
        <TouchableOpacity onPress={() => navigation.goBack()} className="size-10 items-center justify-center rounded-full bg-slate-800/30">
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-lg font-bold">Profile Setup</Text>
        <View className="size-10" />
      </View>

      <View className="px-6 space-y-2 mb-6">
         <View className="flex-row justify-between items-center">
            <Text className="text-white text-base font-medium">Fitness Experience</Text>
            <Text className="text-primary text-sm font-bold">Step 3 of 3</Text>
         </View>
         <View className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
            <View className="h-full bg-primary w-full rounded-full" />
         </View>
      </View>

      <ScrollView className="flex-1 px-6">
        <Text className="text-white text-2xl font-bold mb-2">What's your fitness level?</Text>
        <Text className="text-slate-400 text-sm mb-6">This helps us calibrate your initial workout intensity.</Text>

        <View className="gap-4 mb-10">
          {levels.map((l) => (
            <TouchableOpacity 
              key={l.id}
              onPress={() => setLevel(l.id)}
              className={`p-4 rounded-3xl border-2 ${
                level === l.id ? 'bg-primary/5 border-primary' : 'bg-slate-900/50 border-transparent'
              }`}
            >
              {l.recommended && (
                <View className="absolute top-0 right-0 bg-primary px-3 py-1 rounded-bl-xl">
                  <Text className="text-white text-[10px] font-bold uppercase">Recommended</Text>
                </View>
              )}
              <View className="flex-row items-start mb-4">
                <View className="flex-1">
                  <View className="flex-row items-center gap-2 mb-1">
                    <MaterialIcons name={l.icon as any} size={20} color="#3c83f6" />
                    <Text className="text-white text-lg font-bold">{l.title}</Text>
                  </View>
                  <Text className="text-slate-500 text-sm leading-relaxed pr-4">{l.desc}</Text>
                </View>
                <View className="w-20 h-20 bg-slate-800 rounded-2xl items-center justify-center">
                   <MaterialIcons name="person" size={40} color="#3c83f6" className="opacity-20" />
                </View>
              </View>
              <View className={`w-full py-3 rounded-xl items-center justify-center ${
                level === l.id ? 'bg-primary' : 'bg-slate-800'
              }`}>
                <Text className="text-white font-bold">{level === l.id ? 'Current Choice' : 'Select'}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <Text className="text-white text-2xl font-bold mb-2">Where do you train?</Text>
        <Text className="text-slate-400 text-sm mb-6">We'll filter exercises based on available equipment.</Text>

        <View className="flex-row gap-4 mb-10">
          <TouchableOpacity 
            onPress={() => setEnvironment('Gym')}
            className={`flex-1 aspect-square rounded-3xl border-2 overflow-hidden items-center justify-center ${
              environment === 'Gym' ? 'border-primary bg-primary/10' : 'border-transparent bg-slate-900/50'
            }`}
          >
             <MaterialIcons name="apartment" size={32} color={environment === 'Gym' ? '#3c83f6' : '#64748b'} />
             <Text className={`font-bold mt-2 ${environment === 'Gym' ? 'text-white' : 'text-slate-500'}`}>Gym</Text>
             <Text className="text-slate-500 text-[10px] mt-1">Full Equipment</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={() => setEnvironment('Home')}
            className={`flex-1 aspect-square rounded-3xl border-2 overflow-hidden items-center justify-center ${
              environment === 'Home' ? 'border-primary bg-primary/10' : 'border-transparent bg-slate-900/50'
            }`}
          >
             <MaterialIcons name="home" size={32} color={environment === 'Home' ? '#3c83f6' : '#64748b'} />
             <Text className={`font-bold mt-2 ${environment === 'Home' ? 'text-white' : 'text-slate-500'}`}>Home</Text>
             <Text className="text-slate-500 text-[10px] mt-1">Limited Gear</Text>
             {environment === 'Home' && (
               <View className="absolute top-2 right-2 size-5 bg-white rounded-full items-center justify-center">
                 <MaterialIcons name="check" size={14} color="#3c83f6" />
               </View>
             )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          className="w-full bg-primary py-4 rounded-2xl items-center justify-center shadow-lg shadow-primary/20 mb-10"
          onPress={() => navigation.navigate('MainTabs')}
        >
          <Text className="text-white font-bold text-lg">Complete Setup</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FitnessLevelScreen;
