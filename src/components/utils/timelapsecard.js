import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const TimelapseCard = ({ medida }) => {

    return(

            <View style = {styles.wrapper}>
                <View style = {styles.container}>

                    <View style = {styles.cardContainer}>

                        <Image
                            source = {
                                {uri: medida.img}
                            }
                            aspectRatio = {1}
                            resizeMode = "cover"
                            style = {{}}
                        />

                    </View>
                    <View style = {styles.cardTitleContainer}>
                        <View style = {{flex: 1,}}>
                            <Text style = {styles.cardTitle}>{ `${medida.date}` }</Text>
                        </View>
                    </View>

                </View>
            </View>

    );
    
}

const styles = StyleSheet.create({

    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        width: Dimensions.get('window').width*0.875,
        marginBottom: 25,
        marginLeft: 25,
        marginRight: 25,
    },
    cardContainer: {
        flex: 1,
    },
    cardTitleContainer: {
        flex: 0.06,
        padding: 25,
        backgroundColor: "#FFF",
    },
    cardTitle: {
        flex: 1,
        color: '#35343D',
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
    },

});

export default TimelapseCard;