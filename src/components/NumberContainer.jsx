import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import COLORS from '../constants/Colors'

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: COLORS.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        color: COLORS.primary,
        fontSize: 22
    }
})