import React from 'react'
import {View, Text, FlatList, StyleSheet} from 'react-native'
import CarItem from '../CarItem';

import cars from './cars';


const CarList = (props) => {
    console.log(cars)
    return(
    <View style={styles.cars_container}>
        <FlatList 
        data={cars} 
        keyExtractor={(item) => item.name}
        alwaysBounceVertical={false}
        renderItem={({item}) => <CarItem car ={item}/>}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    cars_container: {
        width:'100%'
    }
})

export default CarList;