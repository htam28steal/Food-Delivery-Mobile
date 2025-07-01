import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const restaurantData = [
  {
    id: '1',
    title: 'Tacos Nanchas',
    imageSrc: require('../images/TacosNanchas.png'),
  },
  { id: '2', title: "McDonald's", imageSrc: require('../images/McDonald.png') },
  { id: '3', title: 'KFC Foods', imageSrc: require('../images/KFCFoods.png') },
  {
    id: '4',
    title: 'Cafe MayField’s',
    imageSrc: require('../images/CafeMayField.png'),
  },
  {
    id: '5',
    title: 'Burger Joint',
    imageSrc: require('../images/McDonald1.png'),
  },
  {
    id: '6',
    title: 'Coffee House',
    imageSrc: require('../images/McDold2.png'),
  },
];

const RestaurantCard = ({ item, navigation }) => {
  const { imageSrc, title } = item;
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate('SingleRestaurant')}}>
      <View style={styles.cardContainer}>
        <Image source={imageSrc} style={styles.image} />
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.cuisines}>Chinese • American</Text>
      </View>
    </TouchableOpacity>
  );
};

const TabBar = () => {
  return (
    <View style={tabStyles.container}>
      <TouchableOpacity style={tabStyles.tabItem}>
        <Image
          source={require('../images/homeIcon.png')}
          style={tabStyles.icon}
        />
        <Text style={tabStyles.activeText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tabStyles.tabItem}>
        <Image
          source={require('../images/searchIcon.png')}
          style={tabStyles.icon}
        />
        <Text style={tabStyles.inactiveText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tabStyles.tabItem}>
        <Image
          source={require('../images/orderIcon.png')}
          style={tabStyles.icon}
        />
        <Text style={tabStyles.inactiveText}>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={tabStyles.tabItem}>
        <Image
          source={require('../images/profileIcon.png')}
          style={tabStyles.icon}
        />
        <Text style={tabStyles.inactiveText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 160,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginBottom: 16,
    marginHorizontal: 8,
    display: 'relative',
  },
  image: {
    width: 160,
    height: 280,
    borderRadius: 13,
  },
  name: {
    fontSize: 20,
    fontWeight: '300',
    color: '#010f07',
    paddingHorizontal: 8,
    marginTop: 8,
  },
  cuisines: {
    fontSize: 16,
    color: '#868686',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
});

const screenStyles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
  },
  cardsContainer: {
    padding: 16,
  },
});

const FeaturedPartners = ({ navigation }) => {
  return (
    <View style={screenStyles.container}>
      <FlatList
        data={restaurantData}
        renderItem={({ item }) => (
          <RestaurantCard item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={screenStyles.row}
        contentContainerStyle={screenStyles.cardsContainer}
      />
      <TabBar />
    </View>
  );
};

const tabStyles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: 88,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    alignItems: 'center',
    width: 60,
    height: 54,
  },
  icon: {
    width: 34,
    height: 34,
  },
  activeText: {
    color: '#eea734',
    marginTop: 5,
    fontWeight: '300',
    fontSize: 10,
    lineHeight: 13.3,
  },
  inactiveText: {
    color: '#868686',
    marginTop: 5,
    fontWeight: '300',
    fontSize: 10,
    lineHeight: 13.3,
  },
});

export default FeaturedPartners;
