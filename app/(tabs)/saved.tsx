import { icons } from '@/constants/icons';
import React from 'react';
import { Image, Text, View } from 'react-native';

const saved = () => {
  return (
    <View className="flex justify-center items-center flex-1 flex-col gap-5 bg-black">
      <Image source={icons.save} className="size-10" />
      <Text className="text-gray-500 text-base">Saved</Text>
    </View>
  );
};

export default saved;
