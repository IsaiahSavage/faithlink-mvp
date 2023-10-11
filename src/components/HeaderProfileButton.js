import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinkButton from './LinkButton';

const HeaderProfileButton = () => {
  return (
    <View style={styles.container}>
      <LinkButton
        to={{ screen: 'Profile' }}
        containerStyles={styles.buttonContainer}
        textStyles={styles.text}
      >
        I
      </LinkButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  buttonContainer: {
    height: 35,
    width: 35,
    borderRadius: 35 / 2,
    backgroundColor: '#002857',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  text: {
    color: 'white',
    fontSize: 25,
  },
});

export default HeaderProfileButton;
