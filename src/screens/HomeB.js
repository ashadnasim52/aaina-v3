import {Divider, Layout} from '@ui-kitten/components';
import React, {useContext} from 'react';
import {StyleSheet, Text, View, FlatList,TextInput,Image, ScrollView} from 'react-native';
import CustomCards from '../components/CustomCards';
import {AuthContext} from '../context/context';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import ClientHome from './client/Home';
import CompanyHome from './company/Home';
import { TouchableOpacity } from 'react-native-gesture-handler';

const data = [
  {title: 'Title Text', key: 'item1'},


];
const HomeB = ({navigation}) => {
  const {state, dispatch} = useContext(AuthContext);

  return (
    <>
    
    <ScrollView style={{backgroundColor:"#14466b"}}>
    
    <View style={{height:110,}}>
    <View
          style={{
            height: 50,
            backgroundColor: '#fff',
            flexDirection: 'row',
            padding: 5,
            alignItems: 'center',
            borderRadius: 10,
            marginTop: 20,
            marginHorizontal:20
          }}>
          <Icon
            name="search"
            style={{ paddingRight: 10, paddingLeft: 8, fontSize: 17 }}
          />
          <TextInput placeholder="Search Any Products...." />
        </View>
       </View>

  
    <Layout
      style={{
        flex: 1,
        
      }}>
      <Layout
        style={{borderTopRightRadius: 15, borderTopLeftRadius: 15}}
        level="2">
        <FlatList style={{backgroundColor:"#14466b"}}
          // ItemSeparatorComponent={({highlighted}) => <Divider />}
          contentContainerStyle={
            {
              // backgroundColor: '#F6F6F6',
              // borderColor: 'red',
              // borderWidth: 2,
            }
          }
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item, index, separators}) => <CustomCards />
          }
        />
        
        
        
      </Layout>
      
    </Layout>
    <TouchableOpacity onPress={()=>navigation.navigate("WeeklyReport")}>
    <View style={{marginTop:"15%",backgroundColor:"white",marginHorizontal:60,height:50,borderRadius:10}}>
    <Text style={{color:"black",textAlign:"center",fontSize:17,marginTop:13}}>Request for weekly report  <MaterialIcons name="weekend" size={14}/></Text>
    </View>
    </TouchableOpacity>
    </ScrollView> 
    
    </>
  );
};

export default HomeB;

