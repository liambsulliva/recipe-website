import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Image } from 'react-native';
import { BlurView } from 'expo-blur';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { 
  useAnimatedGestureHandler, 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring,
  runOnJS
} from 'react-native-reanimated';
import { allPosts, post } from '@/constants/Recipes';

const Button = ({ label, onPress }: { label: string, onPress: () => void }) => (
  <TouchableOpacity 
    className="m-1 px-4 py-2 bg-yellow-500 rounded-md" 
    onPress={onPress}
  >
    <Text className="text-white text-center font-bold">{label}</Text>
  </TouchableOpacity>
);

const SwipeableModalContent = ({ selectedPost, setModalVisible }: { selectedPost: post, setModalVisible: (visible: boolean) => void }) => {
  const translateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateY.value = ctx.startY + event.translationY;
    },
    onEnd: (event) => {
      if (event.velocityY > 500 || event.translationY > 100) {
        translateY.value = withSpring(1000, { velocity: event.velocityY });
        runOnJS(setModalVisible)(false);
      } else {
        translateY.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View 
        className="bg-white/80 dark:bg-stone-800/80 rounded-t-3xl max-h-[90%]"
        style={animatedStyle}
      >
        <View className="w-12 h-1 bg-gray-300 rounded-full mx-auto my-2" />
        <ScrollView className="px-6 h-screen">
          {selectedPost && (
            <>
              {selectedPost.img && (
                <Image
                  source={{ uri: selectedPost.img }}
                  className="w-full h-52 rounded-lg mb-4"
                  resizeMode="cover"
                />
              )}
              <Text className="text-2xl font-bold mb-2 text-black dark:text-stone-200">
                {selectedPost.title}
              </Text>
              <Text className="text-gray-600 dark:text-stone-300 mb-4">
                {selectedPost.description}
              </Text>
              {selectedPost.ingredients && (
                <View className="mb-4">
                  <Text className="text-lg font-semibold mb-2 text-black dark:text-stone-200">
                    Ingredients:
                  </Text>
                  {selectedPost.ingredients.map((ingredient, index) => (
                    <Text key={index} className="text-gray-700 dark:text-stone-300">
                      • {ingredient}
                    </Text>
                  ))}
                </View>
              )}
              {selectedPost.steps && (
                <View className="mb-4">
                  <Text className="text-lg font-semibold mb-2 text-black dark:text-stone-200">
                    Steps:
                  </Text>
                  {selectedPost.steps.map((step, index) => (
                    <Text key={index} className="text-gray-700 dark:text-stone-300 mb-2">
                      {index + 1}. {step}
                    </Text>
                  ))}
                </View>
              )}
            </>
          )}
        </ScrollView>
      </Animated.View>
    </PanGestureHandler>
  );
};

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
              <SwipeableModalContent selectedPost={selectedPost} setModalVisible={setModalVisible} />
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