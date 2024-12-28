import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'

const VideoCard = () => {
    const [play, setPlay] = useState(false);
    return (
        <View className="flex-col items-center px-4 mb-14">
            <View className="flex-row gap-3 items-center">
                <View className="justify-center items-center flex-row flex-1">
                    <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
                        <Image
                            source={{ uri: 'https://www.schmidtspiele.de/assets/images/8/57387_Premium_Puzzles_Random_Galaxy_Wraps_Pizza_Faultier_Galaxie_Taco_1000_Teile_Puzzle_72ppi_Motiv-880bf02e.jpg' }}
                            resizeMode='cover'
                            className="w-full h-full object-cover"
                        />
                    </View>
                    <View className="justify-center flex-1 ml-3 gap-y-1">
                        <Text className="text-white font-psemibold text-sm" numberOfLines={1}>Lorem ipsum dolor sit.</Text>
                        <Text className="text-xs text-gray-100 font-pregular">
                            username
                        </Text>
                    </View>
                </View>
                <View className="pt-2">
                    <Image
                        source={icons.menu}
                        className="w-5 h-5"
                        resizeMode='contain'
                    />
                </View>
            </View>
            {
                play ? (
                    <Text className="text-white"> Playing</Text>
                ) : (
                    <TouchableOpacity activeOpacity={0.7} onPress={()=> setPlay(true)}
                        className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
                    >
                        <Image
                            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGqTDvTzQwcrgLTpV7m27EfpIOiQ23O9Zc1g&s" }}
                            className="w-full h-full rounded-xl"
                            resizeMode="cover" // Ensures the image fills the view
                        />
                        <Image
                            source={icons.play}
                            className="w-12 h-12 absolute"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>

                )
            }
        </View>
    )
}

export default VideoCard