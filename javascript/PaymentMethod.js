import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PaymentMethod = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment Methods</Text>
      <Image
        source={require('../images/IconCreditcard.png')}
        style={styles.cardImage}
      />
      <Text style={styles.cardTitle}>Don’t have any card :)</Text>
      <Text style={styles.cardMessage}>
        It’s seems like you have not added any credit or debit card. You may easily add card.
      </Text>
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Screen_CardList')}}>
        <Text style={styles.buttonText}>ADD CREDIT CARDS</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#010f07',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardImage: {
    width: 125,
    height: 125,
    marginBottom: 30,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#010f07',
    textAlign: 'center',
    marginBottom: 10,
  },
  cardMessage: {
    fontSize: 16,
    fontWeight: '400',
    color: '#868686',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eea734',
    height: 38,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#eea734',
    textTransform: 'uppercase',
  },
});

export default PaymentMethod;