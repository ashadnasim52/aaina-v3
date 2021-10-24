import {
  Card,
  CardItem,
  H3,
  Input,
  Item,
  Form,
  Textarea,
  Button,
  Text,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Sizing = () => {
  const [name, setName] = useState(null);
  const [points, setPoints] = useState(null);
  const [description, setDescription] = useState(null);
  const [imageurl, setImageurl] = useState(null);

  useEffect(() => {
    fetchSizing();
  }, []);

  const fetchSizing = async () => {
    // (await firestore().collection('about').doc().get()).data()
    try {
      const about = await firestore()
        .collection('app/about')
        .doc('ourProducts')
        .get();
      console.log({about});
      console.log('asd', about.data());
      // setAbout(about.data());
    } catch (error) {
      console.log({error});
    }
  };
  return (
    <Card>
      <CardItem header>
        <H3>Sizing</H3>
      </CardItem>
      <View
        style={{
          padding: 10,
        }}>
        <CardItem cardBody>
          <Form style={{width: '97%'}}>
            <Item regular>
              <Input placeholder="Name" />
            </Item>
            <Textarea
              rowSpan={5}
              bordered
              placeholder="Points(comma speprated)"
            />
            <Textarea rowSpan={5} bordered placeholder="Description" />
            <Button info block style={{marginVertical: 3}}>
              <Text>Upload Image</Text>
            </Button>
            <Button primary block style={{marginVertical: 3}}>
              <Text>Save</Text>
            </Button>
          </Form>
        </CardItem>
      </View>
    </Card>
  );
};

export default Sizing;

const styles = StyleSheet.create({});
