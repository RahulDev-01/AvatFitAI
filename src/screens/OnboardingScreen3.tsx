import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const OnboardingScreen3 = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView className="flex-1 bg-background-dark">
      <View className="flex-row items-center p-4 pb-2 justify-between">
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          className="w-10 h-10 items-center justify-center rounded-full bg-slate-800/30"
        >
          <MaterialIcons name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-lg font-bold">FitMorph</Text>
        <View className="w-10" />
      </View>

      <View className="px-6 pt-4 pb-2 items-center">
        <Text className="text-white text-4xl font-extrabold leading-tight text-center">
          See Your Body{"\n"}
          <Text className="text-primary">Transform</Text>
        </Text>
        <Text className="text-slate-400 mt-3 text-base text-center">
          Visualize your future self with our AI morphing technology.
        </Text>
      </View>

      <View className="flex-row gap-4 p-6 justify-center">
        <View className="w-[45%] aspect-[3/4] rounded-2xl overflow-hidden bg-slate-800/50 border border-primary/20">
           <View className="flex-1 items-center justify-center">
             <MaterialIcons name="person-outline" size={80} color="#3c83f6 opacity-40" />
           </View>
           <View className="absolute bottom-3 left-3 px-2 py-1 bg-slate-900/60 rounded-lg">
             <Text className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Before</Text>
           </View>
        </View>

        <View className="w-[45%] aspect-[3/4] rounded-2xl overflow-hidden bg-slate-800/50 border border-primary/40 shadow-2xl shadow-primary/10">
           <View className="flex-1 items-center justify-center">
             <MaterialIcons name="accessibility-new" size={80} color="#3c83f6" />
           </View>
           <View className="absolute bottom-3 left-3 px-2 py-1 bg-primary rounded-lg">
             <Text className="text-[10px] font-bold text-white uppercase tracking-widest">Goal</Text>
           </View>
        </View>
      </View>

      <View className="px-6 py-4">
        <View className="rounded-2xl bg-slate-800/30 p-5 border border-white/10">
          <View className="flex-row items-center gap-3 mb-2">
            <MaterialIcons name="auto-fix-high" size={24} color="#3c83f6" />
            <Text className="text-white text-lg font-bold">AI Morph Tracking</Text>
          </View>
          <Text className="text-slate-400 text-sm leading-relaxed">
            Our advanced AI analyzes your current physique and generates a 90-day projection of your results.
          </Text>
        </View>
      </View>

      <View className="mt-auto p-6 gap-4">
        <TouchableOpacity 
          className="w-full bg-primary py-4 rounded-2xl shadow-lg shadow-primary/20 flex-row items-center justify-center gap-2"
          onPress={() => navigation.navigate('Auth')}
        >
          <Text className="text-white font-bold text-lg">Start Transformation</Text>
          <MaterialIcons name="trending-up" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen3;
