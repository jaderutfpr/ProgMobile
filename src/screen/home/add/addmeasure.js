import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Dimensions, TouchableOpacity, Text, Button, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FormRow from '../../../components/utils/form';

const AddMeasure = ({ navigation }) => {

    const [weight, setWeight] = useState('');
    const [torax, setTorax] = useState('');
    const [waist, setWaist] = useState('');
    const [biceps, setBiceps] = useState('');
    const [hip, setHip] = useState('');
    const [thighs, setThighs] = useState('');
    const [calf, setCalf] = useState('');
    const [glutes, setGlutes] = useState('');
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
                    <ScrollView>
                    <FormRow>
                        <TextInput 
                            style = {style.textInput}
                            placeholder = "Peso"
                            value = {weight}
                            onChangeText = {weight => setWeight(weight)}
                            keyboardType = 'numeric'
                            maxLength = {3}
                        ></TextInput>
                        <TextInput
                            style = {style.textInput}
                            placeholder = "Tórax"
                            value = {torax}
                            onChangeText = {torax => setTorax(torax)}
                            keyboardType = 'numeric'
                            maxLength = {3}
                        ></TextInput>
                        <TextInput 
                            style = {style.textInput}
                            placeholder = "Cintura"
                            value = {waist}
                            onChangeText = {waist => setWaist(waist)}
                            keyboardType = 'numeric'
                            maxLength = {3}
                        ></TextInput>
                        <TextInput
                            style = {style.textInput}
                            placeholder = "Bíceps"
                            value = {biceps}
                            onChangeText = {biceps => setBiceps(biceps)}
                            keyboardType = 'numeric'
                            maxLength = {3}
                        ></TextInput>
                        <TextInput 
                            style = {style.textInput}
                            placeholder = "Quadril"
                            value = {hip}
                            onChangeText = {hip => setHip(hip)}
                            keyboardType = 'numeric'
                            maxLength = {3}
                        ></TextInput>
                        <TextInput
                            style = {style.textInput}
                            placeholder = "Coxas"
                            value = {thighs}
                            onChangeText = {thighs => setThighs(thighs)}
                            keyboardType = 'numeric'
                            maxLength = {3}
                        ></TextInput>
                        <TextInput 
                            style = {style.textInput}
                            placeholder = "Panturrilha"
                            value = {calf}
                            onChangeText = {calf => setCalf(calf)}
                            keyboardType = 'numeric'
                            maxLength = {3}
                        ></TextInput>
                        <TextInput
                            style = {style.textInput}
                            placeholder = "Glúteos"
                            value = {glutes}
                            onChangeText = {glutes => setGlutes(glutes)}
                            keyboardType = 'numeric'
                            maxLength = {3}
                        ></TextInput>
                    </FormRow>
                    </ScrollView>
                </View>
                <View style = {style.buttonWrapper}>
                    <Button title = "Confirmar" onPress = {() => {navigation.reset({ index: 0, routes: [{ name:'Home' }] })}}/>
                </View>
            </View>
        </View>

    );

}

export default AddMeasure;

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
        flex: 5,
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 30,
        paddingLeft: 20,
        paddingRight: 20,
    },
    dateStyle: {
        paddingTop: 12.5,
        paddingBottom: 12.5,
        fontSize: 20,
    },

})