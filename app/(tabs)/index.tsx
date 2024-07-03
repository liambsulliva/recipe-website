import React, { useState } from 'react';
import Button from '@/components/Button'
import { View, Text, Modal, ScrollView, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { allPosts, post } from '@/constants/Recipes';
import ToastModal from '@/components/ToastModal';



const renderPosts = (posts: post[]) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPost, setSelectedPost] = useState<post>({title: "", description: "", img: "", ingredients: [""], steps: [""]});

  const openModal = (post: post) => {
    setSelectedPost(post);
    setModalVisible(true);
  };

  return (
    <>
      {posts.map((post: post, index: number) => (
        <React.Fragment key={index}>
          <View className="border-t border-gray-300" />
          <TouchableOpacity 
            className="p-4 pb-8"
            onPress={() => openModal(post)}
          >
            <Text className="text-2xl dark:text-stone-200 font-bold">{post.title}</Text>
            <Text className="text-gray-500">{post.description}</Text>
          </TouchableOpacity>
        </React.Fragment>
      ))}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 bg-black/30 justify-end">
          <BlurView intensity={50} className="absolute inset-0">
            <View className="h-full justify-end">
              <ToastModal selectedPost={selectedPost} setModalVisible={setModalVisible} />
            </View>
          </BlurView>
        </View>
      </Modal>
    </>
  );
};

export default function TabOneScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex-1 flex-row justify-between">
        <View className="m-12 flex-1">
          <Text className="text-6xl dark:text-stone-100 font-bold my-4">Explore</Text>
          <View className="flex-row mb-4">
            <Button label="Carbs" onPress={() => setCurrentIndex(0)} />
            <Button label="Fats" onPress={() => setCurrentIndex(1)} />
            <Button label="Proteins" onPress={() => setCurrentIndex(2)} />
          </View>
          <ScrollView className="flex-1">
            {currentIndex === 0 && renderPosts(allPosts[0])}
            {currentIndex === 1 && renderPosts(allPosts[1])}
            {currentIndex === 2 && renderPosts(allPosts[2])}
          </ScrollView>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}