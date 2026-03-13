import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

const { width } = Dimensions.get('window');

const SplashScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding1');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 bg-background-dark items-center justify-between py-20">
      <View className="absolute inset-0 opacity-10">
        {/* Abstract background effect placeholder */}
      </View>

      <View className="h-10" />

      <View className="items-center w-full">
        <View className="relative mb-12">
          <View className="absolute inset-0 bg-primary opacity-20 blur-3xl rounded-full scale-150" />
          <View className="w-48 h-48 md:w-56 md:h-56 bg-slate-900/40 rounded-full border border-primary/30 items-center justify-center overflow-hidden shadow-2xl">
            <MaterialIcons name="fitness-center" size={120} color="#3c83f6" />
          </View>
        </View>

        <View className="items-center px-6">
          <Text className="text-white text-5xl font-extrabold tracking-tighter mb-4 shadow-lg">
            Fit<Text className="text-primary">Morph</Text>
          </Text>
          <Text className="text-slate-400 text-lg font-medium text-center max-w-[280px]">
            Transform Your Body, One Workout at a Time
          </Text>
        </View>
      </View>

      <View className="w-full px-10 gap-6">
        <View className="gap-3">
          <View className="flex-row justify-between items-end px-1">
            <Text className="text-slate-400 text-xs font-semibold uppercase tracking-widest">Initializing engine</Text>
            <Text className="text-primary text-xs font-bold">78%</Text>
          </View>
          <View className="h-2 w-full bg-slate-800 rounded-full overflow-hidden p-[1px]">
            <View className="h-full bg-primary rounded-full" style={{ width: '78%' }} />
          </View>
        </View>

        <View className="flex-row justify-center gap-2">
          <View className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          <View className="w-1.5 h-1.5 rounded-full bg-primary/60" />
          <View className="w-1.5 h-1.5 rounded-full bg-primary" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
