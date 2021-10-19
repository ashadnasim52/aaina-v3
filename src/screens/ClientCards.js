import React from 'react';
import {
    Container,
    Header,
    CardItem,
    Card,
    Left,
    Right,
    Item,
    Input,
    Button,
    Drawer,
} from 'native-base';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    StatusBar,
    TouchableOpacity,
    Linking,
    TextInput,
} from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Sizing from './Sizing';
import Ettire from './Ettire';
import Sneaky from './Sneaky';
import Instore from './Instore';
import Inapp from './Inapp';
import Inweb from './Inweb';





const ClientCards = (props) => { 
    const nav =useNavigation();
    

    return (
        <>
  
                <View style={{  marginBottom: 60 }}>
                   
                 
                    <View>
                        <TouchableOpacity onPress={() => nav.navigate(props.link)}>

                            <Card style={{ marginTop: 0 }}>
                                <CardItem
                                    style={{
                                        marginLeft: 20,
                                        marginTop: 0,
                                        height: 80,
                                        marginBottom: 30,
                                    }}>
                                    <Left>
                                        <Image
                                            source={props.imgsrc}
                                            style={{
                                                width: 200,
                                                height: 150,
                                                marginBottom: -20,
                                                marginLeft: -38,
                                                marginTop: 0,
                                                borderRadius: 25,
                                            }}
                                        />
                                    </Left>
                                    <Right>
                                        <Text
                                            style={{
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                                color: "#14466b",
                                                marginLeft: 20,
                                            }}> {props.client} </Text>

                                    </Right>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    </View>
                </View>



                </>
                ) 
                }

                export default ClientCards;