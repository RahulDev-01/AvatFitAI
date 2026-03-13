import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const BodyStatsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(72);

  return (
    <SafeAreaView className="flex-1 bg-background-dark">
      <View className="p-4 pt-6 flex-row items-center justify-between">
        <TouchableOpacity onPress={() => navigation.goBack()} className="size-10 items-center justify-center rounded-full bg-slate-800/30">
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="text-slate-500 text-sm font-semibold uppercase">Step 1 of 3</Text>
        <View className="size-10" />
      </View>

      <View className="px-6 space-y-2 mb-8 mt-4">
        <View className="flex-row justify-between items-end">
          <Text className="text-white text-2xl font-bold">Physical Details</Text>
          <Text className="text-primary font-bold">33%</Text>
        </View>
        <View className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
          <View className="h-full bg-primary w-1/3 rounded-full" />
        </View>
      </View>

      <ScrollView className="flex-1 px-6 space-y-8">
        <Text className="text-white text-xl font-semibold mb-6">What's your current stats?</Text>

        {/* Height Selector Placeholder */}
        <View className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800 mb-6">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-slate-500 font-medium">Height</Text>
            <View className="flex-row items-baseline">
              <Text className="text-2xl font-bold text-primary">{height}</Text>
              <Text className="text-sm text-slate-500 ml-1">cm</Text>
            </View>
          </View>
          <View className="h-1.5 w-full bg-slate-800 rounded-full">
            <View className="h-full bg-primary w-[70%] rounded-full relative">
               <View className="absolute right-0 -top-2 size-6 bg-white border-4 border-primary rounded-full shadow-lg" />
            </View>
          </View>
        </View>

        {/* Weight Selector Placeholder */}
        <View className="bg-slate-900/50 p-6 rounded-3xl border border-slate-800">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-slate-500 font-medium">Weight</Text>
            <View className="flex-row items-baseline">
              <Text className="text-2xl font-bold text-primary">{weight}</Text>
              <Text className="text-sm text-slate-500 ml-1">kg</Text>
            </View>
          </View>
          <View className="h-1.5 w-full bg-slate-800 rounded-full">
            <View className="h-full bg-primary w-[50%] rounded-full relative">
               <View className="absolute right-0 -top-2 size-6 bg-white border-4 border-primary rounded-full shadow-lg" />
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="p-6 border-t border-slate-800">
        <TouchableOpacity 
          className="w-full bg-primary py-4 rounded-2xl items-center justify-center shadow-lg shadow-primary/20"
          onPress={() => navigation.navigate('GoalSelection' as any)}
        >
          <Text className="text-white font-bold text-lg">Next Step</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BodyStatsScreen;
