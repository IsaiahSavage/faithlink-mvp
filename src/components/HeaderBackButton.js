import { StyleSheet } from 'react-native';
import React from 'react';
import LinkButton from './LinkButton';

// Implement as a button that navigates back to the previous screen
function HeaderBackButton({ previousScreen, containerStyles, textStyles }) {
  return (
    <LinkButton
      to={previousScreen}
      containerStyles={[styles.container, containerStyles]}
      textStyles={[styles.text, textStyles]}
    >
      Back
    </LinkButton>
  );
}

export default HeaderBackButton;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
  },
  text: {
    color: '#002857',
    fontSize: 16,
  },
});
