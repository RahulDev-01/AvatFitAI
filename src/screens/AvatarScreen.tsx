import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

const AvatarScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-background-dark">
      <View className="p-6">
        <Text className="text-white text-3xl font-bold">Body Insight</Text>
        <Text className="text-slate-500 mt-1">AI-Powered Physique Analysis</Text>
      </View>

      <View className="flex-1 items-center justify-center mb-6">
          <View className="w-[80%] aspect-[3/4] bg-slate-900/50 rounded-[40px] border border-primary/30 items-center justify-center relative">
             <View className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
             <MaterialIcons name="person" size={180} color="#3c83f6" className="opacity-20" />
             
             {/* Data Points */}
             <View className="absolute top-10 left-10 size-16 bg-slate-800/80 rounded-2xl border border-white/10 items-center justify-center">
                <Text className="text-primary text-xs font-bold">BFP</Text>
                <Text className="text-white font-bold">14.2%</Text>
             </View>

             <View className="absolute top-32 right-8 size-16 bg-slate-800/80 rounded-2xl border border-white/10 items-center justify-center">
                <Text className="text-primary text-xs font-bold">LBM</Text>
                <Text className="text-white font-bold">68kg</Text>
             </View>

             <View className="absolute bottom-20 left-12 size-16 bg-slate-800/80 rounded-2xl border border-white/10 items-center justify-center">
                <Text className="text-primary text-xs font-bold">Waist</Text>
                <Text className="text-white font-bold">31"</Text>
             </View>

             <TouchableOpacity className="absolute -bottom-6 self-center bg-primary px-8 py-3 rounded-2xl shadow-xl shadow-primary/20 flex-row items-center gap-2">
                <MaterialIcons name="camera" size={20} color="white" />
                <Text className="text-white font-bold">Update Stats</Text>
             </TouchableOpacity>
          </View>
      </View>

      <ScrollView className="flex-1 px-6 mt-4">
        <Text className="text-white text-xl font-bold mb-4">Projected Transformation</Text>
        <View className="bg-slate-900/50 rounded-3xl border border-slate-800 p-5 mb-10">
           <View className="flex-row justify-between items-center mb-4">
              <View className="items-center p-3 rounded-2xl bg-slate-800 flex-1">
                 <Text className="text-slate-500 text-[10px] font-bold mb-1">CURRENT</Text>
                 <Text className="text-white font-bold text-lg">72.5 kg</Text>
              </View>
              <MaterialIcons name="trending-flat" size={24} color="#3c83f6" className="mx-2" />
              <View className="items-center p-3 rounded-2xl bg-primary/10 border border-primary/20 flex-1">
                 <Text className="text-primary text-[10px] font-bold mb-1">GOAL (90D)</Text>
                 <Text className="text-white font-bold text-lg">78.0 kg</Text>
              </View>
           </View>
           <Text className="text-slate-400 text-xs leading-relaxed">
             AI projects a 5.5kg increase in lean mass based on your current caloric surplus and training intensity.
           </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AvatarScreen;
