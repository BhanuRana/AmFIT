import React from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import articles from '../../utils/dummyText';

const Advisor = () => {
  const Article = ({thumbnail, details}) => (
    <View style={styles.article}>
      <Image source={{uri: thumbnail}} style={styles.articleImg} />
      <Text style={styles.articleText} numberOfLines={18}>
        {details}
      </Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.flexGrow1}>
      {articles.map((item, index) => (
        <Article key={index} thumbnail={item.thumbnail} details={item.body} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flexGrow1: {flexGrow: 1},

  article: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: '92%',
    margin: 20,
    borderRadius: 7,
    elevation: 4,
    overflow: 'hidden',
  },
  articleImg: {width: '102%', height: 200},
  articleText: {padding: 20},
});

export default Advisor;
