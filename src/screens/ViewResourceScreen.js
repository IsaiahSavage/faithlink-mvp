import { StyleSheet, useWindowDimensions } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import React, { useState, useEffect } from 'react';
import { collection, doc, getDoc } from 'firebase/firestore';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../firebase/firebaseConfig';
import { SafeAreaView } from 'react-native-safe-area-context';
import RenderHTML from 'react-native-render-html';
import { MSG_HTML_FAILED_TO_LOAD } from '../utils/FetchUtils';

const ViewResourceScreen = ({ route, navigation }) => {
  const { resourceID } = route.params;
  const { width } = useWindowDimensions();

  const [isBusy, setIsBusy] = useState(false);
  const [resource, setResource] = useState({});

  useEffect(() => {
    setIsBusy(true);
    getDoc(doc(collection(FIRESTORE_DB, 'resources'), resourceID))
      .then((doc) => {
        if (doc.exists()) {
          setResource(doc.data());
        } else {
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      })
      .finally(() => {
        setIsBusy(false);
      });
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
