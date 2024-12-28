import React, { useState, useRef } from "react";
import { FlatList, Image, ImageBackground, TouchableOpacity, View } from "react-native";
import { Video, ResizeMode } from "expo-av";
import * as Animatable from "react-native-animatable";
import { icons } from "../constants";

const zoomIn = {
  0: { scale: 0.9 },
  1: { scale: 1 },
};

const zoomOut = {
  0: { scale: 1 },
  1: { scale: 0.9 },
};

const TrendingItem = ({ activeItem, item, index }) => {
  const [play, setPlay] = useState(false);

  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === index ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <Video
          source={{ uri: item.video }}
          className="w-52 h-72 rounded-[33px] mt-3 bg-white/10"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) setPlay(false);
          }}
        />
      ) : (
        <TouchableOpacity
          className="relative flex justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBToGUocH7PBg1up5sK8picw0SGyewe9HJrg&s" }}
            className="w-52 h-72 rounded-[33px] my-5 overflow-hidden shadow-lg shadow-black/40"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const TrendingCarousel = ({ posts }) => {
  const [activeItem, setActiveItem] = useState(0);
  const flatListRef = useRef(null);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 70, // Set threshold for visibility
  };

  const handleScrollEnd = (info) => {
    const visibleIndex = info.viewableItems[0]?.index ?? 0;
    setActiveItem(visibleIndex);
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={posts}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TrendingItem activeItem={activeItem} item={item} index={index} />
        )}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onViewableItemsChanged={handleScrollEnd}
        viewabilityConfig={viewabilityConfig}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      />
    </View>
  );
};

export default TrendingCarousel;
