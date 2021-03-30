import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ActivityCard = ({ atividade }) => {

    return(

            <View style = {styles.wrapper}>
                <View style = {styles.container}>

                    <View style = {styles.cardContainer}>

                        <Image
                            source = {
                                {uri: atividade.img}
                            }
                            aspectRatio = {1}
                            resizeMode = "cover"
                        />

                    </View>
                    <View style = {styles.cardTitleContainer}>
                        <View style = {{flex: 1, justifyContent: 'center',}}>
                            <Text style = {styles.cardTitle}>{ `${atividade.description}` }</Text>
                        </View>
                        <View style = {{flex: 0.3, alignItems: 'flex-end', justifyContent: 'center',}}>
                            <FontAwesome5 name={atividade.icon} size = {25} light></FontAwesome5>
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
        marginBottom: 25,
        marginLeft: 25,
        marginRight: 25,
    },
    cardContainer: {
        flex: 1
    },
    cardTitleContainer: {
        padding: 25,
        backgroundColor: "#FFF",
        flexDirection: 'row',
    },
    cardTitle: {
        color: '#35343D',
        fontSize: 15,
        textAlign: 'left',
        fontFamily: 'Montserrat-Regular',
    },

});

export default ActivityCard;