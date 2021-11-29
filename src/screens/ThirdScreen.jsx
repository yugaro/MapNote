import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SquareButton from '../components/SquareButton';

export default function ThirdScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>Third Screen</Text>
      <View>
        <SquareButton
          label="to First Screen"
          style={{ backgroundColor: 'red' }}
          onPress={() => {
            navigation.navigate('First');
          }}
        />
        <SquareButton
          label="to Second Screen"
          style={{ backgroundColor: 'blue' }}
          onPress={() => {
            navigation.navigate('Second');
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
