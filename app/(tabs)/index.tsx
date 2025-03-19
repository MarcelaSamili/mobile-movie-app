import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';
import TreadingCard from '@/components/TreadingCard';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { fetchMovies } from '@/services/api';
import { getTrendingMovies } from '@/services/appwrite';
import useFetch from '@/services/useFetch';
import { Link, useRouter } from 'expo-router';
import { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';

export default function Index() {
  const router = useRouter();

  const {
    data: treadingMovies,
    loading: treadingLoading,
    error: treadingError,
  } = useFetch(getTrendingMovies);

  const {
    data: movie,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() =>
    fetchMovies({
      query: '',
    })
  );
  return (
    <View className="flex-1 bg-[#000000]">
      <Image source={images.bg} className="absolute w-full z-0"></Image>
      <ScrollView
        className="flex-1 px-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        {moviesLoading || treadingLoading ? (
          <ActivityIndicator
            size="large"
            color="000ff"
            className="mt-10 self-center"
          />
        ) : moviesError || treadingError ? (
          <Text>Error: {moviesError?.message || treadingError?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            {/*---------------------------------------------------------*/}
            <SearchBar
              onPress={() => router.push('/search')}
              placeholder="Search for a movie"
              value={''}
              onChangeText={function (text: string): void {
                throw new Error('Function not implemented.');
              }}
            />
            {/*------------------------------------------------------------*/}

            {treadingMovies && (
              <View className="mt-10">
                <Text className="text-lg text-white font-bold mb-3">
                  Treading Movies
                </Text>

                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={() => <View className="w-5" />}
                  className="mb-4 mt-3"
                  data={treadingMovies}
                  renderItem={({ item, index }) => (
                    <TreadingCard movie={item} index={index} />
                  )}
                  keyExtractor={item => item.movie_id.toString()}
                />
              </View>
            )}

            {/*------------------------------------------------------------*/}
            <>
              <Text className="text-lg text-white font-bold mt-5 mb-3">
                Latest Movies
              </Text>
              <FlatList
                data={movie}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={item => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{
                  justifyContent: 'flex-start',
                  gap: 20,
                  paddingRight: 5,
                  marginBottom: 10,
                }}
                className=" mt-2 pb-32"
                scrollEnabled={false}
              />
            </>
            {/*------------------------------------------------------------*/}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
