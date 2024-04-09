import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../firebase/firebaseConfig';

const MoreScreen = () => {
  const LINKS = [
    {
      screen: 'Settings',
      text: 'Settings',
    },
    {
      screen: 'TermsOfUse',
      text: 'Terms of Use',
    },
    {
      screen: 'PrivacyPolicy',
      text: 'Privacy Policy',
    },
    {
      screen: 'ContactSupport',
      text: 'Contact Support',
      onPress: () => alert('Contact functionality coming soon!'),
    },
    {
      screen: 'Logout',
      text: 'Log Out',
      onPress: () => FIREBASE_AUTH.signOut(),
    },
  ];

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.linksContainer}>
        <FlatList
          data={LINKS}
          renderItem={({ item }) => (
            <Button
              onPress={() =>
                item.hasOwnProperty('onPress')
                  ? item.onPress()
                  : navigation.navigate(item.screen)
              }
              mode="contained"
              style={styles.linkButton}
              labelStyle={styles.linkButtonText}
            >
              {item.text}
            </Button>
          )}
          keyExtractor={(item) => item.screen}
          scrollEnabled={false}
          style={styles.linkGroupContainer}
        />
      </View>
      <Text style={styles.deviceInfo}>
        Device ID: 123456789, Release Version v0.0.1a
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
  },
  linksContainer: {
    marginTop: 20,
  },
  linkGroupContainer: {
    marginHorizontal: 10,
  },
  linkButton: {
    backgroundColor: '#E8E8E8',
    borderRadius: 100,
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginBottom: 15,
  },
  linkButtonText: {
    color: '#002857',
    fontSize: 18,
    fontWeight: 'bold',
  },
  deviceInfo: {
    color: '#E8E8E8',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default MoreScreen;
