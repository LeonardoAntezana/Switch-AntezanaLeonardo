import { React, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Card, NumberContainer } from '../components'
import COLORS from '../constants/Colors'

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
        <Button title='menor' color={COLORS.accent} onPress={() => {}}/>
        <Button title='mayor' color={COLORS.accent} onPress={() => {}}/>
      </Card>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    backgroundColor: COLORS.grayLight,
    padding: 10,
    alignItems: 'center',
  },
  text: {
    marginVertical: 10,
    fontFamily: 'open-sans-bold',
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