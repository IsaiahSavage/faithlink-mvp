import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinkButton from './LinkButton';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AuthScreens from '../AuthScreens';

const HeaderProfileButton = () => {
  const navigation = useNavigation();

  return (
      <LinkButton
        to={AuthScreens}
        containerStyles={[styles.container, containerStyles]}
        textStyles={[styles.text, textStyles]}
      >
        Back
      </LinkButton>
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
    // backgroundColor: ,
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight: 30,
  },
  text: {
    color: 'white',
    fontSize: 25,
  },
});

export default HeaderProfileButton;