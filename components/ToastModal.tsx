import { View, Text, Image, ScrollView } from 'react-native';
import { post } from '@/constants/Recipes';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { 
  useAnimatedGestureHandler, 
  useAnimatedStyle, 
  useSharedValue, 
  withSpring,
  runOnJS
} from 'react-native-reanimated';

const SwipeableModalContent = ({ selectedPost, setModalVisible }: { selectedPost: post, setModalVisible: (visible: boolean) => void }) => {
    const translateY = useSharedValue(0);
  
    const gestureHandler = useAnimatedGestureHandler({
      onStart: (_, ctx: { startY: number }) => {
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
          <View className="w-12 h-1 bg-gray-300 rounded-full mx-auto my-3" />
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
                  <View className="mb-8">
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

export default SwipeableModalContent;