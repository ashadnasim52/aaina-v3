/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React, {useState} from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {default as theme} from './src/theme/custom-theme.json'; // <-- Import app theme
import Root from './src/Root';
import {ACCENT, PRIMARY} from './src/theme/colors';
import {ThemeContext} from './src/context/themeContext';
import Main from './src/Main';

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 **/
const HeartIcon = (props) => <Icon {...props} name="heart" />;
console.disableYellowBox = true;

export default () => {
  const [themeee, setThemeee] = useState('dark');
  const toggleTheme = () => {
    const nextTheme = themeee === 'light' ? 'dark' : 'light';
    setThemeee(nextTheme);
  };

  return (
    <>
      <StatusBar backgroundColor={ACCENT} />

      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{themeee, toggleTheme}}>
        <ApplicationProvider {...eva} theme={{...eva[themeee], ...theme}}>
          <Main />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});

/*

 <Layout style={styles.container}>
        <Text style={styles.text} category="h1">
          Welcome to UI Kitten 😻
        </Text>
        <Text style={styles.text} category="s1">
          Start with editing App.js to configure your App
        </Text>
        <Text style={styles.text} appearance="hint">
          For example, try changing theme to Dark by using eva.dark
        </Text>
        <Button style={styles.likeButton} accessoryLeft={HeartIcon}>
          LIKE
        </Button>
      </Layout>



      */
