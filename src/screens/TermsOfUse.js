import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TermsOfUse = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Terms of Use</Text>
      <Text style={styles.text}>Coming soon.</Text>
    </View>
  );
};

export default TermsOfUse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
  },
});
