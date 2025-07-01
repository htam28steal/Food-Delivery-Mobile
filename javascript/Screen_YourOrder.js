import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const OrderCard = ({ imageUrl, name, description, price, type, navigation }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('Screen_CofirmOrder')}}>
      <Image
        source={typeof imageUrl === 'string' ? { uri: imageUrl } : imageUrl}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.cardTextContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.cardFooter}>
          <Text style={styles.type}>{type}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
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
          source={require('../images/searchSmall.png')}
          style={styles.icon}
        />
        <Text style={styles.tabText}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tabItem}>
        <Image
          source={require('../images/order.png')}
          style={[styles.icon, styles.activeIcon]}
        />
        <Text style={[styles.tabText, styles.activeText]}>Orders</Text>
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

const Orders = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView style={{ padding: 20 }}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Orders</Text>
          <Text style={styles.clearAll}>Clear all</Text>
        </View>
        <OrderCard
          imageUrl={require('../images/macdono.png')}
          name="McDonald's"
          description="Shortbread, chocolate turtle cookies, and red velvet."
          type="$$ • Chinese"
          price="AUD$10"
          navigation={navigation}
        />
        <OrderCard
          imageUrl={require('../images/res2.png')}
          name="Uncle Boy's"
          description="Shortbread, chocolate turtle cookies, and red velvet."
          type="$$ • Chinese"
          price="AUD$10"
          navigation={navigation}
        />
        <OrderCard
          imageUrl={require('../images/hamber.png')}
          name="The Halal Guys"
          description="Shortbread, chocolate turtle cookies, and red velvet."
          type="$$ • Chinese"
          price="AUD$10"
          navigation={navigation}
        />
        <Text style={styles.proceedPayment}>Proceed Payment</Text>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Past Orders</Text>
          <Text style={styles.clearAll}>Clear all</Text>
        </View>
        <OrderCard
          imageUrl={require('../images/bg.png')}
          name="Cafe Brichor's"
          description="Shortbread, chocolate turtle cookies, and red velvet."
          type="$$ • Chinese"
          price="AUD$10"
          navigation={navigation}
        />
      </ScrollView>
      <TabBar />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },
  cardTextContainer: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '300',
    color: '#010f07',
    lineHeight: 24,
  },
  description: {
    marginVertical: 5,
    fontSize: 16,
    fontWeight: '400',
    color: '#010f07',
    lineHeight: 24,
    opacity: 0.64,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  type: {
    fontSize: 14,
    fontWeight: '400',
    color: '#010f07',
    opacity: 0.74,
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: '#eea734',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '300',
    color: '#868686',
  },
  clearAll: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  proceedPayment: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f8b64c',
    textAlign: 'right',
    marginTop: 20,
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
    tintColor: '#eea734',
  },
  tabText: {
    marginTop: 5,
    fontSize: 10,
    color: '#868686',
    textAlign: 'center',
  },
  activeText: {
    color: '#eea734',
  },
});

export default Orders;
