import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Modal } from 'react-native-paper';

const GroupContactModal = ({ visible, hideModal }) => {
  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.text}>Group Leader: Leonard McCoy</Text>
      <Text style={styles.text}>Contact number: 740-397-1701</Text>
      <Text style={styles.text}>Contact email: doctor@notBricklayer.com</Text>
    </Modal>
  );
};

export default GroupContactModal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8E8E8',
    height: '90%',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
});
