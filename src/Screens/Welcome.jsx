import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context' 


const Welcome = () => {
  return (
    <SafeAreaView className='flex-1 bg-purple-600' >
      <View className='flex-1 flex justify-around my-4'>
        <Text className='text-white font-bold text-4xl text-center'>
          Let's Get Started!
        </Text>
        <View className='flex-row justify-center'>
          <Image source={require("../../assets/Blogging-bro.png")} style={{ width: 350, height: 350 }}>
          </Image>
        </View>
        <View className='space-y-4'>
          <TouchableOpacity className='py-3 bg-yellow-400 mx-7 rounded-xl'>
            <Text className='text-xl font-bold text-center text-gray-700'>
              Sign Up
            </Text>
          </TouchableOpacity>
          <View className='flex-row justify-center'>
            <Text className='text-white font-semi-bold'>
              Already have an account?
            </Text>
            <TouchableOpacity>
              <Text className='font-semi-bold text-yellow-400 pl-1'>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Welcome