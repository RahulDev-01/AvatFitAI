import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const AuthScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView className="flex-1 bg-background-dark">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="flex-row items-center p-4 justify-between">
          <TouchableOpacity onPress={() => navigation.goBack()} className="w-12 h-12 items-center justify-center">
            <MaterialIcons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-lg font-bold pr-12 text-center flex-1">FitMorph</Text>
        </View>

        <View className="px-6 items-center">
          <View className="w-full h-48 bg-slate-800/50 rounded-3xl overflow-hidden justify-center items-center mb-8 relative">
             <MaterialIcons name="fitness-center" size={100} color="#3c83f6" className="opacity-40" />
             <View className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent" />
          </View>

          <View className="w-full bg-slate-800/30 rounded-3xl p-6 border border-white/10">
            <Text className="text-white text-3xl font-bold text-center mb-2">Join the Evolution</Text>
            <Text className="text-slate-400 text-base text-center mb-8">Your fitness transformation starts here.</Text>

            <View className="gap-4">
              <View>
                <Text className="text-slate-300 text-sm font-medium mb-2 px-1">Email Address</Text>
                <TextInput 
                  className="bg-slate-800/50 border border-slate-700 rounded-2xl h-14 px-4 text-white text-base"
                  placeholder="name@example.com"
                  placeholderTextColor="#64748b"
                />
              </View>

              <View>
                <Text className="text-slate-300 text-sm font-medium mb-2 px-1">Password</Text>
                <TextInput 
                  className="bg-slate-800/50 border border-slate-700 rounded-2xl h-14 px-4 text-white text-base"
                  placeholder="Min. 8 characters"
                  placeholderTextColor="#64748b"
                  secureTextEntry
                />
              </View>

              <TouchableOpacity 
                className="bg-primary h-14 rounded-2xl items-center justify-center shadow-lg shadow-primary/20 mt-4"
                onPress={() => navigation.navigate('ProfileSetup')}
              >
                <Text className="text-white font-bold text-lg">Create Account</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row items-center my-8">
              <View className="flex-1 h-[1px] bg-slate-700" />
              <Text className="px-4 text-slate-500 text-sm font-medium">OR CONTINUE WITH</Text>
              <View className="flex-1 h-[1px] bg-slate-700" />
            </View>

            <View className="flex-row gap-4">
              <TouchableOpacity className="flex-1 h-14 border border-slate-700 bg-slate-800/50 rounded-2xl items-center justify-center flex-row gap-3">
                <FontAwesome5 name="google" size={18} color="white" />
                <Text className="text-white font-medium">Google</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 h-14 border border-slate-700 bg-slate-800/50 rounded-2xl items-center justify-center flex-row gap-3">
                <FontAwesome5 name="apple" size={18} color="white" />
                <Text className="text-white font-medium">Apple</Text>
              </TouchableOpacity>
            </View>

            <View className="mt-8 items-center">
              <Text className="text-slate-400 text-sm">
                Already have an account? <Text className="text-primary font-bold">Log in</Text>
              </Text>
            </View>
          </View>
        </View>
        <View className="h-10" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthScreen;
