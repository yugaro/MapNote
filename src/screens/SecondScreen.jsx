import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import SquareButton from '../components/SquareButton';

export default function SecondScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>Second Screen</Text>
      <View>
        <SquareButton
          label="to First Screen"
          onPress={() => {
            navigation.navigate('First');
          }}
        />
        <SquareButton
          label="to Third Screen"
          style={{ backgroundColor: 'green' }}
          onPress={() => {
            navigation.navigate('Third');
          }}
        />
      </View>
    </View>
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
