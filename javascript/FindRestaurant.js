import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const RestaurantCard = ({ image, name, type, rating, delivery, time }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={image} style={styles.cardImage} />
      <View style={styles.cardOverlay}>
        <Text style={styles.cardTime}>{time}</Text>
        <Text style={styles.cardDelivery}>{delivery}</Text>
        <Text style={styles.cardRating}>{rating}</Text>
      </View>
      <Text style={styles.cardName}>{name}</Text>
      <Text style={styles.cardType}>{type}</Text>
    </TouchableOpacity>
  );
};

const FindRestaurants = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../images/map.png')} style={styles.mapImage} />
      <Text style={styles.title}>Top Pick Restaurants</Text>
      <View style={styles.categories}>
        <TouchableOpacity style={styles.categoryActive}>
          <Text style={styles.categoryTextActive}>Burgers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryText}>Brunch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryText}>Breakfast</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.grid}>
        <RestaurantCard
          image={require('../images/bf1.png')}
          name="Nethai Kitchen"
          type="Chinese · American"
          rating="4.5"
          delivery="Free"
          time="25min"
        />
        <RestaurantCard
         image={require('../images/bf2.png')}
          name="Lazy Bear"
          type="Chinese · American"
          rating="4.5"
          delivery="Free"
          time="25min"
        />
        <RestaurantCard
          image={require('../images/bf3.png')}
          name="State Bird"
          type="Chinese · American"
          rating="4.5"
          delivery="Free"
          time="10min"
        />
        <RestaurantCard
          image={require('../images/bf4.png')}
          name="Petit Creen"
          type="Chinese · American"
          rating="4.5"
          delivery="Free"
          time="5min"
        />
        <RestaurantCard
         image={require('../images/res1.png')}
          name="Rich Table"
          type="Chinese · American"
          rating="4.5"
          delivery="Free"
          time="25min"
        />
        <RestaurantCard
          image={require('../images/res2.png')}
          name="Cotogna"
          type="Chinese · American"
          rating="4.5"
          delivery="Free"
          time="45min"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#010f07',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  category: {
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  categoryActive: {
    backgroundColor: '#fee8c8',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  categoryText: {
    fontSize: 12,
    color: '#010f07',
  },
  categoryTextActive: {
    fontSize: 12,
    color: '#f8b64c',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  card: {
    width: '45%',
    marginBottom: 20,
  },
  cardImage: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
    position: 'relative',
  },
  cardOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    padding: 10,
    height:'70%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  cardTime: {
    color: '#fff',
    fontSize: 12,
    position:'absolute',
    bottom:25,
    left:10
  },
  cardDelivery: {
    color: '#fff',
    fontSize: 13,
    fontWeight:500,
    position:'absolute',
    bottom:5,
    left:10
  },
  cardRating: {
    alignSelf: 'flex-end',
    backgroundColor: '#f8b64c',
    color: '#fff',
    fontSize: 12,
    paddingHorizontal: 5,
    borderRadius: 5,
    position:'absolute',
    bottom:10
  },
  cardName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#010f07',
    marginBottom: 5,
  },
  cardType: {
    fontSize: 14,
    color: '#868686',
  },
});

export default FindRestaurants;