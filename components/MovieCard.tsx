import { icons } from '@/constants/icons';
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
  popularity,
  overview,
}: Movie) => {
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://placehold.co/400/1a1a1a/ffffff.png',
          }}
          className="w-fill h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-xs font-bold text-white mt-2" numberOfLines={1}>
          {title}
        </Text>

        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-4" />
          <Text className="text-xs text-white font-bold uppercase">
            {Math.round(vote_average / 2)}
          </Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-xs text-slate-400 font-medium mt-1">
            {release_date?.split('-')[0]}
          </Text>
          {/*
          <Text className="text-xs font-medium text-slate-400 uppercase">
            Movie
          </Text>
          */}
        </View>

        <View className="flex-row items-center justify-start">
          <Text className="text-slate-400 text-xs font-light mt-1">
            {popularity} Views
          </Text>
        </View>

        {/*<View className="flex-row items-center justify-start">
          <Text
            className="text-slate-400 text-xs font-light mt-1"
            numberOfLines={3}
          >
            {overview}
          </Text>
        </View>*/}
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
