import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const LoginTracker = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.loginText, styles.loginTitle]}>Weekly Logins</Text>
      <View style={styles.loginCheckContainer}>
        {/* TODO: prop for complete (black) / incomplete (gray) */}
        <Feather name={'check'} size={35} color={'#337AB7'} />
        <Feather name={'check'} size={35} color={'#337AB7'} />
        <Feather name={'check'} size={35} color={'#337AB7'} />
        <Feather name={'check'} size={35} color={'#337AB7'} />
        <Feather name={'check'} size={35} color={'#337AB7'} />
        <Feather name={'check'} size={35} color={'#337AB7'} />
        <Feather name={'check'} size={35} color={'#337AB7'} />
        <Feather name={'check'} size={35} color={'gray'} />
      </View>
      {/* TODO: prop for streak number */}
      <Text style={styles.loginText}>Streak: 128</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  loginText: {
    marginLeft: 10,
    fontSize: 20,
    marginVertical: 5,
    color: '#002857',
  },
  loginTitle: {
    fontWeight: '600',
  },
  loginCheckContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
});

export default LoginTracker;
