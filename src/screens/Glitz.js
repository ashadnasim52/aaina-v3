import React, { Component, useState } from 'react';
import { Image, View, Text, ScrollView, Button, TextInput, Alert, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';




const Glitz = ({ navigation }) => {

  const [showDataByButton_1, setShowDataByButton_1] = useState(false)
  const [showDataByButton_2, setShowDataByButton_2] = useState(false)
  const [showDataByButton_3, setShowDataByButton_3] = useState(false)

  const handleButton_1 = () => {
    setShowDataByButton_1(true)
    setShowDataByButton_2(false)
  }
  const handleButton_2 = () => {
    setShowDataByButton_1(false)
    setShowDataByButton_2(true)
  }
  const handleButton_3 = () => {
    setShowDataByButton_1(false)
    setShowDataByButton_2(false)
  }


  return (
    <>
      <View style={{ backgroundColor: "#2B547E", height: 80 }}>
        <View
          style={{
            height: 50,
            backgroundColor: '#fff',
            flexDirection: 'row',
            padding: 5,
            alignItems: 'center',
            borderRadius: 10,
            margin: 20,
            marginTop: 20
          }}>
          <Icon
            name="search"
            style={{ paddingRight: 10, paddingLeft: 8, fontSize: 17 }}
          />
          <TextInput placeholder="Search Any Products  here....." />
        </View>
      </View>

      <ScrollView style={{ backgroundColor: "#2B547E" }}>



        <View style={{ marginTop: 10 }}>
          <Image
            source={require('../assests/img/Benzor.jpg')}
            style={{
              width: 360,
              height: 250,
              justifyContent: 'center',
            }}
          />
        </View>

        <View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ color: "white", fontSize: 24, textAlign: "center", textDecorationLine: "underline" }}>About Look@Me</Text>
            <Text style={{ color: "lightgrey", fontSize: 15, marginLeft: 10, marginTop: 10 }}>LOOK@ME equips A-Z fashion wear for girls and ladies. Located in Rajouri Garden, it emphasizes selling western clothes.</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20, marginBottom: 20, marginHorizontal: 60 }}>
            <TouchableOpacity onPress={() => handleButton_3()}>
              <Text style={{ color: "black", backgroundColor: "white", width: 60, lineHeight: 30, textAlign: 'center', borderRadius: 10 }}>All</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleButton_1()}>
              <Text style={{ color: "black", backgroundColor: "white", width: 60, lineHeight: 30, textAlign: 'center', borderRadius: 10 }}>Men</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleButton_2()}>
              <Text style={{ color: "black", backgroundColor: "white", width: 60, lineHeight: 30, textAlign: 'center', borderRadius: 10 }}>Women</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ==========================Ternary Operator start==================================================== */}

        {/* Men */}

        {
          showDataByButton_1 ? (

            <View>
              <Text style={{ color: "red", textAlign: "center", }}>Men cloths are not available</Text>
            </View>


          ) : (
            <>
              {
                showDataByButton_2 ? (
                  <View>
                    <View>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
                          <ImageBackground
                            source={require('../assests/glitz/women/37.jpg')}
                            style={{
                              width: 170,
                              height: 250,
                              justifyContent: 'center',
                            }}
                          >
                            <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Half Sleeve Sheath Dress With Side Pocket</Text>
                          </ImageBackground>
                          <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Sizing
    </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Ettire
    </Text>
                            </TouchableOpacity>
                          </View>
                        </View>

                        <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
                          <ImageBackground
                            source={require('../assests/glitz/women/38.jpg')}
                            style={{
                              width: 170,
                              height: 250,
                              justifyContent: 'center',
                            }}
                          >
                            <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>White Polka Dots Women’s Dress With Quarter Sleeve</Text>
                          </ImageBackground>
                          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Sizing
    </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Ettire
    </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>

                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
                          <ImageBackground
                            source={require('../assests/glitz/women/39.jpg')}
                            style={{
                              width: 170,
                              height: 250,
                              justifyContent: 'center',
                            }}
                          >
                            <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Women’s Floral Ethnic Dress</Text>
                          </ImageBackground>
                          <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Sizing
    </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Ettire
    </Text>
                            </TouchableOpacity>
                          </View>
                        </View>

                        <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
                          <ImageBackground
                            source={require('../assests/glitz/women/40.jpg')}
                            style={{
                              width: 170,
                              height: 250,
                              justifyContent: 'center',
                            }}
                          >
                            <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Women’s Stylist One Piece Dress</Text>
                          </ImageBackground>
                          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Sizing
    </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Ettire
    </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>

                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
                          <ImageBackground
                            source={require('../assests/glitz/women/41.jpg')}
                            style={{
                              width: 170,
                              height: 250,
                              justifyContent: 'center',
                            }}
                          >
                            <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Women’s Full Length Ethnic Wear with Printed Shrug</Text>
                          </ImageBackground>
                          <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Sizing
    </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Ettire
    </Text>
                            </TouchableOpacity>
                          </View>
                        </View>



                        <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
                          <ImageBackground
                            source={require('../assests/glitz/women/42.jpg')}
                            style={{
                              width: 170,
                              height: 250,
                              justifyContent: 'center',
                            }}
                          >
                            <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>One Piece Sleeveless Yellow Dress with Fancy Large Button</Text>
                          </ImageBackground>
                          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Sizing
    </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Ettire
    </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>

                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
                          <ImageBackground
                            source={require('../assests/glitz/women/43.jpg')}
                            style={{
                              width: 170,
                              height: 250,
                              justifyContent: 'center',
                            }}
                          >
                            <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Sleeveless Fancy Floral Women’s Dress</Text>
                          </ImageBackground>
                          <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Sizing
    </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Ettire
    </Text>
                            </TouchableOpacity>
                          </View>
                        </View>



                        <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
                          <ImageBackground
                            source={require('../assests/glitz/women/44.jpg')}
                            style={{
                              width: 170,
                              height: 250,
                              justifyContent: 'center',
                            }}
                          >
                            <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Shoulder Strip Sheath Dress with Side Cut</Text>
                          </ImageBackground>
                          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Sizing
    </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Ettire
    </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>

                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
                          <ImageBackground
                            source={require('../assests/glitz/women/45.jpg')}
                            style={{
                              width: 170,
                              height: 250,
                              justifyContent: 'center',
                            }}
                          >
                            <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Women’s Yellow Fancy Flared ress</Text>
                          </ImageBackground>
                          <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Sizing
    </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Ettire
    </Text>
                            </TouchableOpacity>
                          </View>
                        </View>



                        <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
                          <ImageBackground
                            source={require('../assests/glitz/women/46.jpg')}
                            style={{
                              width: 170,
                              height: 250,
                              justifyContent: 'center',
                            }}
                          >
                            <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>V-Neck Women’s Full Sleeve Dress</Text>
                          </ImageBackground>
                          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Sizing
    </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Ettire
    </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>

                      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                        <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
                          <ImageBackground
                            source={require('../assests/glitz/women/47.jpg')}
                            style={{
                              width: 170,
                              height: 250,
                              justifyContent: 'center',
                            }}
                          >
                            <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Full Sleeve Sheath Dress</Text>
                          </ImageBackground>
                          <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Sizing
    </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Ettire
    </Text>
                            </TouchableOpacity>
                          </View>
                        </View>



                        <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
                          <ImageBackground
                            source={require('../assests/glitz/women/48.jpg')}
                            style={{
                              width: 170,
                              height: 250,
                              justifyContent: 'center',
                            }}
                          >
                            <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Black Colour Women’s Fancy Sheath Dress</Text>
                          </ImageBackground>
                          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Sizing
    </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                              <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                Ettire
    </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>

                    </View>
                  </View>








                ) : (
                  <>
                    {
                      showDataByButton_3 ? (
                        <View>
                          <View style={{ marginTop: 30 }}>
                            <Text style={{ color: "white", fontSize: 24, textAlign: "center", textDecorationLine: "underline" }}>About Deepak Garments</Text>
                            <Text style={{ color: "lightgrey", fontSize: 15, marginLeft: 10, marginTop: 10 }}>Shopping never goes in vain with Deepak Garments, which provides its customers with T-shirts, jeans, undergarments, sportswear, and much more.</Text>
                          </View>



                          <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                              <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
                                <ImageBackground
                                  source={require('../assests/glitz/women/37.jpg')}
                                  style={{
                                    width: 170,
                                    height: 250,
                                    justifyContent: 'center',
                                  }}
                                >
                                  <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Black Colour Full Sleeve T-Shirt with Print on Chest</Text>
                                </ImageBackground>
                                <View style={{ flexDirection: "row" }}>
                                  <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                    <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                      Sizing
    </Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                    <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                      Ettire
    </Text>
                                  </TouchableOpacity>
                                </View>
                              </View>

                              <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
                                <ImageBackground
                                  source={require('../assests/glitz/women/38.jpg')}
                                  style={{
                                    width: 170,
                                    height: 250,
                                    justifyContent: 'center',
                                  }}
                                >
                                  <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Black Colour Full Sleeve T-Shirt with Print on Chest</Text>
                                </ImageBackground>
                                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                  <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                    <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                      Sizing
    </Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                    <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                      Ettire
    </Text>
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>
                          </View>
                          <View>
                            <View>
                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
                                  <ImageBackground
                                    source={require('../assests/glitz/women/39.jpg')}
                                    style={{
                                      width: 170,
                                      height: 250,
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Black Colour Full Sleeve T-Shirt with Print on Chest</Text>
                                  </ImageBackground>
                                  <View style={{ flexDirection: "row" }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Sizing
    </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Ettire
    </Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>

                                <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
                                  <ImageBackground
                                    source={require('../assests/glitz/women/40.jpg')}
                                    style={{
                                      width: 170,
                                      height: 250,
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Black Colour Full Sleeve T-Shirt with Print on Chest</Text>
                                  </ImageBackground>
                                  <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Sizing
    </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Ettire
    </Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>





                      ) : (
                        <View>

                          <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                              <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
                                <ImageBackground
                                  source={require('../assests/glitz/women/37.jpg')}
                                  style={{
                                    width: 170,
                                    height: 250,
                                    justifyContent: 'center',
                                  }}
                                >
                                  <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Half Sleeve Sheath Dress With Side Pocket</Text>
                                </ImageBackground>
                                <View style={{ flexDirection: "row" }}>
                                  <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                    <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                      Sizing
    </Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                    <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                      Ettire
    </Text>
                                  </TouchableOpacity>
                                </View>
                              </View>

                              <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
                                <ImageBackground
                                  source={require('../assests/glitz/women/38.jpg')}
                                  style={{
                                    width: 170,
                                    height: 250,
                                    justifyContent: 'center',
                                  }}
                                >
                                  <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>White Polka Dots Women’s Dress With Quarter Sleeve</Text>
                                </ImageBackground>
                                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                  <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                    <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                      Sizing
    </Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                    <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                      Ettire
    </Text>
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </View>
                          </View>


                          <View>
                            <View>
                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                                <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
                                  <ImageBackground
                                    source={require('../assests/glitz/women/39.jpg')}
                                    style={{
                                      width: 170,
                                      height: 250,
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Women’s Floral Ethnic Dress</Text>
                                  </ImageBackground>
                                  <View style={{ flexDirection: "row" }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Sizing
    </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Ettire
    </Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>

                                <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
                                  <ImageBackground
                                    source={require('../assests/glitz/women/40.jpg')}
                                    style={{
                                      width: 170,
                                      height: 250,
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Women’s Stylist One Piece Dress</Text>
                                  </ImageBackground>
                                  <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Sizing
    </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Ettire
    </Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>

                          <View>
                            <View>
                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                                <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
                                  <ImageBackground
                                    source={require('../assests/glitz/women/41.jpg')}
                                    style={{
                                      width: 170,
                                      height: 250,
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Women’s Full Length Ethnic Wear with Printed Shrug</Text>
                                  </ImageBackground>
                                  <View style={{ flexDirection: "row" }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Sizing
    </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Ettire
    </Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>

                                <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
                                  <ImageBackground
                                    source={require('../assests/glitz/women/42.jpg')}
                                    style={{
                                      width: 170,
                                      height: 250,
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>One Piece Sleeveless Yellow Dress with Fancy Large Button</Text>
                                  </ImageBackground>
                                  <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Sizing
    </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Ettire
    </Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>


                          <View>
                            <View>
                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                                <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
                                  <ImageBackground
                                    source={require('../assests/glitz/women/43.jpg')}
                                    style={{
                                      width: 170,
                                      height: 250,
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Sleeveless Fancy Floral Women’s Dress</Text>
                                  </ImageBackground>
                                  <View style={{ flexDirection: "row" }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Sizing
    </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Ettire
    </Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>

                                <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
                                  <ImageBackground
                                    source={require('../assests/glitz/women/44.jpg')}
                                    style={{
                                      width: 170,
                                      height: 250,
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Shoulder Strip Sheath Dress with Side Cut</Text>
                                  </ImageBackground>
                                  <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Sizing
    </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Ettire
    </Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>

                          <View>
                            <View>
                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                                <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
                                  <ImageBackground
                                    source={require('../assests/glitz/women/45.jpg')}
                                    style={{
                                      width: 170,
                                      height: 250,
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Women’s Yellow Fancy Flared dress</Text>
                                  </ImageBackground>
                                  <View style={{ flexDirection: "row" }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Sizing
    </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Ettire
    </Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>

                                <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
                                  <ImageBackground
                                    source={require('../assests/glitz/women/46.jpg')}
                                    style={{
                                      width: 170,
                                      height: 250,
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>V-Neck Women’s Full Sleeve Dress</Text>
                                  </ImageBackground>
                                  <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Sizing
    </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Ettire
    </Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>

                          <View>
                            <View>
                              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>

                                <View style={{ backgroundColor: "white", height: 300, marginLeft: 6, borderRadius: 10 }}>
                                  <ImageBackground
                                    source={require('../assests/glitz/women/47.jpg')}
                                    style={{
                                      width: 170,
                                      height: 250,
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Full Sleeve Sheath Dress</Text>
                                  </ImageBackground>
                                  <View style={{ flexDirection: "row" }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Sizing
    </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Ettire
    </Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>

                                <View style={{ backgroundColor: "white", marginRight: 6, borderRadius: 10 }}>
                                  <ImageBackground
                                    source={require('../assests/glitz/women/48.jpg')}
                                    style={{
                                      width: 170,
                                      height: 250,
                                      justifyContent: 'center',
                                    }}
                                  >
                                    <Text style={{ color: "white", textAlign: "center", backgroundColor: "rgba(55, 81, 126, 0.8)", marginTop: 200, height: 50, opacity: 0.9 }}>Black Colour Women’s Fancy Sheath Dress</Text>
                                  </ImageBackground>
                                  <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, marginRight: 5, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Sizing
    </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('Dress')}>
                                      <Text style={{ margin: 8, backgroundColor: "#2B547E", color: "white", width: 70, height: 35, paddingLeft: 12, paddingTop: 7, borderRadius: 5, fontWeight: "bold" }}>
                                        Ettire
    </Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>




                        </View>
                      )}
                  </>
                )}
            </>
          )}


      </ScrollView>
    </>
  );
};
export default Glitz;
