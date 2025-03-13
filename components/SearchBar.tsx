import { icons } from '@/constants/icons';
import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';

interface Props {
  placeholder: string;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    <View className="flex-row items-center bg-[#2f2e2e] rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#303030"
      ></Image>

      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value=""
        onChangeText={() => {}}
        placeholderTextColor="#2f2e2e"
        className="flex-1 ml-2 text-white"
      ></TextInput>
    </View>
  );
};

export default SearchBar;
