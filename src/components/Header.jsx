import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../constants/Colors'

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontFamily: 'open-sans',
    }
})