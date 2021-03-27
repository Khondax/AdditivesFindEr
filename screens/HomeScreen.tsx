import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import additivesJSON from "../constants/fullAdditivesList.json";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Additives FindEr</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
      <Text>Hola buenas tardes, aquí va un listado tope largo de aditivos alimentarios como el {additivesJSON[150].name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
