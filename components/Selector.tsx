import React, { useState } from 'react';
import { Text, View, Switch } from 'react-native';

interface SelectorProps {
    title: string;
    label1: string;
    label2: string;
    label3?: string;
    state?: React.Dispatch<React.SetStateAction<any>>;
}

const Selector = ({ title, label1, label2, label3, state }: SelectorProps) => {
    const [switch1Value, setSwitch1Value] = useState(false);
    const [switch2Value, setSwitch2Value] = useState(false);
    const [switch3Value, setSwitch3Value] = useState(false);

    const handleSwitch1Change = () => {
        if (state) {
            state(0);
        }
        setSwitch1Value(true);
        setSwitch2Value(false);
        setSwitch3Value(false);
    };

    const handleSwitch2Change = () => {
        if (state) {
            state(1);
        }
        setSwitch1Value(false);
        setSwitch2Value(true);
        setSwitch3Value(false);
    };

    const handleSwitch3Change = () => {
        if (state) {
            state(2);
        }
        setSwitch1Value(false);
        setSwitch2Value(false);
        setSwitch3Value(true);
    };

    return (
        <View className='flex flex-col gap-2 mb-8'>
            <Text className='text-sm text-left px-4 text-stone-500'>{title}</Text>
            <View className='flex flex-col px-4 bg-white dark:bg-stone-800 rounded-lg'>
                <View className='flex flex-row py-2 justify-between items-center'>
                    <Text className='dark:text-stone-400'>{label1}</Text>
                    <Switch value={switch1Value} onValueChange={handleSwitch1Change} />
                </View>
                <View className="w-full h-px bg-gray-300 rounded-full mx-auto" />
                <View className='flex flex-row py-2 justify-between items-center'>
                    <Text className='dark:text-stone-400'>{label2}</Text>
                    <Switch value={switch2Value} onValueChange={handleSwitch2Change} />
                </View>
                {label3 && (
                    <>
                        <View className="w-full h-px bg-gray-300 rounded-full mx-auto" />
                        <View className='flex flex-row py-2 justify-between items-center'>
                            <Text className='dark:text-stone-400'>{label3}</Text>
                            <Switch value={switch3Value} onValueChange={handleSwitch3Change} />
                        </View>
                    </>
                )}
            </View>
        </View>
    );
}

export default Selector;