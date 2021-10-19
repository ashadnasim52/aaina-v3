import {Dimensions,PixelRatio} from "react-native";

const {width,height}=Dimensions.get("window");

const widthToDp=number =>{
  let givenWidth= typeof number === "number" ? number :parseFloat(number);
  return PixelRatio.roundToNearestPixel( layoutSize=(width * givenWidth) /100)
};

const heightToDp = number =>{
  let givenHeight= typeof number === "number" ? number :parseFloat(number);
  return PixelRatio.roundToNearestPixel( layoutSize=(height * givenHeight) /100)
};

export {widthToDp, heightToDp};