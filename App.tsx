import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/home/home';
import { Provider } from 'react-redux';
import { store } from './app/index';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Home />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
