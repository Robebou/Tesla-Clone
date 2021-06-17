import React from 'react'
import {View,StyleSheet, Pressable,Text} from 'react-native'


const StyledButton = (props) => {
    const title = props.title;
    return(
        <View style={styles.container}>
            <Pressable
            style={styles.button}
            onPress={() => onPress()}
            >
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </View>
        
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#171A20CC',
        height: 50,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    container: {
        width: '100%',
    },
    text: {
        color: 'white'
    }
})

export default StyledButton;