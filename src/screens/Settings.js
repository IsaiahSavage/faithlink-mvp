import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// TODO: convert to a single screen of settings instead of props
// use https://reactnative.dev/docs/modal
const Settings = ({ title, settings }) => {
  return (
    <View style={styles.contentContainer}>
      <StatusBar style="auto" />
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={settings}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.title}
        style={styles.settingsContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: { flex: 1 },
  settingsContainer: {},
  title: {
    fontSize: 25,
  },
});

export default Settings;
