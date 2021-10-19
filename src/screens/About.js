import React from 'react';

import {
  ScrollView,
  View,
  Image,
  Text,
  TextInput,
  LogBox,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/core';
import About1 from "./About1"
import About2 from "./About2"
import { log, Value } from 'react-native-reanimated';
import {widthToDp, heightToDp} from "./Responsive"

const img1=require('../assests/img/sizing2.webp')
const img2= require('../assests/img/inweb3.png')
const img3=require('../assests/img/sneaky1.jpg')
const img4=require('../assests/img/instore10.png')
const img5=require('../assests/img/inapp10.png')
const img6=require('../assests/img/inweb10.png')


const About = (props) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const nav = useNavigation();

  const products = [
    {
        imgsrc: img1,
        product: "Sizing",
        link: "Sizing",
    },
    {
      imgsrc: img2,
      product: "Ettire",
      link: "Ettire",
  },
  {
    imgsrc: img3,
    product: "Sneaky",
    link: "Sneaky",
},
  ]

  const service1 = [
    {
        imgsrc: img4,
        serve: "In Store",
        link: "Instore",
    },
    {
      imgsrc: img5,
      serve: "In App",
      link: "Inapp",
  },
  {
    imgsrc: img6,
    serve: "In Web",
    link: "Inweb",
},
  ]

  const onChangeSearch1= (text) => {
    setSearchQuery(text);
    console.log(text)
}

  return (
    <>
    
      <ScrollView style={{backgroundColor:"#14466b"}}>
      <View
          style={{
            backgroundColor: "#14466b",
            height: heightToDp(number=13),
            justifyContent: 'center',
            paddingHorizontal: widthToDp(number=6),
            marginTop:0
            
          }}>
          <View
            style={{
              height: heightToDp(number=8),
              backgroundColor: '#fff',
              flexDirection: 'row',
              padding: 5,
              alignItems: 'center',
              borderRadius: 15,
            }}>
            <Icon
              name="search"
              style={{ paddingRight: widthToDp(number=3), paddingLeft: widthToDp(number=3), fontSize: widthToDp(number=4) }}
            />
            <TextInput placeholder="Search here" 
              onChangeText={(text) => onChangeSearch1(text)}
            />
          </View>
        </View>

        <View style={{ marginBottom:heightToDp(number=1)}}>
          <View>
            <Text style={{fontSize:widthToDp(number=8), textAlign: 'center', color: 'white',}}>
             Why AAIENA ?
            </Text>
            <Text style={{color: 'black', marginLeft:widthToDp(number=3),color:"white",marginTop:widthToDp(number=2),fontFamily:"sans-serif-light",fontSize:widthToDp(number=4.4)}}>
            AAIENA is the perfect amalgamation of Artificial Intelligence and Virtual Reality, which sprinkles its magic in the form of a contactless virtual trial room. The virtual avatar created through AAIENA is an outcome that can facilitate the trial prospect to the next level.
            </Text>
          </View>
          <View >
            <Text
              style={{
                marginTop:heightToDp(number=2),
                fontSize: widthToDp(number=8),
                textAlign: 'center',
                color: 'white',
                marginBottom: heightToDp(number=4),
                textDecorationLine:"underline"
             
              }}>
              Our Products
            </Text>
          </View>


{/* ============================products======================================================= */}
  <View>
  {
    
    

                            products
                                .filter((p) => {
                                    if (searchQuery == '')
                                    
                                        return true
                                    //else if (f.client.toLocaleLowerCase() == searchQuery.toLocaleLowerCase())
                                      else if(new RegExp(p.product,'gi',).test(searchQuery)){
                                   
                                        return true}
                                    else {
                                        false}
                                })
                              .map((c) => {
                                    return (
                                        
                                        <About1
                                            imgsrc={c.imgsrc}
                                            product={c.product}
                                            link={c.link}
                                        />
                                    )
                                })
                        }
  </View>
         </View>
     
                                
{/* ================================product ends here ==============================================        */}
 

        <View>
          <Text style={{fontSize: 30, textAlign: 'center', marginBottom: 40,color:"white"}}>
            Our Services
          </Text>

          {/* ==========================Services start ================================================== */}
        <View>
  {
                            service1
                                .filter((p) => {
                                    if (searchQuery == '')
                                        return true
                                    //else if (f.client.toLocaleLowerCase() == searchQuery.toLocaleLowerCase())
                                      else if(new RegExp(p.service1,'gi').test(searchQuery)){
                                        
                                        return false}
                                    else
                                        false
                                })
                                .map((c) => {
                                    return (
                                        
                                        <About2
                                            imgsrc={c.imgsrc}
                                            serve={c.serve}
                                            link={c.link}
                                        />
                                    )
                                })
                        }
  </View>

  {/* =======================services ends here================================================ */}

        </View>
      </ScrollView>
    </>
  );
};

export default About;
