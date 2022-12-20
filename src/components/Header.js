
import { Icon } from '@rneui/themed'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { colors, parameters } from '../global/styles'


export default function Header({title, type}) {
  return (
    <View style={styles.header}>
        <View style = {{marginLeft:20}}>
            <Icon
                name={type}
                type='material-community'
                size={28}
                color= {colors.headerText}
                onPress = {() => {}}
            />
            
        </View>
        <View>
            <Text style = {styles.headerText}>{title}</Text>
        </View>
    </View>
  )
}



const styles = StyleSheet.create({
    header :{
        flexDirection: "row",
        backgroundColor: colors.buttons,
        height: parameters.headerHeight,
    },

    headerText: {
        color: colors.headerText,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 30,
    }
})