import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const dataImg = [
  { id: '1', img: require('../images/res3.png'), name: 'Fast Food' },
  { id: '2', img: require('../images/res1.png'), name: 'Breakfast & Brunch' },
  { id: '3', img: require('../images/res2.png'), name: 'Mexican' },
  { id: '4', img: require('../images/bg.png'), name: 'Bakery' },
  { id: '5', img: require('../images/bg2.png'), name: 'Desserts' },
  { id: '6', img: require('../images/res2.png'), name: 'Desserts' },
];

const CategoryCard = ({ categoryName, categoryImg , navigation}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('SearchingFood')}}>
      <Image source={categoryImg} style={styles.image} resizeMode="cover" />
      <View style={styles.overlay} />
      <Text style={styles.text}>{categoryName}</Text>
    </TouchableOpacity>
  );
};

const TabBar = () => {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity style={styles.tabItem}>
        <Image source={require('../images/home.png')} style={styles.icon} />
        <Text style={styles.tabText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Image
          source={require('../images/searchYellow.png')}
          style={[styles.icon, styles.activeIcon]}
        />
        <Text style={[styles.tabText, styles.activeText]}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Image
          source={require('../images/order.png')}
          style={styles.icon}
        />
        <Text style={styles.tabText}>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Image
          source={require('../images/profile.png')}
          style={styles.icon}
        />
        <Text style={styles.tabText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const Search_food = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../images/search.png')}
            style={{ width: 24, height: 24, marginRight: 8 }}
          />
          <TextInput placeholder="Search" style={{ fontSize: 20, flex: 1 }} />
        </View>
        <Text style={{ fontSize: 22, fontWeight: '600', marginVertical: 20 }}>
          Top Categories
        </Text>
        <ScrollView
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {dataImg.map((item) => (
            <CategoryCard
              key={item.id}
              categoryName={item.name}
              categoryImg={item.img}
              navigation={navigation}
            />
          ))}
        </ScrollView>
      </View>
      <TabBar />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 160,
    height: 160,
    elevation: 2,
    margin: 5,
  },
  image: {
    width: 160,
    height: 160,
    position: 'absolute',
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent black overlay
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.85)', // Softer white color
    textAlign: 'center',
    position: 'absolute',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    height: 88,
    borderTopWidth: 1,
    borderColor: '#eee',
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
  activeIcon: {
    tintColor: '#eea734', // Orange color
  },
  tabText: {
    marginTop: 5,
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Yu Gothic UI',
    fontWeight: '500',
    lineHeight: 13,
  },
  activeText: {
    color: '#eea734', // Orange color
  },
});

export default Search_food;
