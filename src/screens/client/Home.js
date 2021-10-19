import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Button, Icon, Input, Layout, Text} from '@ui-kitten/components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ACCENT} from '../../theme/colors';

const Home = () => {
  return (
    <>
      <StatusBar backgroundColor={ACCENT} />
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <Layout style={styles.container}>
          <Text>Client Home</Text>
        </Layout>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
