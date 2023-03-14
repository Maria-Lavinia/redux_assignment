// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Problems } from './features/problems/problems';
import { SignUp } from './features/users/components/SignUp';
import { store } from './store'

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>

        <Problems></Problems>
        <SignUp></SignUp>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
