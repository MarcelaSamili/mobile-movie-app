import { icons } from '@/constants/icons';
import React from 'react';
import { Image, Text, View } from 'react-native';

const Profile = () => {
  return (
    <View className="flex justify-center items-center flex-1 flex-col gap-5 bg-black">
      <Image source={icons.person} className="size-10" />
      <Text className="text-gray-500 text-base">Porfile</Text>
    </View>
  );
};

export default Profile;
