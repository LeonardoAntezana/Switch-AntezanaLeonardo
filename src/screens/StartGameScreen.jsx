import { React, useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Card, Input, NumberContainer } from '../components'
import COLORS from '../constants/Colors'

const StartGameScreen = ({startGameHandler}) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumber, setSelectedNumber] = useState('')

  const handlerInputNumber = value => setEnteredValue(value.replace(/[^0-9]/g, ''))

  const handlerReseInput = () => {
    setEnteredValue('')
    setConfirmed(false)
  }

  const handlerConfirmInput = () => {
    const choseNumber = parseInt(enteredValue)
    if(isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) return
    setConfirmed(true)
    setSelectedNumber(choseNumber)
    setEnteredValue('')
  }

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
              <Button title='Limpiar' color={COLORS.primary} onPress={handlerReseInput}/>
            </View>
            <View style={styles.button}>
              <Button title='Confirmar' color={COLORS.accent} onPress={handlerConfirmInput}/>
            </View>
        </View>
      </Card>
      {confirmed && 
        <Card style={styles.summaryContainer}>
          <Text>Tu seleccion</Text>
          <NumberContainer>{selectedNumber}</NumberContainer>
          <Button title='empezar juego' onPress={() => startGameHandler(selectedNumber)}/>  
        </Card>}
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
        marginBottom: 10,
        fontFamily: 'open-sans-bold'
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
    },
    summaryContainer: {
      alignItems: 'center',
      marginTop: 20,
      paddingTop: 10,
    }
})