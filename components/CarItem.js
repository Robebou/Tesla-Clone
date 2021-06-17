import React from 'react';
import { Text, View, StyleSheet, ImageBackground,Dimensions} from 'react-native';
import StyledButton from './StyledButton';
const CarItem = (props) => {
  const {name, tagline, taglineCTA,image} = props.car;
  console.log(props);
  return (
    <View style = {styles.car}>
      
      <ImageBackground source = {image} style={styles.image}/>
      <View style={styles.carTopInfo}>
        <Text style={styles.titlecar}>{name}</Text>
        <Text style={styles.subtitlecar}>{tagline}</Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <StyledButton title="Custom Order"/>
        <StyledButton title="Existing inventory"/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  car: {
    width: '100%',
    height: Dimensions.get('window').height,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  carTopInfo: {
    marginTop:'30%',
    alignItems:'center'
  },
  titlecar: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  subtitlecar: {
    color: 'grey'
  },
  buttonsWrapper: {
    position: 'absolute',
    bottom: 50,
    width: '90%',
  }
})
export default CarItem;