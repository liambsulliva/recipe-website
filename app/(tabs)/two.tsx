import { Text, ScrollView} from 'react-native';
import Selector from '@/components/Selector';

export default function TabTwoScreen() {

  return (
    <ScrollView className='h-screen w-full py-16 px-8'>
      <Text className='text-center text-2xl dark:text-stone-100 font-bold p-8 pb-4'>Settings</Text>
      <Selector title='Theme' label1='Automatic' label2='Light' label3='Dark' />
      <Selector title='Theme' label1='Automatic' label2='Light' label3='Dark' />
      <Selector title='Theme' label1='Automatic' label2='Light' label3='Dark' />
      <Selector title='Theme' label1='Automatic' label2='Light' label3='Dark' />
    </ScrollView>
  );
}