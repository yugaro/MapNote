import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { string, shape, func } from 'prop-types';

export default function SquareButton(props) {
  const { label, style, onPress } = props;
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

SquareButton.propTypes = {
  label: string.isRequired,
  style: shape(),
  onPress: func,
};

SquareButton.defaultProps = {
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'red',
    marginVertical: 24,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  buttonLabel: {
    fontSize: 20,
    lineHeight: 20,
    color: '#ffffff',
  },
});
