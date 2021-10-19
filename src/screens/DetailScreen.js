import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Layout, Text, Card, Icon, Avatar, Button} from '@ui-kitten/components';
import {ACCENT, PRIMARY} from '../theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import moment from 'moment';
const DetailScreen = () => {
  return (

    <Layout
      style={{
        flex: 1,
        backgroundColor:"#14466b"
      }}>
      <View>
        <ImageBackground
          source={require('../assests/temp.jpeg')}
          style={{
            width: '100%',
            height: 350,
            
          }}
        />
      </View>
      <Card
        style={{
          marginHorizontal: 20,
          borderRadius: 25,
          marginTop: -50,
          backgroundColor:"white"
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
            }}>
            <Text
              category="h6"
              style={{
                color:"#14466b",
                fontFamily: 'Roboto',
                fontSize:18,
                fontWeight:"bold"
              }}>
              Sizing
            </Text>
            <Text
              style={{
                fontFamily: 'Roboto',
              }}>
              Duration 5 days
            </Text>
            <Text
              appearance="hint"
              category="label"
              style={{
                fontFamily: 'roboto',
                color:'black'
              
              }}>
              No of trials left:- 5
            </Text>
          </View>
          <View
            style={{
              // justifyContent: 'flex-end',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}>
            <Icon style={styles.icon} fill="#8F9BB3" name="gift-outline" />
          </View>
        </View>
      </Card>
      <Layout
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingVertical: 5,
          backgroundColor:"#14466b"
          
        }}>
       
        <View
          style={{
            flexGrow: 1,
            
            
          }}>
          <Text
            style={{
              color:"white",
              fontFamily: 'Roboto',
              fontSize:18
              
              
            }}>
            Sizing
          </Text>
          <Text
            style={{
              fontFamily: 'Roboto',
              
            
            }}>
            Duration 5 days
          </Text>
        </View>
        <View>
          <Text>17 Jan,2005</Text>
        </View>
      </Layout>

      <Layout
        style={{
          paddingHorizontal: 20,
          flex: 1,
          backgroundColor:"#14466b"
        }}>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae
          dignissimos impedit praesentium sequi itaque ea eos quisquam minima
          unde dolor quia provident.
        </Text>
      </Layout>

      <Layout
        level="3"
        style={{
          flexDirection: 'row',
          padding: 10,
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          backgroundColor:"white"
        }}>
        <View style={{flexDirection:"row",}}>
        <TouchableOpacity>
        <View style={{marginLeft:"20%"}}>
          <AntDesign name="clockcircleo" color={"#14466b"} size={40} style={{borderRadius:10,padding:5}}/>
          </View>
          </TouchableOpacity>

          <TouchableOpacity>
        <View style={{backgroundColor:"green",width:200,borderRadius:10,justifyContent:"center",height:50}}>
        
         <Text style={{color:"white",textAlign:"center",fontSize:17}}>Email Invoice</Text>
       </View>
       </TouchableOpacity>

       </View>
      </Layout>
    </Layout>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
  },
});
