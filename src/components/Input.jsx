import React from 'react'
import { StyleSheet, TextInput} from 'react-native'

const Input = ({style, ...moreProps}) => {
  return (
    <TextInput style={[styles.input, style]} {...moreProps}/>
  )
}

export default Input

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
        textAlign: 'center',
    }
})