import React from "react";
import { View, Text, Pressable } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
const NewOrderPopup = () => {

  const onDecline=()=>{
    console.warn("decline order");
  }
  const onAccept=()=>{
    console.warn("accept order");
  }
  return (
    <View style={styles.root}>
      <Pressable onPress={onDecline} style={styles.declineButton}>
        <Text style={styles.declineText}>Decline</Text>
      </Pressable>

      <Pressable onPress={onAccept} style={styles.popupContainer}>

        <View style={styles.row}>
          <Text style={styles.uberType}>Mini Ambulance</Text>

          <View style={styles.userBg}>
            <FontAwesome name={"user"} color={"white"} size={35} />
          </View>

          <Text style={styles.uberType}>
            <AntDesign name={"star"} size={18}/>
           5
          </Text>
        </View>

        <Text style={styles.minutes}>12 min</Text>
        <Text style={styles.distance}>0.3 mi</Text>

      </Pressable>
    </View>
  );
};

export default NewOrderPopup;
