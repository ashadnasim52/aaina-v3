import React from 'react';

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

import {  useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ClientCards from "./ClientCards"
import ClientCards1 from "./ClientCards1"

const deepakimg = require('../assests/img/Deepak_Garments.jpg');
const chahanimg = require('../assests/img/Chauhan_Lifestyle.jpg');
const benzorimg = require('../assests/img/Benzor.jpg');
const Leatherimg = require('../assests/img/Leather_Home.jpg');
const Lookimg = require('../assests/img/look_me.jpg');
const Glitzimg = require('../assests/img/g_g.jpg');




const B2cpagemain = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const client = [
        {
            imgsrc: deepakimg,
            client: "Deepak Garments",
            link: "B2C",
        },
      
      
    ]

    const client1 =[
        {
            imgsrc: chahanimg,
            client: "Chauhan Lifestyle",
            link: "Chaudhary_Garments",
        },
    ]

    const client2 =[
        
            {
                imgsrc: benzorimg,
                client: "Benzor",
                link: "Benzor",
               
            },
    ]

    const client3 =[
       
        {
            imgsrc: Leatherimg,
            client: "Leather",
            link: "Leather",
        }, 
    ]
    
    const client4 =[
       
        {
            imgsrc: Lookimg,
            client: "Look@me",
            link: "Look",
           
        }, 
    ]
    const client5 =[
       
        {
            imgsrc: Glitzimg,
            client: "Glitz & Glamour",
            link: "Glitz",
        }, 
    ]





    const nav = useNavigation();


    const onChangeSearch = (text) => {
        setSearchQuery(text);
        console.log(text)
    }



    return (
        <>

            <ScrollView style={{ backgroundColor: "#14466b" }}>

                <View
                    style={{
                        backgroundColor: "#14466b",
                        height: 100,
                        justifyContent: 'center',
                        paddingHorizontal: 20,
                        marginTop: 0
                    }}>
                    <View
                        style={{
                            height: 50,
                            backgroundColor: '#fff',
                            flexDirection: 'row',
                            padding: 5,
                            alignItems: 'center',
                            borderRadius: 15,
                        }}>
                        <Icon
                            name="search"
                            style={{ paddingRight: 10, paddingLeft: 8, fontSize: 17 }}
                        />
                        <TextInput placeholder="Search Any Client"
                            onChangeText={(text) => onChangeSearch(text)}
                       
                        />
                    </View>
                </View>


                <View style={{ marginBottom: 60 }}>
                    <View>

                    </View>
                    <View style={{ inlineHeight: 40 }}>
                        <Text
                            style={{
                                fontSize: 30,
                                textAlign: 'center',
                                color: 'black',
                                marginBottom: 40,
                                color: "white",
                                fontWeight: "bold",
                                marginTop: -10
                            }}>
                            Our Clients
                          </Text>
                    </View>

                    <View >
                        {
                            client
                                .filter((f) => {
                                    if (searchQuery == '')
                                        return true
                                    //else if (f.client.toLocaleLowerCase() == searchQuery.toLocaleLowerCase())
                                      else if(new RegExp(f.client,'gi').test(searchQuery))
                                        return true
                                    else
                                        false
                                })
                                .map((c) => {
                                    return (
                                        
                                        <ClientCards
                                            imgsrc={c.imgsrc}
                                            client={c.client}
                                            link={c.link}
                                        />
                                    )
                                })
                        }
                        {
                            client1
                                .filter((f) => {
                                    if (searchQuery == '')
                                        return true
                                    //else if (f.client.toLocaleLowerCase() == searchQuery.toLocaleLowerCase())
                                      else if(new RegExp(f.client,'gi').test(searchQuery))
                                        return true
                                    else
                                        false
                                })
                                .map((c) => {
                                    return (
                                        
                                        <ClientCards1
                                            imgsrc={c.imgsrc}
                                            client={c.client}
                                            link={c.link}
                                        />
                                    )
                                })
                        }
                        {
                            client2
                                .filter((f) => {
                                    if (searchQuery == '')
                                        return true
                                    //else if (f.client.toLocaleLowerCase() == searchQuery.toLocaleLowerCase())
                                      else if(new RegExp(f.client,'gi').test(searchQuery))
                                        return true
                                    else
                                        false
                                })
                                .map((c) => {
                                    return (
                                        
                                        <ClientCards1
                                            imgsrc={c.imgsrc}
                                            client={c.client}
                                            link={c.link}
                                        />
                                    )
                                })
                        }
                        {
                            client1
                                .filter((f) => {
                                    if (searchQuery == '')
                                        return true
                                    //else if (f.client.toLocaleLowerCase() == searchQuery.toLocaleLowerCase())
                                      else if(new RegExp(f.client,'gi').test(searchQuery))
                                        return true
                                    else
                                        false
                                })
                                .map((c) => {
                                    return (
                                        
                                        <ClientCards1
                                            imgsrc={c.imgsrc}
                                            client={c.client}
                                            link={c.link}
                                        />
                                    )
                                })
                        }
                        {
                            client2
                                .filter((f) => {
                                    if (searchQuery == '')
                                        return true
                                    //else if (f.client.toLocaleLowerCase() == searchQuery.toLocaleLowerCase())
                                      else if(new RegExp(f.client,'gi').test(searchQuery))
                                        return true
                                    else
                                        false
                                })
                                .map((c) => {
                                    return (
                                        
                                        <ClientCards1
                                            imgsrc={c.imgsrc}
                                            client={c.client}
                                            link={c.link}
                                        />
                                    )
                                })
                        }
                        {
                            client3
                                .filter((f) => {
                                    if (searchQuery == '')
                                        return true
                                    //else if (f.client.toLocaleLowerCase() == searchQuery.toLocaleLowerCase())
                                      else if(new RegExp(f.client,'gi').test(searchQuery))
                                        return true
                                    else
                                        false
                                })
                                .map((c) => {
                                    return (
                                        
                                        <ClientCards1
                                            imgsrc={c.imgsrc}
                                            client={c.client}
                                            link={c.link}
                                        />
                                    )
                                })
                        }
                    </View>


                </View>
            </ScrollView>
        </>
    );
};

export default B2cpagemain;


