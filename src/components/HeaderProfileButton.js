import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinkButton from './LinkButton';
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HeaderProfileButton = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <IconButton
        icon={'account-circle'}
        iconColor="#002857"
        size={35}
        onPress={() => navigation.navigate('Profile')}
        style={styles.buttonContainer}
        labelStyle={styles.text}
      >
        I
      </IconButton>
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
