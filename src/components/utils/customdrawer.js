import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import {Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
    return(

        <View style = {{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style = {style.drawerContent}>
                    <View style = {style.userInfoSection}>
                        <View style = {{flexDirection: 'row', marginTop: 15,}}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://starsgab.com/wp-content/uploads/2020/11/14719721_316429742064926_6542378825634807808_n.jpg'
                                }}
                                size = {50}
                            />
                            <View style = {{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style = {style.title}>Tyler1</Title>
                                <Caption style = {style.caption}>@tyler1</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style = {style.bottomDrawerSection}>
                        <DrawerItem
                            icon = {({color, size}) => (
                                <Icon
                                    name = "home-outline"
                                    color = {color}
                                    size = {size}
                                />
                            )}
                            label = "Home"
                            onPress = {() => props.navigation.reset({ index: 0, routes: [{ name:'Home' }] })}
                        />
                        <DrawerItem
                            icon = {({color, size}) => (
                                <Icon
                                    name = "timer-outline"
                                    color = {color}
                                    size = {size}
                                />
                            )}
                            label = "Timelapse"
                            onPress = {() => {props.navigation.navigate('Timelapse')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style = {style.bottomDrawerSection}>
                <DrawerItem
                    icon = {({color, size}) => (
                        <Icon
                            name = "exit-to-app"
                            color = {color}
                            size = {size}
                        />
                    )}
                    label = "Sair"
                    onPress = {() => {props.navigation.replace('Login')}}
                />
            </Drawer.Section>
        </View>

    );
}

const style = StyleSheet.create({

    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        paddingBottom: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    }

})