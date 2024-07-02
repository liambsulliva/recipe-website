import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import '@/constants/Recipes';

const Button = ({ label, onPress }: { label: string, onPress: () => void }) => (
  <TouchableOpacity 
    className="m-1 px-4 py-2 bg-yellow-500 dark:bg-stone-800 rounded-md" 
    onPress={onPress}
  >
    <Text className="text-white font-bold">{label}</Text>
  </TouchableOpacity>
);

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
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <BlurView intensity={10} style={StyleSheet.absoluteFill}>
          <SafeAreaView className="flex-1">
            <ScrollView className="flex-1">
              <View className="flex-1 justify-center items-center p-4">
                <View className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md">
                  {selectedPost && (
                    <>
                      {selectedPost.img && (
                        <Image
                          source={{ uri: selectedPost.img }}
                          className="w-full h-48 rounded-lg mb-4"
                          resizeMode="cover"
                        />
                      )}
                      <Text className="text-2xl dark:text-stone-200 font-bold mb-2">{selectedPost.title}</Text>
                      <Text className="text-gray-500 mb-4">{selectedPost.description}</Text>
                      {selectedPost.ingredients && (
                        <View className="mb-4">
                          <Text className="text-lg dark:text-stone-200 font-semibold mb-2">Ingredients:</Text>
                          {selectedPost.ingredients.map((ingredient, index) => (
                            <Text key={index} className="dark:text-stone-200">• {ingredient}</Text>
                          ))}
                        </View>
                      )}
                      {selectedPost.steps && (
                        <View>
                          <Text className="text-lg dark:text-stone-200 font-semibold mb-2">Steps:</Text>
                          {selectedPost.steps.map((step, index) => (
                            <Text key={index} className="dark:text-stone-200 mb-2">{index + 1}. {step}</Text>
                          ))}
                        </View>
                      )}
                    </>
                  )}
                  <TouchableOpacity 
                    className="mt-4 bg-blue-500 p-2 rounded"
                    onPress={() => setModalVisible(false)}
                  >
                    <Text className="text-white text-center">Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </BlurView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  absoluteFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

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
        {currentIndex === 0 && renderPosts(allPosts[0])}
        {currentIndex === 1 && renderPosts(allPosts[1])}
        {currentIndex === 2 && renderPosts(allPosts[2])}
        </ScrollView>
      </View>
    </View>
  );
}
