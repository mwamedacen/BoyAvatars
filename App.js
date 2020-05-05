import React from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import { SvgCssUri } from 'react-native-svg';

export default function App() {
  const userName = 'Gatoune'

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.appBackground} source={require('./assets/app-background.jpg')}>
      <View style={styles.titleCtn}>
        <Text style={styles.title}>Hi </Text>
        <Text style={[styles.title, styles.userName]}>{userName}</Text>
        <Text style={styles.title}> !</Text>
      </View>
      <View style={styles.avatarCtn}>
        <SvgCssUri 
          style={styles.avatar} 
          uri= {`https://boy-avatars.herokuapp.com/spaceinvaders/${userName}?theme=heatwave&numcolors=4&size=300&fmt=svg`}
        />
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  appBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  titleCtn: {
    marginTop: 100,
    flex: 2,
    flexDirection: 'row' ,
    justifyContent: 'center',
    fontSize: 10,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgb(241, 146, 59)',
  },
  userName: {
    color: 'blue',
    color: 'rgb(191, 54, 39)'
  },
  avatarCtn: {
    flex: 9,
    alignItems: 'center',
    
  },
  avatar: {
    width: 300,
    height: 300
  },
});
