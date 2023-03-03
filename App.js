import { useState, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Header } from './src/components';
import  StartGameScreen  from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  const [userNumber, setUserNumber] = useState()

  const startGameHandler = numberSelected => setUserNumber(numberSelected)

  if(!fontsLoaded){
    return null
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
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
