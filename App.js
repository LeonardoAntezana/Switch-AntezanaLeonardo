import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './src/components';
import  StartGameScreen  from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState()

  const startGameHandler = numberSelected => setUserNumber(numberSelected)

  return (
    <View style={styles.container}>
      <Header title='Adivina el numero'/>
      {userNumber ? <GameScreen/> : <StartGameScreen startGameHandler={startGameHandler}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
});
