import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import MapViewDirections from 'react-native-maps-directions';
import { View, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import styles from "./styles";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import NewOrderPopup from "../../components/NewOrderPopup";

const origin = { latitude: 33.6007, longitude: 73.0679 }; 
const destination = { latitude: 33.6844, longitude: 73.0479 }; 

const GOOGLE_MAPS_APIKEY = 'AIzaSyA1FUyG4RHmI7hGdilLU6DMJwh_dm3URbQ';

const HomeScreen = () => {
  const [isOnline, setIsOnline] = useState(false);
const [order,setOrder]=useState(false)
  const onGoPress = () => {
    setIsOnline(!isOnline);
  };

  return (
    <View>
      <MapView
        style={{ width: '100%', height: Dimensions.get('window').height - 150 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        initialRegion={{
          latitude: 33.6423,
          longitude: 73.0575,
          latitudeDelta: 0.222,
          longitudeDelta: 0.2121,
        }}
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor="red"
          onError={(errorMessage) => {
            console.log("Directions Error:", errorMessage);
          }}
        />
      </MapView>

      <Pressable
        onPress={() => console.warn('Balance')}
        style={styles.balanceButton}>
        <Text style={styles.balanceText}>
          <Text style={{ color: 'green' }}>$</Text>
          {' '}
          0.00
        </Text>
      </Pressable>

      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, { top: 10, left: 10 }]}>
        <Entypo name={"menu"} size={24} color="#4a4a4a" />
      </Pressable>

      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, { top: 10, right: 10 }]}>
        <Entypo name={"menu"} size={24} color="#4a4a4a" />
      </Pressable>

      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, { bottom: 110, left: 10 }]}>
        <Entypo name={"menu"} size={24} color="#4a4a4a" />
      </Pressable>

      <Pressable
        onPress={() => console.warn('Hey')}
        style={[styles.roundButton, { bottom: 110, right: 10 }]}>
        <Entypo name={"menu"} size={24} color="#4a4a4a" />
      </Pressable>

      <Pressable
        onPress={onGoPress}
        style={styles.goButton}>
        <Text style={styles.goText}>
          {isOnline ? 'GO' : "End"}
        </Text>
      </Pressable>

      <View style={styles.bottomContainer}>
        <Ionicons name={"options"} size={30} color="#4a4a4a" />
        {
          isOnline ? 
            <Text style={styles.bottomText}>You're online</Text> : 
            <Text style={styles.bottomText}>You're offline</Text>
        }
        <Entypo name={"menu"} size={30} color="#4a4a4a" />
      </View>

      <NewOrderPopup />
    </View>
  );
};

export default HomeScreen;
