import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const AddPaymentMethodScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add your payment methods</Text>
      <Text style={styles.subHeader}>
        This card will only be charged when you place an order.
      </Text>

      <View style={styles.cardInfo}>
        <Image 
          source={require('../images/card.png')} 
          style={styles.cardIcon} 
        />
        <Text style={styles.cardText}>4343 4343 4343 4343</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.halfInput}>
          <Text style={styles.inputText}>MM/YY</Text>
        </View>
        <View style={styles.halfInput}>
          <Text style={styles.inputText}>CVC</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.addButton} onPress={()=>{navigation.navigate('Screen_Filter')}}>
        <Text style={styles.addButtonText}>ADD CARD</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.scanButton}>
        <Image 
          source={require('../images/camera.png')} 
          style={styles.cameraIcon} 
        />
        <Text style={styles.scanButtonText}>SCAN CARD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: '#010f07',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    textAlign: 'center',
    color: '#868686',
    marginBottom: 40,
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#efefef',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#fafafa',
  },
  cardIcon: {
    width: 34,
    height: 24,
    marginRight: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#868686',
    opacity: 0.64,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  halfInput: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#efefef',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#fafafa',
  },
  inputText: {
    fontSize: 16,
    color: '#868686',
    opacity: 0.64,
  },
  addButton: {
    backgroundColor: '#f8b64c',
    borderRadius: 8,
    paddingVertical: 15,
    marginBottom: 20,
    alignItems: 'center',
    marginTop:250
  },
  addButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  scanButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#efefef',
    borderRadius: 8,
    paddingVertical: 15,
  },
  cameraIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  scanButtonText: {
    fontSize: 14,
    color: '#010f07',
    fontWeight: '600',
    letterSpacing: 1.2,
  },
});

export default AddPaymentMethodScreen;