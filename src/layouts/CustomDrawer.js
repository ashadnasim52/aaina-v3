import React,{useContext} from 'react';
import {Image, Linking, SafeAreaView, StyleSheet, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../context/context';


import {Avatar, Button, Icon, Layout, Text} from '@ui-kitten/components';
import {PRIMARY} from '../theme/colors';
import * as RootNavigation from '../RootNavigation';
import { TouchableOpacity } from 'react-native-gesture-handler';


const CustomDrawer = (props) => {
  
  const [image, setImage] = React.useState(null);
  const {state, dispatch} = useContext(AuthContext);
  console.log(state.isB2B);

  return (
    <>
    {
      
        (!state.isB2B) ? 
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#14466b',
      }}>
      
      <Layout
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#14466b',
          labelStyle: {
            color: 'red',
          },
        }}>
        <TouchableOpacity onPress={() => RootNavigation.navigate('EditPage')}>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            paddingTop: 30,
            marginBottom: 20,
            marginRight:140
          }}>
          <Avatar
        source={{
                uri: image
                  ? image.uri
                  : 'https://picsum.photos/id/1005/367/267',
                
              }}
          />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginLeft: 20,
            }}>
            <Text
              style={{
                color: '#fff',
              }}>
              Priya
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 12,
              }}>
              Last Name
            </Text>
          </View>
        </View>
        </TouchableOpacity>
      </Layout>
      {/* <DrawerItemList {...props} /> */}
      <Layout
        style={{
          flexGrow: 1,
          justifyContent: 'center',
          backgroundColor: '#14466b',
          marginBottom: 20,
        }}>
        <DrawerItem
          style={{color: '#fff'}}
          label="Home"
          onPress={() => RootNavigation.navigate('Home')}
          labelStyle={{color: '#fff'}}
          icon={({focused, color, size}) => (
            <FontAwesome5 name="home" size={15} color="white" />
          )}
        />
        <DrawerItem
          label="About Aaiena"
          labelStyle={{color: '#fff'}}
          onPress={() => RootNavigation.navigate('About')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="alert-circle-outline" />
          )}
        />
        <DrawerItem
          label="Clients"
          labelStyle={{color: '#fff'}}
          onPress={() => RootNavigation.navigate('B2cpagemain')}
          icon={({focused, color, size}) => (
            <FontAwesome name="users" size={15} color="white" />
          )}
        />
        <DrawerItem
          label="Body Profile"
          labelStyle={{color: '#fff'}}
          onPress={() => RootNavigation.navigate('Profile')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="person-outline" />
          )}
        />
          <DrawerItem
          label="Create Body Profile"
          labelStyle={{color: '#fff'}}
          onPress={() => RootNavigation.navigate('CreateProfile')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="person-outline" />
          )}
        />
        <DrawerItem
          label="Demo"
          onPress={() => RootNavigation.navigate('Demo')}
          labelStyle={{color: '#fff'}}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="monitor-outline" />
          )}
        />
        <DrawerItem
          label="Buy plan"
          onPress={() => RootNavigation.navigate('BuyPlans')}
          labelStyle={{color: '#fff'}}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="shopping-bag-outline" />
          )}
        />
        <DrawerItem
          label="My plans"
          labelStyle={{color: '#fff'}}
          onPress={() => RootNavigation.navigate('MyPlans')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="white" name="award-outline"/>
          )}
        />
      
    

  

        <View style={{alignSelf:"center",backgroundColor:"white",borderRadius:25,marginTop:20}}>
          <Text style={{padding:10,color:"black",width:150,textAlign:"center",fontSize:17}}
          onPress={() => RootNavigation.navigate('SignIn')}
          >Log Out  <MaterialIcons name="logout" size={16} color="black"  /></Text>
        </View>
        {/* <Button
          
          onPress={() => RootNavigation.navigate('SignIn')}
          appearance="ghost"
          status="danger">
          Log Out  <MaterialIcons name="logout" size={18} color="white" />
        </Button>
         */}
      </Layout>

    </DrawerContentScrollView>
    :
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#14466b',
      }}>
      
      <Layout
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#14466b',
          labelStyle: {
            color: 'red',
          },
        }}>
        <TouchableOpacity onPress={() => RootNavigation.navigate('EditPage')}>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            paddingTop: 30,
            marginBottom: 20,
            marginRight:140
          }}>
          <Avatar
        source={{
                uri: image
                  ? image.uri
                  : 'https://picsum.photos/id/1005/367/267',
                
              }}
          />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-start',
              marginLeft: 20,
            }}>
            <Text
              style={{
                color: '#fff',
              }}>
              Priya
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: 12,
              }}>
              Last Name
            </Text>
          </View>
        </View>
        </TouchableOpacity>
      </Layout>
      {/* <DrawerItemList {...props} /> */}
      <Layout
        style={{
          flexGrow: 1,
          justifyContent: 'center',
          backgroundColor: '#14466b',
          marginBottom: 20,
        }}>
        <DrawerItem
          style={{color: '#fff'}}
          label="Home"
          onPress={() => RootNavigation.navigate('HomeB')}
          labelStyle={{color: '#fff'}}
          icon={({focused, color, size}) => (
            <FontAwesome5 name="home" size={15} color="white" />
          )}
        />
        <DrawerItem
          label="About Aaiena"
          labelStyle={{color: '#fff'}}
          onPress={() => RootNavigation.navigate('About')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="alert-circle-outline" />
          )}
        />


      
        <DrawerItem
          label="Body Profile"
          labelStyle={{color: '#fff'}}
          onPress={() => RootNavigation.navigate('Profile')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="person-outline" />
          )}
        />
          <DrawerItem
          label="Create Body Profile"
          labelStyle={{color: '#fff'}}
          onPress={() => RootNavigation.navigate('CreateProfile')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="person-outline" />
          )}
        />
        <DrawerItem
          label="Demo"
          onPress={() => RootNavigation.navigate('Demo')}
          labelStyle={{color: '#fff'}}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="monitor-outline" />
          )}
        />
        <DrawerItem
          label="Buy plan"
          onPress={() => RootNavigation.navigate('BuyPlans')}
          labelStyle={{color: '#fff'}}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="#fff" name="shopping-bag-outline" />
          )}
        />
        <DrawerItem
          label="My plans"
          labelStyle={{color: '#fff'}}
          onPress={() => RootNavigation.navigate('MyPlans')}
          icon={({focused, color, size}) => (
            <Icon style={styles.icon} fill="white" name="award-outline"/>
          )}
        />

