import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const SingleRestaurant = ({ navigation }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <HeaderImage />
      <RestaurantInfo />
      <ActionButtons />
      <FeaturedItems navigation={navigation} />
      <MenuTabs />
      <MostPopulars />
      <SeaFoods />
    </ScrollView>
  </SafeAreaView>
);

const HeaderImage = () => (
  <View style={styles.headerContainer}>
    <Image
      source={require('../images/SingleRestaurantHeader.png')}
      style={styles.headerImage}
    />
  </View>
);

const RestaurantInfo = () => (
  <View style={styles.infoContainer}>
    <Text style={styles.restaurantName}>Mayfield Bakery & Cafe</Text>
    <Text style={styles.type}>$$ • Chinese • American • Deshi food</Text>
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <Text style={styles.rating}>4.3 </Text>
      <Text style={{ color: '#EEA734' }}>★</Text>
      <Text style={styles.rating}> 200+ Ratings</Text>
    </View>
  </View>
);

const ActionButtons = () => (
  <View style={styles.buttonContainer}>
    <View style={styles.button}>
      <Image
        source={require('../images/SingleRestaurantDelivery.png')}
        style={{ width: 20, height: 20 }}
      />
      <Text style={styles.buttonText}>{'Free\nDelivery'}</Text>
    </View>
    <View style={styles.button}>
      <Image
        source={require('../images/SingleRestaurantClock.png')}
        style={{ width: 20, height: 20 }}
      />
      <Text style={styles.buttonText}>{'25\nMinutes'}</Text>
    </View>
    <View style={styles.takeAwayButton}>
      <Text style={styles.takeAwayText}>TAKE AWAY</Text>
    </View>
  </View>
);

const FeaturedItemsData = [
  {
    id: 1,
    name: 'Cookies Sandwich',
    img: require('../images/CookieSandwich.png'),
  },
  { id: 2, name: 'Chow fun', img: require('../images/ChowFun.png') },
  { id: 3, name: 'Dim SUm', img: require('../images/DimSum.png') },
];

const FeaturedItems = ({navigation}) => (
  <View style={styles.featuredContainer}>
    <Text style={styles.title}>Featured Items</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {FeaturedItemsData.map((item, index) => (
        <TouchableOpacity onPress={()=>{navigation.navigate('AddToOrder')}}>
          <View key={index} style={styles.card}>
            <Image source={item.img} style={styles.image} />
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardSubtitle}>$$ • Chinese</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

const MenuTabs = () => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <View style={styles.menuContainer}>
      {['Beef & Lamb', 'Seafood', 'Appetizers', 'Dim Sum'].map((tab, index) => (
        <Text key={index} style={styles.menuTab}>
          {tab}
        </Text>
      ))}
    </View>
  </ScrollView>
);

const MostPopularsData = [
  {
    id: 1,
    name: 'Cookies Sandwich',
    img: require('../images/CookiesSandwich1.png'),
  },
  {
    id: 2,
    name: 'Combo Burger',
    img: require('../images/ComboBurger.png'),
  },
  {
    id: 3,
    name: 'Combo Sandwich',
    img: require('../images/ComboSandwich.png'),
  },
];

const MostPopulars = () => (
  <View style={styles.popularContainer}>
    <Text style={styles.title}>Most Populars</Text>
    {MostPopularsData.map((item, index) => (
      <TouchableOpacity>
        <View key={index} style={styles.item}>
          <Image source={item.img} style={styles.itemImage} />
          <View style={styles.itemText}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemDesc}>
              Shortbread, chocolate turtle cookies, and red velvet
            </Text>
            <Text style={styles.itemType}>$$ • Chinese</Text>
            <Text style={styles.itemPrice}>AUD$10</Text>
          </View>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

const SeaFoodsData = [
  {
    id: 1,
    name: 'Oyster Dish',
    img: require('../images/OysterDish.png'),
  },
  {
    id: 2,
    name: 'Oyster On Ice',
    img: require('../images/OysterOnIce.png'),
  },
  {
    id: 3,
    name: 'Fried Rice on Pot',
    img: require('../images/FriedRiceonPot.png'),
  },
];

const SeaFoods = () => (
  <View style={styles.popularContainer}>
    <Text style={styles.title}>Sea Foods</Text>
    {SeaFoodsData.map((item, index) => (
      <TouchableOpacity>
        <View key={index} style={styles.item}>
          <Image source={item.img} style={styles.itemImage} />
          <View style={styles.itemText}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemDesc}>
              Shortbread, chocolate turtle cookies, and red velvet
            </Text>
            <Text style={styles.itemType}>$$ • Chinese</Text>
            <Text style={styles.itemPrice}>AUD$10</Text>
          </View>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 280,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    padding: 20,
    rowGap: 10,
    flex: 1,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: '600',
  },
  type: {
    fontSize: 16,
    color: '#868686',
  },
  rating: {
    fontSize: 14,
    color: '#010f07',
    opacity: 0.74,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#010f07',
  },
  takeAwayButton: {
    borderColor: '#eea734',
    borderWidth: 2,
    padding: 8,
    borderRadius: 4,
  },
  takeAwayText: {
    color: '#eea734',
    fontWeight: 700,
  },
  featuredContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 10,
  },
  card: {
    width: 140,
    marginRight: 15,
  },
  image: {
    width: '100%',
    height: 140,
  },
  cardTitle: {
    fontSize: 16,
    marginTop: 8,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#868686',
  },
  menuContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuTab: {
    fontSize: 24,
    marginRight: 20,
  },
  popularContainer: {
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  itemImage: {
    width: 110,
    height: 110,
    marginRight: 10,
  },
  itemText: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '300',
  },
  itemDesc: {
    fontSize: 16,
    color: '#010f07',
    opacity: 0.64,
  },
  itemType: {
    fontSize: 14,
    color: '#010f07',
    opacity: 0.74,
  },
  itemPrice: {
    fontSize: 14,
    color: '#eea734',
    textAlign: 'right',
  },
});

export default SingleRestaurant;
