import { React, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Card, NumberContainer } from '../components'

const GameScreen = ({userOption}) => {

  const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
  }
  
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userOption))

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>La suposicion del oponente</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title='menor' onPress={() => {}}/>
        <Button title='mayor' onPress={() => {}}/>
      </Card>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  text: {
    marginVertical: 10, 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    marginTop: 10,
    width: 250,
    maxWidth: '80%',
  }
})