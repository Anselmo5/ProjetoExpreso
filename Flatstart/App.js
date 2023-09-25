import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/index'
export default function App() {
  return (
    <>
      <StatusBar style='auto'/>
      <Home/>
    </>
  );
}

