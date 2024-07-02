import EditScreenInfo from '@/components/EditScreenInfo';
import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import React, { useState } from 'react';

const Button = ({ label, onPress }: { label: string, onPress: () => void }) => (
  <TouchableOpacity 
    className="px-4 py-2 bg-blue-500 rounded-md" 
    onPress={onPress}
  >
    <Text className="text-white font-bold">{label}</Text>
  </TouchableOpacity>
);

const renderPosts = (posts: any) => (
  posts.map((post: any, index: number) => (
    <React.Fragment key={index}>
      <View className="border-t border-gray-300" />
      <TouchableOpacity 
        className="px-4 py-1 pb-6"
        onPress={() => Linking.openURL(`/${post.slug}`)}
      >
        <Text className="text-2xl font-bold">{post.title}</Text>
        <Text className="text-gray-500">{post.description}</Text>
      </TouchableOpacity>
    </React.Fragment>
  ))
);

export default function TabOneScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View className="flex-1 flex-row justify-between">
      <View className="m-4 flex-1">
        <Text className="text-4xl font-bold mb-4">Explore</Text>
        <View className="flex-row gap-2 mb-4">
          <Button label="Carbs" onPress={() => setCurrentIndex(0)} />
          <Button label="Fats" onPress={() => setCurrentIndex(2)} />
          <Button label="Proteins" onPress={() => setCurrentIndex(4)} />
        </View>
        <ScrollView className="flex-1">
          {currentIndex === 0 && renderPosts([
            { title: "Beef Noodle Skillet", description: "The Protein Powerhouse." },
            { title: "Garlic Noodles", description: "Oodles of Noodles." },
            { title: "Mac n' Cheese", description: "Deliciously Decadent." }
          ])}
          {currentIndex === 2 && renderPosts([
            { title: "Braised Short Ribs", description: "Umami to the Max." },
            { title: "Chicken Shallots", description: "Creamy and Wine-ey?" },
            { title: "Honey Mustard Chicken Thighs", description: "Tangy Sweet Perfection." }
          ])}
          {currentIndex === 4 && renderPosts([
            { title: "Panko Tilapia", description: "Great for Fish Tacos!" },
            { title: "Skirt Steak", description: "Panasian Style." },
            { title: "Thai Curry Mussels", description: "Tiny Protein Bombs." }
          ])}
        </ScrollView>
      </View>
    </View>
  );
}
