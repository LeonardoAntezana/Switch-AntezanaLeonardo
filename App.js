import { StyleSheet, View } from 'react-native';
import { Header } from './src/components';
import  StartGameScreen  from './src/screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title='Adivina el numero'/>
      <StartGameScreen/>
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
