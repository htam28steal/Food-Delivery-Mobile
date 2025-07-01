import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const OrderItem = ({ quantity, name, description, price }) => {
  return (
    <View style={styles.orderItem}>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantity}>{quantity}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.itemName}>{name}</Text>
        <Text style={styles.itemDescription}>{description}</Text>
      </View>
      <Text style={styles.itemPrice}>{price}</Text>
    </View>
  );
};

const OrderSuccess = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.successContainer} onPress={()=>{navigation.navigate('Screen_AccountSetting')}}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../images/done.png')}
          style={styles.successIcon}
        />
      </View>
      <Text style={styles.successTitle}>You Place the Order Successfully</Text>
      <Text style={styles.successMessage}>
        You placed the order successfully. You will get your food within 25 minutes. Thanks for using our services. Enjoy your food :)
      </Text>
      <TouchableOpacity>
        <Text style={styles.keepBrowsing}>KEEP BROWSING</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const OrderComplete = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>McDonald's</Text>
        <OrderItem
          quantity="1"
          name="Cookie Sandwich"
          description="Shortbread, chocolate turtle cookies, and red velvet."
          price="AUD$10"
        />
        <OrderItem
          quantity="1"
          name="Combo Burger"
          description="Shortbread, chocolate turtle cookies, and red velvet."
          price="AUD$10"
        />
        <OrderItem
          quantity="2"
          name="Oyster Dish"
          description="Shortbread, chocolate turtle cookies, and red velvet."
          price="AUD$10"
        />
        <OrderSuccess navigation={navigation} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '300',
    color: '#010f07',
    alignSelf: 'center',
    marginBottom: 20,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  quantityContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f8b64c',
    borderRadius: 4,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  quantity: {
    color: '#f8b64c',
  },
  detailsContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '300',
    color: '#010f07',
  },
  itemDescription: {
    fontSize: 16,
    color: '#010f07',
    opacity: 0.64,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#f8b64c',
  },
  successContainer: {
    backgroundColor: '#F8EDDC',
    borderRadius: 18,
    padding: 20,
    alignItems: 'center',
    marginVertical: 20,
  },
  iconContainer: {
    backgroundColor: '#f8b64c',
    borderRadius: 35,
    padding: 15,
    marginBottom: 20,
  },
  successIcon: {
    width: 70,
    height: 75,
  },
  successTitle: {
    fontSize: 20,
    fontWeight: '300',
    color: '#010f07',
    marginBottom: 10,
    textAlign: 'center',
  },
  successMessage: {
    fontSize: 16,
    color: '#868686',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  keepBrowsing: {
    fontSize: 12,
    fontWeight: '300',
    color: '#eea734',
    textTransform: 'uppercase',
  },
});

export default OrderComplete;