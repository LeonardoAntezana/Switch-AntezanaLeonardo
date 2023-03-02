import { React, useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Card, Input } from '../components'
import COLORS from '../constants/Colors'

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState('')

  const handlerInputNumber = value => setEnteredValue(value.replace(/[^0-9]/g, ''))

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Comenzar Juego</Text>
        <Card style={styles.inputContainer}>
          <Text>Elija un numero</Text>
          <Input style={styles.input}
          blurOnSbumit 
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='numeric'
          maxLength={2}
          value={enteredValue}
          onChangeText={handlerInputNumber}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title='Limpiar' color={COLORS.primary}/>
            </View>
            <View style={styles.button}>
              <Button title='Confirmar' color={COLORS.accent}/>
            </View>
        </View>
      </Card>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        padding: 20,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15   
    },
    button: {
      width: '47%',
    }
})