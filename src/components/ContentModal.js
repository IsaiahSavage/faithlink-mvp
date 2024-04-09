import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import React from 'react';
import { Modal, Button, ActivityIndicator } from 'react-native-paper';
import { WebView } from 'react-native-webview';
import { MSG_HTML_FAILED_TO_LOAD } from '../utils/FetchUtils';

const ContentModal = ({ visible, hideModal, title, content }) => {
  const { width } = useWindowDimensions();

  const formatContent = () => {
    switch (typeof content) {
      case 'string':
        return <Text style={styles.text}>{content}</Text>;
      case 'undefined':
        return <Text style={styles.text}>No content available.</Text>;
      case 'object':
        return content.hasOwnProperty('source') ? (
          <WebView
            source={
              content.hasOwnProperty('source') && content.source !== null
                ? { ...content.source }
                : MSG_HTML_FAILED_TO_LOAD
            }
            containerStyle={{ width: width * 0.8 }}
            startInLoadingState={true}
            renderLoading={() => (
              <ActivityIndicator animating={true} style={{ height: '100%' }} />
            )}
          />
        ) : (
          <View>{content}</View>
        );
    }
  };

  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={styles.modal}
    >
      <Text style={[styles.text, styles.title]}>{title}</Text>
      <View style={styles.contentContainer}>{formatContent()}</View>
      <Button
        style={styles.button}
        labelStyle={styles.buttonText}
        mode="contained"
        onPress={hideModal}
      >
        Close
      </Button>
    </Modal>
  );
};

export default ContentModal;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    height: '90%',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'flex-start',
  },
  contentContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignSelf: 'center',
    height: '80%',
    width: '90%',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#002857',
  },
});
