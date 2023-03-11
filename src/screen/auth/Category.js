import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';
import bachelor from '../..//assets/images/Bachelor.png';
import bussiness from '../..//assets/images/Bussiness.png';
import {useState} from 'react';
import DefaultButton from '../../components/common/DefaultButton';

export default function Category({navigation}) {
  const [category, setCategory] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Select a Category</Text>
      <TouchableOpacity
        onPress={() => setCategory('business')}
        style={[styles.card, {opacity: category == 'business' ? 1 : 0.7}]}>
        <Image source={bussiness} style={styles.img} />
        <Text style={styles.category}>Bussiness</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setCategory('bachelor')}
        style={[styles.card, {opacity: category == 'bachelor' ? 1 : 0.7}]}>
        <Image source={bachelor} style={styles.img} />
        <Text style={styles.category}>Bachelor</Text>
      </TouchableOpacity>
      <DefaultButton
        isDisabled={category == ''}
        onPress={() =>
          navigation.navigate(
            category == bachelor ? 'SignUpBachelor' : 'SignUpBusiness',
            {category},
          )
        }
        type="small"
        isFullWidth={true}
        text="Next"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white.default,
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '70%',
    height: '25%',
    borderRadius: 30,
    overflow: 'hidden',
    position: 'relative',
  },
  img: {width: '100%', height: '100%'},
  txt: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.grey.dark1,
  },
  category: {
    position: 'absolute',
    color: Colors.white.default,
    fontWeight: 'bold',
    fontSize: 20,
    bottom: 10,
    left: 20,
  },
});
