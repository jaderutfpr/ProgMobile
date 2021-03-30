import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const FormRow = (props) => {

    const {children} = props;
    
    return (

        <View style = {style.container}>
            {children}
        </View>

    );

};

const style = StyleSheet.create({

    container: {

        paddingLeft: 32,
        paddingRight: 32,

    }

});

export default FormRow;