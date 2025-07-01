import { View, Text, Image, StyleSheet } from 'react-native';

const SearchResultCard = ({ name, types, time, deliveryFee, rating }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://placeholder.pics/svg/160x280' }}
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
       <Text style={styles.types}>{Array.isArray(types) ? types.join(' • ') : ''}</Text>
        <View style={styles.info}>
          <View style={styles.iconText}>
            <Image
              source={{ uri: 'https://placeholder.pics/svg/16x16' }}
              style={styles.icon}
            />
            <Text style={styles.infoText}>{time}</Text>
          </View>
          <View style={styles.iconText}>
            <Image
              source={{ uri: 'https://placeholder.pics/svg/16x16' }}
              style={styles.icon}
            />
            <Text style={styles.infoText}>{deliveryFee}</Text>
          </View>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    marginVertical: 10,
    marginHorizontal: 8,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 280,
    borderRadius: 8,
  },
  details: {
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: '300',
  },
  types: {
    fontSize: 16,
    color: '#868686',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  infoText: {
    fontSize: 12,
    color: '#fff',
  },
  rating: {
    backgroundColor: '#f39c12',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
});

export default SearchResultCard;