import React, { useState, useCallback, useEffect } from 'react';
import {
  RefreshControl,
  ScrollView,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../firebase/firebaseConfig';
import ResourceList from '../components/ResourceList';
import { SearchBar } from '@rneui/themed';

const ViewSearchResultsScreen = ({ route }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState(route.params.search);

  // TODO: do we actually need refresh here?
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  // fetch search results from firestore
  useEffect(() => {
    setIsBusy((isBusy) => true);

    const searchQuery = query(
      collection(FIRESTORE_DB, 'resources'),
      where('tags', 'array-contains', route.params.search),
    );

    getDocs(searchQuery)
      .then((querySnapshot) => {
        setResults((results) => []);
        querySnapshot.forEach((doc) => {
          setResults((results) => [...results, doc.data()]);
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsBusy((isBusy) => false);
      });
  }, []);

  return isBusy ? (
    <ActivityIndicator animating={true} style={{ height: '100%' }} />
  ) : (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      contentContainerStyle={styles.wrapper}
    >
      <SearchBar
        placeholder="Search for a resource"
        onChangeText={setSearch}
        value={search}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBar}
        // TODO: implement search
        // TODO: change to dynamic check for light theme
        lightTheme={true}
      />
      <View style={styles.contentContainer}>
        <ResourceList
          resources={results}
          title={`Search Results for '${route.params.search}':`}
          containerStyles={styles.resourceListContainer}
        />
        {results.length === 0 && <Text>No results found.</Text>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  contentContainer: {
    flex: 1,
    alignSelf: 'center',
  },
  resourceListContainer: {
    alignSelf: 'center',
    marginTop: 20,
  },
});

export default ViewSearchResultsScreen;
