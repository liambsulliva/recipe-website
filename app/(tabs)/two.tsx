import React, { useState } from 'react';
import { Text, View, ScrollView, Switch } from 'react-native';

export default function TabTwoScreen() {
  const [switch1Value, setSwitch1Value] = useState(false);
  const [switch2Value, setSwitch2Value] = useState(true);
  const [switch3Value, setSwitch3Value] = useState(false);
  const [switch4Value, setSwitch4Value] = useState(false);
  const [switch5Value, setSwitch5Value] = useState(false);

  return (
    <ScrollView className='h-screen my-16'>
      <Text className='text-center text-2xl dark:text-stone-100 font-bold p-8 pb-4'>Flip Us!</Text>
      <View className='flex flex-row justify-between items-center px-8 py-2'>
        <Text className='dark:text-stone-400'>Default Switch</Text>
        <Switch value={switch1Value} onValueChange={setSwitch1Value} />
      </View>
      <View className='flex flex-row justify-between items-center px-8 py-2'>
        <Text className='dark:text-stone-400'>Custom Colors</Text>
        <Switch 
          value={switch2Value} 
          onValueChange={setSwitch2Value}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={switch2Value ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
      <View className='flex flex-row justify-between items-center px-8 py-2'>
        <Text className='dark:text-stone-400'>iOS Style</Text>
        <Switch 
          value={switch3Value} 
          onValueChange={setSwitch3Value}
          trackColor={{ false: "#3e3e3e", true: "#34C759" }}
          ios_backgroundColor="#3e3e3e"
        />
      </View>
      <View className='flex flex-row justify-between items-center px-8 py-2'>
        <Text className='dark:text-stone-400'>Disabled</Text>
        <Switch 
          value={switch4Value} 
          onValueChange={setSwitch4Value}
          disabled={true}
        />
      </View>
      <View className='flex flex-row justify-between items-center px-8 py-2'>
        <Text className='dark:text-stone-400'>Large Switch</Text>
        <Switch 
          value={switch5Value} 
          onValueChange={setSwitch5Value}
          trackColor={{ false: "#767577", true: "#007AFF" }}
          thumbColor={switch5Value ? "#ffffff" : "#f4f3f4"}
          style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
        />
      </View>
    </ScrollView>
  );
}