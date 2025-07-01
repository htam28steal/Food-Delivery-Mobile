import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const OrderItem = ({ quantity, itemName, description, price }) => (
  <View style={styles.orderItem}>
    <View style={styles.quantityBox}>
      <Text style={styles.quantityText}>{quantity}</Text>
    </View>
    <View style={styles.details}>
      <Text style={styles.itemName}>{itemName}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    <Text style={styles.price}>{price}</Text>
  </View>
);

const OrderSummary = () => (
  <View style={styles.summary}>
    <View style={styles.summaryRow}>
      <Text style={styles.summaryLabel}>Subtotal</Text>
      <Text style={styles.summaryAmount}>AUD$30</Text>
    </View>
    <View style={styles.summaryRow}>
      <Text style={styles.summaryLabel}>Delivery</Text>
      <Text style={styles.summaryAmount}>$0</Text>
    </View>
  </View>
);

const AddMoreSection = () => (
  <View style={styles.addMoreSection}>
    <TouchableOpacity style={styles.addMoreRow}>
      <Text style={styles.addMoreText}>Add more items</Text>
      <Image source={require('../images/next.png')} style={styles.icon} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.addMoreRow}>
      <Text style={styles.promoText}>Promo code</Text>
      <Image source={require('../images/next.png')} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

const PrimaryButton = ({ label , navigation}) => (
  <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('ScreenPayment')}}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const YourOrder = ({navigation}) => {
  return (
    <View style={styles.container}>
      <OrderItem
        quantity="1"
        itemName="Cookie Sandwich"
        description="Shortbread, chocolate turtle cookies, and red velvet."
        price="AUD$10"
      />
      <OrderItem
        quantity="1"
        itemName="Combo Burger"
        description="Shortbread, chocolate turtle cookies, and red velvet."
        price="AUD$10"
      />
      <OrderItem
        quantity="2"
        itemName="Oyster Dish"
        description="Shortbread, chocolate turtle cookies, and red velvet."
        price="AUD$10"
      />
      <OrderSummary />
      <AddMoreSection />
      <PrimaryButton label="Continue (AUD $30)" navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    gap:60,
    borderColor: '#efefef',
  },
  quantityBox: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: '#f8b64c',
    borderWidth: 1,
  },
  quantityText: {
    color: '#f8b64c',
    fontSize: 14,
    fontWeight: '500',
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: '300',
    color: '#010f07',
  },
  description: {
    fontSize: 16,
    color: '#010f07',
    opacity: 0.64,
  },
  price: {
    fontSize: 14,
    color: '#f8b64c',
    fontWeight: '600',
  },
  summary: {
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#efefef',
    marginVertical: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,

  },
  summaryLabel: {
    fontSize: 16,
    marginTop:20,
  },
  summaryAmount: {
    fontSize: 16,
    fontWeight: '600',
  },
  addMoreSection: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    gap:10,
    borderColor: '#efefef',
    marginVertical: 10,
    marginTop:10,
  },
  addMoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:10,
    paddingVertical: 10,
  },
  addMoreText: {
    fontSize: 16,
    color: '#f8b64c',
  },
  promoText: {
    fontSize: 16,
    color: '#010f07',
  },
  icon: {
    width: 24,
    height: 24,
  },
  button: {
    marginVertical: 20,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8b64c',
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
});

export default YourOrder;