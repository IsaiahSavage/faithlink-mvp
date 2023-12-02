import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ActionIconLabeled = ({ name, color, text, onPress }) => {
  return (
    <View style={styles.actionContainer}>
      <Pressable style={styles.actionButton} onPress={onPress}>
        <Feather name={name} size={40} color={color} />
      </Pressable>
      <Text style={styles.actionText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  actionContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  actionButton: {
    borderRadius: 30,
    padding: 10,
    backgroundColor: '#E8E8E8',
    marginBottom: 5,
  },
  actionText: {
    fontSize: 16,
    color: '#002857',
  },
});

export default ActionIconLabeled;
