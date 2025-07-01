import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const SearchRestaurantsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>

      <View style={styles.searchBar}>
        <Image
          source={require('../images/search.png')}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search on foodly"
          placeholderTextColor="#868686"
          style={styles.searchInput}
        />
      </View>

      <Text style={styles.subtitle}>Top Restaurants</Text>

      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('Screen_SearchFood')}}>
          <Image    source={require('../images/bg.png')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>The Halal Guys</Text>
          <Text style={styles.cardSubtitle}>$$  •  Chinese</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
            <Image    source={require('../images/res1.png')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Popeyes 1426 Flmst</Text>
          <Text style={styles.cardSubtitle}>$$  •  Chinese</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
           <Image    source={require('../images/res2.png')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Mixt - Yerba Buena</Text>
          <Text style={styles.cardSubtitle}>$$  •  Chinese</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
            <Image    source={require('../images/res3.png')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Split Bread - Russian</Text>
          <Text style={styles.cardSubtitle}>$$  •  Chinese</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tab}>
          <Image source={require('../images/home.png')} style={styles.tabIcon} />
          <Text style={styles.tabLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={require('../images/searchYellow.png')} style={styles.tabIcon} />
          <Text style={styles.activeTabLabel}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={require('../images/order.png')} style={styles.tabIcon} />
          <Text style={styles.tabLabel}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={require('../images/profile.png')} style={styles.tabIcon} />
          <Text style={styles.tabLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#010f07',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  cardImage: {
    width: '100%',
    height: 140,
    borderRadius: 8,
    marginBottom: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '300',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#868686',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginTop:60
  },
  tab: {
    alignItems: 'center',
  },
  tabIcon: {
    width: 34,
    height: 34,
    marginBottom: 5,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight:600,
    color: 'black',
  },
  activeTabLabel: {
    fontSize: 10,
    color: '#eea734',
  },
});

export default SearchRestaurantsScreen;