import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import SquareButton from '../components/SquareButton';

export default function FirstScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>First Screen</Text>
      <View>
        <SquareButton
          label="to Second Screen"
          style={{ backgroundColor: 'blue' }}
          onPress={() => {
            navigation.navigate('Second');
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
