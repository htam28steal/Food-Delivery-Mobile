
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default SearchScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}></View>

      <View style={styles.topBar}>
        <View style={styles.searchContainer}>
          <Image
            source={require('../images/search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#010f0786"
            style={styles.searchText}
          />
          <Text style={styles.cancelText}>Cancel</Text>
        </View>
      </View>

      {/* Recent searches */}
      <View style={styles.recentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>RECENT SEARCHES</Text>
          <Text style={styles.clearAllText}>CLEAR ALL</Text>
        </View>

        {recentSearches.map((item, index) => (
          <TouchableOpacity key={index} style={styles.searchItem} onPress={()=>{navigation.navigate('Screen_SearchResult')}}>
            <Image
                source={require('../images/search.png')}
              style={styles.searchIcon}
            />
            <Text style={styles.searchText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const recentSearches = [
  'Subway',
  'Burgers',
  'Sandwich',
  'Pizza',
  'Fried Rice with meat',
  'Bakery',
  'Cake',
  'Cookies',
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    height: 0,
    backgroundColor: '#fff',
  },
  topBar: {
    height: 98,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  searchText: {
    flex: 1,
    fontSize: 22,
    fontWeight: '400',
    color: 'black',

    marginHorizontal: 10,
    opacity: 0.54,
  },
  cancelText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#010f07',
    opacity: 0.84,
  },
  recentContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },
  clearAllText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#010f07',
    textTransform: 'uppercase',
  },
  searchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    gap:20
  },
});