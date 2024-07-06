import { Text, ScrollView} from 'react-native';
import Selector from '@/components/Selector';
import { Appearance } from 'react-native';
import { useState, useEffect } from 'react';

export default function TabTwoScreen() {
  const [appTheme, setAppTheme] = useState<number>();

  useEffect(() => {
    switch (appTheme) {
      case 0:
        Appearance.setColorScheme(null);
        break;
      case 1:
        Appearance.setColorScheme('light');
        break;
      case 2:
        Appearance.setColorScheme('dark');
        break;
    }
  }, [appTheme]);

  return (
    <ScrollView className='h-screen w-full py-16 px-8'>
      <Text className='text-center text-2xl dark:text-stone-100 font-bold p-8 pb-4'>Settings</Text>
      <Selector title='Theme' label1='Automatic' label2='Light' label3='Dark' state={setAppTheme} />
    </ScrollView>
  );
}