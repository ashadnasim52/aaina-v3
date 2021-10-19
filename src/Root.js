import React, {useReducer, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import Signin from './screens/Signin';
import Signup from './screens/Signup';
import Onboarding from './screens/Onboarding';
import Choose from './screens/Choose';
import ForgetPassword from './screens/ForgetPassword';
import OPTVerification from './screens/OTPVerification';
import SelectRole from './screens/SelectRole';
import CreateProfile from './screens/CreateProfile';
import Home from './screens/Home';
import HomeB from './screens/HomeB';
import SignUpOrganization from './screens/SignUpOrganization';
import CustomHeader from './layouts/CustomHeader';
import DetailScreen from './screens/DetailScreen';
import BcPage from './screens/BcPage';
import Chaudhary_Garments from './screens/Chaudhary_Garments';
import Benzor from './screens/Benzor';
import Leather from './screens/Leather';
import Look from './screens/Look';
import Glitz from './screens/Glitz';
import B2cpagemain from './screens/B2cpagemain';
import About from './screens/About';
import Sizing from './screens/Sizing';
import Ettire from './screens/Ettire';
import Sneaky from './screens/Sneaky';
import Instore from './screens/Instore';
import Inapp from './screens/Inapp';
import Inweb from './screens/Inweb';
import Profile from './screens/Profile';
import Notification from './screens/Notification';
import Demo from './screens/Demo';
import BuyPlans from './screens/BuyPlans';
import MyPlans from './screens/MyPlans';
import Setting from './screens/Setting';
import Dress from './screens/Dress';
import Virtual from './screens/Virtual';
import EditPage from './screens/EditPage';
import CreatePage from './screens/CreatePage';
import CreateProfile1 from './screens/Createprofile1';
import CreateProfile2 from './screens/CreateProfile2';
import Female from './screens/Female';
import Female1 from './screens/Female1';
import WeeklyReport from './screens/WeeklyReport';

AsyncStorage.removeItem('@aaina_login');

const Stack = createStackNavigator();

const Root = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <CustomHeader {...props} />,
        }}
        initialRouteName="CreateProfile">
        <Stack.Screen
          name="EditPage"
          component={EditPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreatePage"
          component={CreatePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="B2cpagemain"
          component={B2cpagemain}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="SignUpOrganization"
          component={SignUpOrganization}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="OPTVerification"
          component={OPTVerification}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Dress"
          component={Dress}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SelectRole"
          component={SelectRole}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Choose"
          component={Choose}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={Signin}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Sizing"
          component={Sizing}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Ettire"
          component={Ettire}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Sneaky"
          component={Sneaky}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="CreateProfile"
          component={CreateProfile}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="CreateProfile1"
          component={CreateProfile1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WeeklyReport"
          component={WeeklyReport}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="CreateProfile2"
          component={CreateProfile2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Female"
          component={Female}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Female1"
          component={Female1}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Virtual"
          component={Virtual}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="B2C"
          component={BcPage}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Look"
          component={Look}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen
          name="Glitz"
          component={Glitz}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Chaudhary_Garments"
          component={Chaudhary_Garments}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Benzor"
          component={Benzor}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Leather"
          component={Leather}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Instore"
          component={Instore}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Inapp"
          component={Inapp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Inweb"
          component={Inweb}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="HomeB" component={HomeB} />

        <Stack.Screen name="Notifications" component={Notification} />

        <Stack.Screen
          name="Demo"
          component={Demo}
          options={{
            swipeEnabled: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BuyPlans"
          component={BuyPlans}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="MyPlans" component={MyPlans} />

        <Stack.Screen name="Setting" component={Setting} />

        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </>
  );
};

export default Root;
