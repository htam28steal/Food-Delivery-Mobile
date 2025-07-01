import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const FoodCard = ({ image, name, types, rating, ratingsCount, time, deliveryCost, navigation }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('Screen_FindRestaurant')}}>
      <Image source={image} style={styles.cardImage} />
      <Text style={styles.cardName}>{name}</Text>
      <Text style={styles.cardTypes}>{types}</Text>
      <View style={styles.cardInfo}>
        <Text style={styles.cardRating}>⭐ {rating}  {ratingsCount}</Text>
        <Text style={styles.cardTime}>⏰ {time}</Text>
        <Text style={styles.cardDelivery}>💵 {deliveryCost}</Text>
      </View>
    </TouchableOpacity>
  );
};

const BrowseFoods = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <FoodCard 
          image={require('../images/bf1.png')}
        name="Rich Table"
        types="$$ · Chinese · American · Deshi food"
        rating="4.3"
        ratingsCount="200+ Ratings"
        time="25 Min"
        deliveryCost="Free"
        navigation={navigation}
      />
      <FoodCard 
        image={require('../images/bf2.png')}
        name="Nethai Kitchen"
        types="$$ · Chinese · American · Deshi food"
        rating="4.3"
        ratingsCount="200+ Ratings"
        time="25 Min"
        deliveryCost="Free"
        navigation={navigation}
      />
      <FoodCard 
        image={require('../images/bf3.png')}
        name="Mayfield Bakery & Cafe"
        types="$$ · Chinese · American · Deshi food"
        rating="4.3"
        ratingsCount="200+ Ratings"
        time="25 Min"
        deliveryCost="Free"
        navigation={navigation}
      />
            <FoodCard 
        image={require('../images/bf4.png')}
        name="Mayfield Bakery & Cafe"
        types="$$ · Chinese · American · Deshi food"
        rating="4.3"
        ratingsCount="200+ Ratings"
        time="25 Min"
        deliveryCost="Free"
        navigation={navigation}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  card: {
    marginBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 185,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#010f07',
    marginBottom: 5,
  },
  cardTypes: {
    fontSize: 16,
    color: '#868686',
    marginBottom: 10,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cardRating: {
    fontSize: 12,
    color: '#010f07',
  },
  cardTime: {
    fontSize: 12,
    color: '#010f07',
  },
  cardDelivery: {
    fontSize: 12,
    color: '#010f07',
  },
});

export default BrowseFoods;