import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CardItem = ({ imageUrl, cardName, status, navigation }) => {
  return (
    <TouchableOpacity style={styles.cardItem} onPress={()=>{navigation.navigate('Screen_Location')}}>
      <Image
        source={typeof imageUrl === 'string' ? { uri: imageUrl } : imageUrl}
        style={styles.cardIcon}
      />
      <View style={styles.cardDetails}>
        <Text style={styles.cardName}>{cardName}</Text>
        <Text style={styles.cardStatus}>{status}</Text>
      </View>
      <Image
        source={require('../images/next.png')}
        style={styles.forwardIcon}
      />
    </TouchableOpacity>
  );
};

const CardList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Methods</Text>
      <CardItem
        imageUrl={require('../images/palpay.png')}
        cardName="PayPal"
        status="Default Payment"
        navigation={navigation}
      />
      <CardItem
        imageUrl={require('../images/mastercard.png')}
        cardName="MasterCard"
        status="Not Default"
        navigation={navigation}
      />
      <CardItem
        imageUrl={require('../images/visa.png')}
        cardName="Visa"
        status="Not Default"
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#010f07',
    alignSelf: 'center',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  cardIcon: {
    width: 40,
    height: 34,
    marginRight: 15,
  },
  cardDetails: {
    flex: 1,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#010f07',
  },
  cardStatus: {
    fontSize: 14,
    fontWeight: '500',
    color: 'grey',

  },
  forwardIcon: {
    width: 24,
    height: 24,
    tintColor: '#010f07',
  },
});

export default CardList;