<DrawerItem
          label="Total No of  Visitors"
          labelStyle={{color: '#fff'}}
          // onPress={() => RootNavigation.navigate('')}
          icon={({focused, color, size}) => (
               <Icon style={styles.icon} fill="#fff" name="alert-circle-outline" />
          )}
        />
      
    

  

        <View style={{alignSelf:"center",backgroundColor:"white",borderRadius:25,marginTop:20}}>
          <Text style={{padding:10,color:"black",width:150,textAlign:"center",fontSize:17}}
          onPress={() => RootNavigation.navigate('SignIn')}
          >Log Out  <MaterialIcons name="logout" size={16} color="black"  /></Text>
        </View>
        {/* <Button
          
          onPress={() => RootNavigation.navigate('SignIn')}
          appearance="ghost"
          status="danger">
          Log Out  <MaterialIcons name="logout" size={18} color="white" />
        </Button>
         */}
      </Layout>

    </DrawerContentScrollView>


    }
  

    
    
    </>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22,
  },
});

// focused: Boolean indicating whether to highlight the drawer item as active.
// onPress (required): Function to execute on press.
// activeTintColor: Color for the icon and label when the item is active.
// inactiveTintColor: Color for the icon and label when the item is inactive.
// activeBackgroundColor: Background color for item when it's active.
// inactiveBackgroundColor: Background color for item when it's inactive.
// labelStyle: Style object for the label Text.
// style: Style object for the wrapper View.
