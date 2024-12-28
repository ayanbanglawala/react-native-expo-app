import { View, Text, SafeAreaView, FlatList, Image, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuthContext } from '../../context/useAuthContext';
import { images } from '../../constants';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';
import VideoCard from '../../components/VideoCard';

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { authUser } = useAuthContext();
  const [user, setUser] = useState({
    fName: "",
    lName: ""
  })
  useEffect(() => {
    if (authUser != null) {
      user.fName = authUser.fName;
      user.lName = authUser.lName;
    }
  }, [authUser])
  const onRefresh = async () => {
    setRefreshing(true);
    user.fName = "ABDEV"
    setRefreshing(false);
  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="justify-between items-start flex-row mb-6 mx-6 mt-6">
        <View>
          <Text className="font-pmedium text-sm text-gray-100">Welcome</Text>
          <Text className="text-2xl font-psemibold text-white">{user.fName + " " + user.lName}</Text>
        </View>

        <View className="mt-1.5">
          <Image
            source={images.logoSmall}
            className="w-9 h-10 animate-updown"
            resizeMode="contain"
          />


        </View>
      </View>
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        // data={[]}
        keyExtractor={(item) => item.id.toString()} // Ensure 'id' is a string
        renderItem={({ item }) => (
          <VideoCard/>
        )}

        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">

            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className=" text-gray-100 my-3 text-lg font-pregular">
                Latest Videos
              </Text>
              <Trending
                posts={[{ id: 1 }, { id: 2 }, { id: 3 }, { id:4 }] ?? []}
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState title="No Video Found!"
            subtitle="Be The First One To Upload A Video" />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </SafeAreaView>
  );
};

export default Home;
