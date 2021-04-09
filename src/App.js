import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  useColorScheme,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#111' : '#fff',
    flexGrow: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <MaterialIcon name="weight-lifter" size={50} color="orange" />
          <Text style={isDarkMode ? styles.lightTitle : styles.darkTitle}>
            AmFIT: Diet Advisor
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
  },
  lightTitle: {
    fontSize: 26,
    color: '#fff',
    fontWeight: '600',
  },
  darkTitle: {
    fontSize: 26,
    color: '#000',
    fontWeight: '600',
  },
});

export default App;
