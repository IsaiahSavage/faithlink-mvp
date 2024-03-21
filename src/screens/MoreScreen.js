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
      text: 'Contact Support',
      onPress: () => alert('Contact functionality coming soon!'),
    },
    {
      text: 'Log Out',
      onPress: () => FIREBASE_AUTH.signOut(),
    },
  ];

  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.linksContainer}>
        {/* 
        // This is in case we switch back to a 2-column layout with smaller button option
        <FlatList
          data={LINKS.filter((e) => e.size === 'small')}
          renderItem={({ item }) => (
            <LinkButton
              to={{ screen: `${item.screen}` }}
              containerStyles={[
                styles.linkButton,
                styles.linkButtonSmall,
              ]}
              textStyles={[
                styles.linkButtonText,
                styles.linkButtonSmallText,
              ]}
            >
              {item.text}
            </LinkButton>
          )}
          keyExtractor={(item) => `${item.screen}`}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          scrollEnabled={false}
          style={[styles.linkGroupContainer]}
        /> */}
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
  // See comment above about smaller button option
  // linkButtonSmall: {
  //   flex: 0.5,
  //   width: '50%',
  //   marginHorizontal: 10,
  // },
  // linkButtonSmallText: {
  //   textAlign: 'center',
  // },
  deviceInfo: {
    color: '#E8E8E8',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default MoreScreen;
