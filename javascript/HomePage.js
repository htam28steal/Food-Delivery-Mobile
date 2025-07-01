import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView
} from 'react-native';

const HomePage = ({navigation}) => {
  const featuredPartners = [
    {
      key: '1',
      title: 'Krispy Creme',
      subtitle: 'St George Terrace, Perth',
      img: require('../images/KrispyCreme.png'),
    },
    {
      key: '2',
      title: 'Mario Italiano',
      subtitle: 'Hay street , Perth City',
      img: require('../images/MarioItaliano.png'),
    },
  ];

  const bestPicks = [
    {
      key: '1',
      title: "McDonald's",
      subtitle: 'Hay street , Perth City',
      img: require('../images/McDonald2.png'),
    },
    {
      key: '2',
      title: 'The Halal Guys',
      subtitle: 'Hay street , Perth City',
      img: require('../images/TheHalalGuys.png'),
    },
  ];

  const allRestaurants = [
    {
      key: '1',
      title: "McDonald's",
      subtitle: '$$ Chinese - American - Deshi food',
      img: require('../images/McDonald3.png'),
    },
    {
      key: '2',
      title: "McDonald's",
      subtitle: '$$ Chinese - American - Deshi food',
      img: require('../images/CafeBrichor.png'),
    },
    {
      key: '3',
      title: "McDonald's",
      subtitle: '$$ Chinese - American - Deshi food',
      img: require('../images/CafeBrichor1.png'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.deliveryTo}>DELIVERY TO</Text>
        <Text style={styles.address}>HayStreet, Perth</Text>
        <Text style={styles.filter}>Filter</Text>
      </View>

      <Image style={styles.banner} source={require('../images/Header.png')} />

      <Section title="Featured Partners" data={featuredPartners} navigation={navigation} />
      <Image
        style={styles.deliveryBanner}
        source={{ uri: 'https://placeholder.pics/svg/335x119' }}
      />
      <Section title="Best Picks Restaurants by team" data={bestPicks} />
      <SectionVertical title="All Restaurants" data={allRestaurants} />

      <View style={styles.tabBar}>
        <Tab label="Home" img='../images/homeIcon.png' active={true} />
        <Tab label="Search" img='../images/searchIcon.png' />
        <Tab label="Orders" img='../images/orderIcon.png' />
        <Tab label="Profile" img='../images/profileIcon.png' />
      </View>
    </ScrollView>
  );
};

const Section = ({ title, data, navigation }) => (
  <View>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.seeAll} onPress={()=>{navigation.navigate('FeaturedPartners')}}>See all</Text>
    </View>
    <FlatList
      horizontal
      data={data}
      renderItem={({ item }) => (
        <Card title={item.title} subtitle={item.subtitle} img={item.img} />
      )}
      keyExtractor={(item) => item.key}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);

const SectionVertical = ({ title, data }) => (
  <View>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.seeAll}>See all</Text>
    </View>
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <CardVertical title={item.title} subtitle={item.subtitle} img={item.img} />
      )}
      keyExtractor={(item) => item.key}
      showsHorizontalScrollIndicator={false}
    />
  </View>
);


const Card = ({ title, subtitle, img }) => (
  <View style={styles.card}>
    <Image style={styles.cardImage} source={img} />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardSubtitle}>{subtitle}</Text>
  </View>
);

const CardVertical = ({ title, subtitle, img }) => (
  <View style={styles.cardVertical}>
    <Image style={styles.cardImageVertical} source={img} />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardSubtitle}>{subtitle}</Text>
  </View>
);

const Tab = ({ label, img, active }) => (
  <View style={styles.tab}>
  <Image source={{uri: img}} />
    <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>
      {label}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  deliveryTo: {
    color: '#eea734',
    fontWeight: '300',
    textTransform: 'uppercase',
    fontSize: 12,
  },
  address: {
    fontWeight: '300',
    fontSize: 20,
    textAlign: 'center',
  },
  filter: {
    textAlign: 'right',
    position: 'absolute',
    top: 10,
    right: 10,
  },
  banner: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    marginVertical: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 28,
  },
  seeAll: {
    color: '#f8b64c',
  },
  card: {
    width: 200,
    marginVertical: 10,
    padding: 10,
    marginRight: 14,
  },
  cardVertical: {
    width: 400,
    marginVertical: 10,
    padding: 10,
    marginRight: 14,
  },
  cardImage: {
    width: 200,
    height: 160,
    resizeMode: 'cover',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardImageVertical: {
    width: '97%',
    height: 185,
    resizeMode: 'cover',
    borderRadius: 14,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '300',
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#868686',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  tab: {
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 14,
    color: '#868686',
  },
  tabLabelActive: {
    color: '#eea734',
  },
});

export default HomePage;
