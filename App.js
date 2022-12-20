import React from 'react'
import { Image, ImageComponent, ScrollView, Text, TextInput, View } from 'react-native'

const App = () => {
  return (
    <ScrollView>
      <Text>Text</Text>
      <View>
        <Text>Text</Text>
        <Image 
          source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png', }}
          style={{ width: 200, height: 200}}></Image>
      </View>
      <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1}}
          // defaultValue="Input"
          placeholder='Input'></TextInput>
    </ScrollView>
  )
}

export default App