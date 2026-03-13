import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const DashboardScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-background-dark">
      <ScrollView className="flex-1 px-6">
        {/* Header */}
        <View className="flex-row justify-between items-center py-6">
          <View>
            <Text className="text-slate-500 text-sm font-medium">Welcome back,</Text>
            <Text className="text-white text-2xl font-bold">Alex Johnson</Text>
          </View>
          <TouchableOpacity className="size-12 rounded-2xl bg-slate-800/50 border border-slate-700 items-center justify-center relative">
            <Ionicons name="notifications-outline" size={24} color="white" />
            <View className="absolute top-3 right-3 size-2.5 bg-accent-green rounded-full border-2 border-background-dark" />
          </TouchableOpacity>
        </View>

        {/* AI Insight Card */}
        <View className="bg-primary/10 border border-primary/20 rounded-3xl p-6 mb-8 relative overflow-hidden">
          <View className="absolute -right-8 -top-8 size-32 bg-primary/20 rounded-full blur-3xl" />
          <View className="flex-row items-center gap-3 mb-4">
            <View className="size-10 bg-primary rounded-xl items-center justify-center">
              <MaterialIcons name="auto-awesome" size={20} color="white" />
            </View>
            <Text className="text-white text-lg font-bold">AI Health Insight</Text>
          </View>
          <Text className="text-slate-300 text-sm leading-relaxed mb-4">
            "Your recovery state is optimal today. Focus on heavy compound movements to maximize muscle growth potential."
          </Text>
          <TouchableOpacity className="flex-row items-center gap-2">
            <Text className="text-primary font-bold text-sm">View Analysis</Text>
            <MaterialIcons name="chevron-right" size={16} color="#3c83f6" />
          </TouchableOpacity>
        </View>

        {/* Training Stats */}
        <View className="flex-row gap-4 mb-8">
           <View className="flex-1 bg-slate-900/50 p-4 rounded-3xl border border-slate-800">
              <Text className="text-slate-500 text-xs font-bold uppercase mb-1">Weekly Volume</Text>
              <Text className="text-white text-xl font-bold">42,500 <Text className="text-slate-500 text-xs font-normal">kg</Text></Text>
           </View>
           <View className="flex-1 bg-slate-900/50 p-4 rounded-3xl border border-slate-800">
              <Text className="text-slate-500 text-xs font-bold uppercase mb-1">Consistency</Text>
              <Text className="text-accent-green text-xl font-bold">98%</Text>
           </View>
        </View>

        {/* Today's Workout */}
        <View className="flex-row justify-between items-end mb-4">
          <Text className="text-white text-xl font-bold">Today's Protocol</Text>
          <TouchableOpacity>
            <Text className="text-slate-500 text-sm font-medium">Edit Routine</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="bg-slate-800/40 rounded-3xl p-5 border border-white/5 mb-8">
           <View className="flex-row gap-4">
             <View className="size-20 bg-slate-700/50 rounded-2xl items-center justify-center overflow-hidden">
                <MaterialIcons name="fitness-center" size={40} color="#3c83f6" className="opacity-40" />
             </View>
             <View className="flex-1 justify-center">
               <Text className="text-white text-lg font-bold">Push Session A</Text>
               <Text className="text-slate-500 text-sm mb-3">Chest, Shoulders & Triceps</Text>
               <View className="flex-row gap-4">
                 <View className="flex-row items-center gap-1">
                   <MaterialIcons name="timer" size={14} color="#64748b" />
                   <Text className="text-slate-500 text-xs">65 min</Text>
                 </View>
                 <View className="flex-row items-center gap-1">
                   <MaterialIcons name="local-fire-department" size={14} color="#64748b" />
                   <Text className="text-slate-500 text-xs">480 kcal</Text>
                 </View>
               </View>
             </View>
           </View>
           <View className="mt-5 flex-row gap-2">
             <TouchableOpacity className="flex-1 bg-primary py-3 rounded-xl items-center shadow-lg shadow-primary/20">
                <Text className="text-white font-bold">Start Workout</Text>
             </TouchableOpacity>
           </View>
        </TouchableOpacity>

        {/* Recent Transformation */}
        <Text className="text-white text-xl font-bold mb-4">AI Transformation Log</Text>
        <View className="flex-row gap-3 mb-10 overflow-hidden">
           {[1,2,3].map(i => (
             <View key={i} className="size-32 bg-slate-800/30 rounded-2xl border border-white/5 items-center justify-center">
                <MaterialIcons name="photo-camera" size={24} color="#64748b" />
                <Text className="text-slate-500 text-[10px] mt-2 font-bold uppercase">Day {i*10}</Text>
             </View>
           ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;
