import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinkButton from './LinkButton';

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <LinkButton
        to={{ screen: 'Today' }}
        containerStyles={styles.tabLinkContainer}
        textStyles={styles.tabLinkText}
      >
        Today
      </LinkButton>
      <LinkButton
        to={{ screen: 'Group' }}
        containerStyles={styles.tabLinkContainer}
        textStyles={styles.tabLinkText}
      >
        Group
      </LinkButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    right: 60,
  },
  tabLinkContainer: {
    marginRight: 50,
    marginLeft: 5,
  },
  tabLinkText: {
    fontSize: 25,
    color: '#337AB7',
  },
});

export default HeaderHome;
