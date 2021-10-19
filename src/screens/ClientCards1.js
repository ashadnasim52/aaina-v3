import React from 'react';
import {
    CardItem,
    Card,
    Left,
    Right,
} from 'native-base';

import {
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const ClientCards1 = (props) => {
    const nav = useNavigation();


    return (
        <>

            <View style={{ marginBottom: 60 }}>
                <TouchableOpacity onPress={() => nav.navigate(props.link)}>
                    <Card style={{ marginTop: 0 }}>
                        <CardItem
                            style={{
                                marginLeft: 20,
                                marginTop: 50,
                                height: 30,
                                marginBottom: 30,
                            }}>
                            <Left>
                                <Text
                                    style={{
                                        fontSize: 18,
                                        fontWeight: 'bold',
                                        color: '#14466b',
                                        marginTop: -40,
                                        marginLeft: -10,
                                        marginRight: 80
                                    }}>
                                    {props.client}
                                </Text>

                            </Left>
                            <Right>
                                <Image
                                    source={props.imgsrc}
                                    style={{
                                        width: 200,
                                        height: 150,
                                        marginBottom: -12,
                                        marginRight: -17,
                                        marginTop: -35,
                                        borderRadius: 25,
                                    }}
                                />
                            </Right>
                        </CardItem>
                    </Card>
                </TouchableOpacity>
            </View>


        </>
    )
}

export default ClientCards1;