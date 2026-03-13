import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const sections = [
    { 
      title: 'Health Data', 
      items: [
        { label: 'Body Metrics', icon: 'accessibility', color: '#3c83f6' },
        { label: 'Nutrition Logs', icon: 'restaurant', color: '#10b981' },
      ]
    },
    { 
      title: 'App Settings', 
      items: [
        { label: 'AI Notifications', icon: 'notifications', color: '#f59e0b', toggle: true },
        { label: 'Dark Mode', icon: 'dark-mode', color: '#6366f1', toggle: true, value: true },
        { label: 'Unit System', icon: 'settings-input-component', color: '#ec4899', valueLabel: 'Metric' },
      ]
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background-dark">
      <ScrollView className="flex-1">
        <View className="p-8 items-center bg-slate-900/30 pb-12 rounded-b-[40px] border-b border-white/5">
           <View className="size-24 rounded-[32px] bg-primary items-center justify-center mb-4 shadow-2xl shadow-primary/30">
              <Text className="text-white text-4xl font-bold">AJ</Text>
              <TouchableOpacity className="absolute -bottom-1 -right-1 size-8 bg-slate-800 rounded-xl items-center justify-center border-2 border-background-dark">
                <MaterialIcons name="edit" size={16} color="white" />
              </TouchableOpacity>
           </View>
           <Text className="text-white text-2xl font-bold">Alex Johnson</Text>
           <Text className="text-slate-500 mt-1 font-medium">alex.johnson@example.com</Text>
           
           <View className="flex-row gap-8 mt-8">
              <View className="items-center">
                 <Text className="text-white text-lg font-bold">12</Text>
                 <Text className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Level</Text>
              </View>
              <View className="w-[1px] h-10 bg-slate-800" />
              <View className="items-center">
                 <Text className="text-white text-lg font-bold">4.8k</Text>
                 <Text className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Points</Text>
              </View>
           </View>
        </View>

        <View className="px-6 py-8">
           {sections.map((section, idx) => (
             <View key={idx} className="mb-8">
                <Text className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4 px-2">{section.title}</Text>
                <View className="bg-slate-900/50 rounded-3xl border border-slate-800 overflow-hidden">
                   {section.items.map((item, i) => (
                     <TouchableOpacity 
                       key={i}
                       className={`p-4 flex-row items-center ${i < section.items.length - 1 ? 'border-b border-slate-800/50' : ''}`}
                     >
                       <View className="size-10 rounded-xl items-center justify-center mr-4" style={{ backgroundColor: `${item.color}20` }}>
                          <MaterialIcons name={item.icon as any} size={20} color={item.color} />
                       </View>
                       <Text className="text-white font-medium flex-1">{item.label}</Text>
                       {item.toggle ? (
                         <Switch 
                            value={item.value} 
                            trackColor={{ false: '#1e293b', true: '#3c83f6' }}
                            thumbColor="white"
                         />
                       ) : item.valueLabel ? (
                         <Text className="text-slate-500 text-sm font-medium mr-2">{item.valueLabel}</Text>
                       ) : (
                         <MaterialIcons name="chevron-right" size={20} color="#334155" />
                       )}
                     </TouchableOpacity>
                   ))}
                </View>
             </View>
           ))}

           <TouchableOpacity className="bg-red-500/10 border border-red-500/20 py-4 rounded-2xl items-center justify-center">
              <Text className="text-red-500 font-bold">Sign Out</Text>
           </TouchableOpacity>
           <View className="h-20" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
