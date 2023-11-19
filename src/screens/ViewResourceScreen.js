import { StyleSheet, Text, useWindowDimensions } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../firebase/firebaseConfig';
import { SafeAreaView } from 'react-native-safe-area-context';
import RenderHTML from 'react-native-render-html';

const MSG_HTML_FAILED_TO_LOAD = {
  html: '<h1>Failed to load resource</h1><p>Check your internet connection and try again.</p>',
};

const ViewResourceScreen = ({ route, navigation }) => {
  const { resourceID } = route.params;
  const { width } = useWindowDimensions();

  const [isBusy, setIsBusy] = useState(false);
  const [resource, setResource] = useState({});

  useEffect(() => {
    setIsBusy(true);
    const resourceQuery = query(
      collection(FIRESTORE_DB, 'resources'),
      where('id', '==', resourceID),
    );

    getDocs(resourceQuery)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setResource((resource) => ({ ...resource, ...doc.data() }));
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsBusy(false));
  }, []);

  return isBusy ? (
    <ActivityIndicator animating={true} style={{ height: '100%' }} />
  ) : (
    <SafeAreaView>
      <RenderHTML
        source={
          resource.hasOwnProperty('source') && resource.source !== null
            ? { ...resource.source }
            : MSG_HTML_FAILED_TO_LOAD
        }
        contentWidth={width}
        // style={styles.html}
      />
    </SafeAreaView>
  );
};

export default ViewResourceScreen;

const styles = StyleSheet.create({});
