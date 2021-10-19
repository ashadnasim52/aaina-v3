import {Button, Layout} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ThemeContext} from '../context/themeContext';

export const Setting = () => {
  const themeContext = React.useContext(ThemeContext);

  return (
    <Layout>
      <Text>Setting</Text>
      <Button style={{marginVertical: 4}} onPress={themeContext.toggleTheme}>
        TOGGLE THEME
      </Button>
    </Layout>
  );
};

export default Setting;

const styles = StyleSheet.create({});
