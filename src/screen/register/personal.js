import React from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import FormRow from '../../components/utils/form';

export default class PRegister extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
    
            name: "",
            height: "",
            weight: "",
            sex: "",
    
        }
    
    }

    onChangeHandler(field, valor) {

        this.setState({
    
            [field]: valor
    
        });
    
    }

    renderButton() {

        if(this.state.isLoading)
            return <ActivityIndicator></ActivityIndicator>;
        return(

            <Button title = "Próximo" onPress = {() => this.props.navigation.reset({ index: 0, routes: [{ name:'Login' }] })}></Button>

        );

    }

    render() {

        return(

            <View style = {style.wrapper}>
                <View style = {style.topWrapper}>
                    <View style = {style.textWrapper}>
                        <Text style = {style.textStyle}>DADOS PESSOAIS</Text>
                    </View>
                    <View style = {style.subTextWrapper}>
                        <Text style = {style.subTextStyle}>Por favor informe seus dados pessoais.</Text>
                        <Text style = {style.subTextStyle}>Seus dados serão utilizados para o processo</Text>
                        <Text style = {style.subTextStyle}>de geração de histórico e timelapse.</Text>
                    </View>
                </View>
                <View style = {style.midWrapper}>
                    <View style = {style.formRowWrapper}>
                        <FormRow>
                            <TextInput 
                                style = {style.textInput}
                                placeholder = "Nome"
                                value = {this.state.name}
                                maxLength = {30}
                                onChangeText = {valor => {this.onChangeHandler('name', valor)}}
                            ></TextInput>
                            <TextInput 
                                style = {style.textInput}
                                placeholder = "Altura (cm)"
                                value = {this.state.height}
                                keyboardType = 'numeric'
                                maxLength = {3}
                                onChangeText = {valor => {this.onChangeHandler('height', valor)}}
                            ></TextInput>
                        </FormRow>
                        <FormRow>
                            <TextInput 
                                style = {style.textInput}
                                placeholder = "Peso (kg)"
                                value = {this.state.weight}
                                keyboardType = 'numeric'
                                maxLength = {3}
                                onChangeText = {valor => {this.onChangeHandler('weight', valor)}}
                            ></TextInput>
                        </FormRow>
                    </View>
                </View>
                <View style = {style.botWrapper}>
                    <View style = {style.buttonWrapper}>
                        {this.renderButton()}
                    </View>
                </View>
            </View>

        );

    }

}

const style = StyleSheet.create({

    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
    },
    topWrapper: {
        flex: 1,
    },
    midWrapper: {
        flex: 1,
    },
    botWrapper: {
        flex: 0.5,
    },
    textWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    subTextWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    textStyle: {
        fontSize: 35,
        fontFamily: 'Oswald-Medium',
    },
    subTextStyle: {
        fontSize: 16,
        fontFamily: 'Roboto',
    },
    formRowWrapper: {
        flex: 5,
        justifyContent: 'flex-start',
    },
    textInput: {
        borderBottomWidth: 1,
        borderBottomColor: '#E6E6E6',
    },
    buttonWrapper: {
        flex: 1,
        paddingRight: 20,
        paddingLeft: 20,
        justifyContent: 'center',
    },

})