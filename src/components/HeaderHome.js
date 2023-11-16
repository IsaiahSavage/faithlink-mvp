import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const HeaderHome = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Button
        onPress={() => navigation.navigate('Today')}
        style={styles.tabLinkContainer}
        labelStyle={styles.tabLinkText}
      >
        Today
      </Button>
      <Button
        onPress={() => navigation.navigate('Group')}
        style={styles.tabLinkContainer}
        labelStyle={styles.tabLinkText}
      >
        Group
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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
