import {H1, Container, Content} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Sizing from './Sizing';
import firestore from '@react-native-firebase/firestore';

const Admin = () => {
  return (
    <Container>
      <Content>
        <H1 style={{color: 'red'}}>Admin</H1>

        <Sizing />
      </Content>
    </Container>
  );
};

export default Admin;

const styles = StyleSheet.create({});
