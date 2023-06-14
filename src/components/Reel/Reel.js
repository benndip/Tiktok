import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";

import styles from "./Reel.style";
import { LinearGradient } from "expo-linear-gradient";

const Reel = ({ item }) => {
  const { image, title, duration, location, payment, dateAndTime, numOfPlacesLeft } = item;
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.rightContainer}>
        <>
          <View style={styles.plusButtonContainer}>
            <Text style={{ color: "#ffffff", fontSize: 25 }}>+</Text>
          </View>
          <Text style={{ color: '#ffffff', fontWeight: 'bold', alignSelf: 'center' }}>{numOfPlacesLeft} places left</Text>
        </>
        <View style={styles.iconContainer}>
          <Image source={require("../../../assets/share.png")} />
        </View>
      </View>
        <LinearGradient
          colors={['transparent', 'transparent', 'rgba(0,0,0,0)', 'rgb(0,0,0)']}
          style={styles.background}
        />
      <View style={styles.textsContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
        <Text style={styles.duration}>Duration: {duration}</Text>
        <View style={styles.locationAndPaymentContainer}>
          <View>
            <Text style={styles.accidentAndLocationTitle}>
              Start item & location
            </Text>
            <View style={styles.timeAndlocation}>
              <Text style={styles.dateAndTime}>{dateAndTime.toDateString()}</Text>
              <Ionicons
                name="location-sharp"
                size={20}
                color="#AE0007"
                style={{ marginLeft: 10 }}
              />
              <Text style={styles.location}>{location}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.paymentTitleStyle}>Payment</Text>
            <Text style={styles.paymentStyle}>{payment}CFA</Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.acceptBtn}>
            <Text style={styles.btnText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.postBtn}>
            <Entypo name="plus" size={24} color="#ffffff" />
            <Text style={styles.btnText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Reel;
