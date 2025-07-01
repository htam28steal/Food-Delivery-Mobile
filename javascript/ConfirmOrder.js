import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

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

const Total = () => {
  return (
    <View style={styles.totalContainer}>
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Subtotal</Text>
        <Text style={styles.totalValue}>AUD$30</Text>
      </View>
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Delivery</Text>
        <Text style={styles.totalValue}>$0</Text>
      </View>
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Total (incl. VAT)</Text>
        <Text style={styles.totalValueHighlight}>AUD$30</Text>
      </View>
    </View>
  );
};

const Actions = () => {
  return (
    <View style={styles.actionsContainer}>
      <TouchableOpacity style={styles.actionRow}>
        <Text style={styles.actionTextHighlight}>Add more items</Text>
        <Text style={styles.actionArrow}>›</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionRow}>
        <Text style={styles.actionText}>Promo code</Text>
        <Text style={styles.actionArrow}>›</Text>
      </TouchableOpacity>
    </View>
  );
};

const CheckoutButton = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.checkoutButton} onPress={()=>{navigation.navigate('Screen_OrderComplete')}}>
      <Text style={styles.checkoutButtonText}>CHECKOUT (AUD $30)</Text>
    </TouchableOpacity>
  );
};

const ConfirmOrder = ({navigation}) => {
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
        <Total />
        <Actions />
      </ScrollView>
      <CheckoutButton navigation={navigation} />
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
  totalContainer: {
    marginVertical: 20,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  totalLabel: {
    fontSize: 16,
    color: '#010f07',
  },
  totalValue: {
    fontSize: 14,
    color: '#010f07',
  },
  totalValueHighlight: {
    fontSize: 14,
    color: '#f8b64c',
    fontWeight: '600',
  },
  actionsContainer: {
    marginVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  actionTextHighlight: {
    fontSize: 16,
    color: '#f8b64c',
  },
  actionText: {
    fontSize: 16,
    color: '#010f07',
  },
  actionArrow: {
    fontSize: 16,
    color: '#010f07',
  },
  checkoutButton: {
    backgroundColor: '#f8b64c',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20
  },
  checkoutButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
    textTransform: 'uppercase',
  },
});

export default ConfirmOrder;