import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolate,
  Extrapolate,
  interpolateColor,
} from "react-native-reanimated";
import Constants from "expo-constants";

import styles from "./Home.style";
import Reel from "../../components/Reel/Reel";
import { feed, jobs } from "../../../assets/data";
import { runOnJS } from "react-native-reanimated";

const flatLists = [
  {
    id: 1,
    name: "Following",
    data: jobs,
  },
  {
    id: 2,
    name: "ForYou",
    data: feed,
  },
];

const ReanimatedFlatList = Animated.createAnimatedComponent(FlatList);

const { width, height } = Dimensions.get("screen");

const Home = () => {
  const [currentOption, setCurrentOption] = useState("Work");

  const headerOptions = ["Plastics", "Work", "Give"];

  const mainFlatListRef = useRef();

  //   Animations: Here is everything concerning animations
  const scrollOffset = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollOffset.value = event.contentOffset.x;
    },
  });

  const belowLineAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollOffset.value,
            [0, width],
            [3, 58.5],
            Extrapolate.CLAMP
          ),
        },
      ],
      width: interpolate(
        scrollOffset.value,
        [0, width],
        [35, 35],
        Extrapolate.CLAMP
      ),
    };
  });

  const jobsColorAnimatedStyles = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        scrollOffset.value,
        [0, width],
        ["#3742fa", "#000000"]
      ),
    };
  });

  const feedColorAnimatedStyles = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        scrollOffset.value,
        [0, width],
        ["#000000", "#3742fa"]
      ),
    };
  });

  const renderItem = ({ item, index }) => {
    return <Reel item={item} />;
  };

  const renderFlatListItem = ({ item, index }) => {
    return (
      <FlatList
        style={{ width }}
        data={item.data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        snapToInterval={height - 80}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
      />
    );
  };

  const scrollToEndOrBeginning = (xOffset) => {
    mainFlatListRef.current &&
      mainFlatListRef?.current?.scrollToOffset({ x: xOffset, animated: true });
  };

  const selectOption = (option) => {
    setCurrentOption(option);
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <View style={styles.header}>
        {headerOptions.map((option, i) => {
          return (
            <TouchableOpacity
              onPress={() => selectOption(option)}
              style={[
                styles.touch,
                {
                  backgroundColor:
                    currentOption == option ? "#F9AE2A" : "transparent",
                },
              ]}
              key={i}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.jobsAndFeedContainer}>
        <Animated.Text
          style={[styles.swipAnimText, jobsColorAnimatedStyles]}
          onPress={() => scrollToEndOrBeginning(0)}
        >
          Jobs
        </Animated.Text>
        <View style={styles.verticalSeparator} />
        <Animated.Text
          style={[styles.swipAnimText, feedColorAnimatedStyles]}
          onPress={() => mainFlatListRef?.current?.scrollToEnd()}
        >
          Feed
        </Animated.Text>
        <Animated.View style={[styles.belowLine, belowLineAnimatedStyles]} />
      </View>
      <ReanimatedFlatList
        ref={mainFlatListRef}
        data={flatLists}
        renderItem={renderFlatListItem}
        horizontal
        style={{ width }}
        snapToInterval={width}
        snapToAlignment="start"
        decelerationRate={"fast"}
        onScroll={scrollHandler}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
