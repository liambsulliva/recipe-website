import { View, Text, TouchableOpacity, ScrollView, Linking } from 'react-native';
import React, { useState } from 'react';

const Button = ({ label, onPress }: { label: string, onPress: () => void }) => (
  <TouchableOpacity 
    className="m-1 px-4 py-2 bg-stone-800 rounded-md" 
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
        className="p-4 pb-8"
        onPress={() => Linking.openURL(`/${post.slug}`)}
      >
        <Text className="text-2xl dark:text-stone-200 font-bold">{post.title}</Text>
        <Text className="text-gray-500">{post.description}</Text>
      </TouchableOpacity>
    </React.Fragment>
  ))
);

export default function TabOneScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View className="flex-1 flex-row justify-between">
      <View className="m-12 flex-1">
        <Text className="text-6xl dark:text-stone-100 font-bold my-4">Explore</Text>
        <View className="flex-row mb-4">
          <Button label="Carbs" onPress={() => setCurrentIndex(0)} />
          <Button label="Fats" onPress={() => setCurrentIndex(1)} />
          <Button label="Proteins" onPress={() => setCurrentIndex(2)} />
        </View>
        <ScrollView className="flex-1">
          {currentIndex === 0 && renderPosts([
            { title: "Beef Noodle Skillet", description: "The Protein Powerhouse.", slug: "beef-noodle-skillet" },
            { title: "Garlic Noodles", description: "Oodles of Noodles.", slug: "garlic-noodles" },
            { title: "Mac n' Cheese", description: "Deliciously Decadent.", slug: "mac-n-cheese" }
          ])}
          {currentIndex === 1 && renderPosts([
            { title: "Braised Short Ribs", description: "Umami to the Max.", slug: "braised-short-ribs" },
            { title: "Chicken Shallots", description: "Creamy and Wine-ey?", slug: "chicken-shallots" },
            { title: "Honey Mustard Chicken Thighs", description: "Tangy Sweet Perfection.", slug: "honey-mustard-chicken-thighs" }
          ])}
          {currentIndex === 2 && renderPosts([
            { title: "Panko Tilapia", description: "Great for Fish Tacos!", slug: "panko-tilapia" },
            { title: "Skirt Steak", description: "Panasian Style.", slug: "skirt-steak" },
            { title: "Thai Curry Mussels", description: "Tiny Protein Bombs.", slug: "thai-curry-mussels" }
          ])}
        </ScrollView>
      </View>
    </View>
  );
}
