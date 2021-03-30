import React from 'react';
import { View, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

Icon.loadFont();
const headerSize = Dimensions.get('screen').height/4;
const pictureSize = headerSize/1.8;

const HeaderLeft = ( {navigation} ) => {

    return(

        <View style = {{flex: 1,}}>
            <View style = {{paddingTop: 10,}}>
                <Icon
                    style = {{paddingLeft: 10}}
                    name = "md-menu"
                    size = {30}
                    color = "#000"
                    onPress = {() => {navigation.openDrawer()}}
                />
            </View>
        </View>

    );

}

const HeaderTitle = () => {

    return(

        <View style = {{alignItems: 'center', flex: 1, justifyContent: 'flex-end', flexDirection: 'column',}}>
            <View style = {{height: headerSize,}}>
                <View style = {{flex: 1, height: pictureSize, width: pictureSize, justifyContent: 'flex-end', paddingBottom: 5,}}>
                    <TouchableOpacity onPress = {() => {alert('Importar Foto de Perfil')}}>
                        <Image 
                        source = {{
                            uri: 'https://starsgab.com/wp-content/uploads/2020/11/14719721_316429742064926_6542378825634807808_n.jpg'
                        }}
                        aspectRatio = {1}
                        resizeMode = "stretch"
                        style = {{
                            borderRadius: 150,
                        }}
                        />
                    </TouchableOpacity>
                </View>
                <Text style = {{textAlign: 'center', textAlignVertical: 'bottom', fontFamily: 'Montserrat-Regular', fontSize: 20, paddingBottom: 5,}}>Tyler1</Text>
            </View>
        </View>

    );

}

const HeaderRight = () => {

    return (

        <></>

    );

}

export { HeaderLeft };
export { HeaderTitle };
export { HeaderRight };