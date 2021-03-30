import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Dimensions, TouchableOpacity, Text, Button } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FormRow from '../../../components/utils/form';

const AddActivity = ({ navigation }) => {

    const [activity, setActivity] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const date = new Date();

    return(

        <View style = {style.wrapper}>
            <View style = {style.wrapperTop}>
                <Text style = {style.dateStyle}>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</Text>
                <TouchableOpacity onPress = {() => {alert('Importar Imagem')}}>
                    <View style = {style.selectPicture}>
                        <FontAwesome5 name={'camera-retro'} size = {75}></FontAwesome5>
                    </View>
                </TouchableOpacity>
            </View>
            <View style = {style.wrapperBody}>
                <View style = {style.formRowWrapper}>
                    <FormRow>
                        <TextInput 
                            style = {style.textInput}
                            placeholder = "Atividade"
                            value = {activity}
                            onChangeText = {activity => setActivity(activity)}
                        ></TextInput>
                        <TextInput 
                            style = {style.textInput}
                            placeholder = "Titulo"
                            value = {title}
                            onChangeText = {title => setTitle(title)}
                        ></TextInput>
                        <TextInput
                            style = {style.textInput}
                            placeholder = "Descrição"
                            value = {description}
                            onChangeText = {description => setDescription(description)}
                        ></TextInput>
                    </FormRow>
                </View>
                <View style = {style.buttonWrapper}>
                    <Button title = "Confirmar" onPress = {() => {navigation.reset({ index: 0, routes: [{ name:'Home' }] })}}/>
                </View>
            </View>
        </View>

    );

}

export default AddActivity;

const style = StyleSheet.create({

    wrapper: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    wrapperTop: {
        alignItems: 'center',
    },
    wrapperBody: {
        flex: 1,
    },
    selectPicture: {
        height: Dimensions.get('screen').height/4,
        width: Dimensions.get('screen').width/1.2,
        marginBottom: 25,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 15,
        backgroundColor: "#F6F6F9",
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
    },
    formRowWrapper: {
        flex: 1,
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 50,
        paddingLeft: 20,
        paddingRight: 20,
    },
    dateStyle: {
        paddingTop: 12.5,
        paddingBottom: 12.5,
        fontSize: 20,
    },

})