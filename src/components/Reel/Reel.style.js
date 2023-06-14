import { StyleSheet, Dimensions } from "react-native";
import Constants from 'expo-constants';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height - 80,
  },
  textsContainer: {
    position: "absolute",
    bottom: 0,
    width,
    paddingRight: 10,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    width,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#0484FA",
    marginLeft: 10,
  },
  locationAndPaymentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    justifyContent: 'space-between'
  },
  timeAndlocation: {
    flexDirection: "row",
    alignItems: "center",
  },
  paymentTitleStyle: {
    fontSize: 12,
    color: "#ccc",
    alignSelf: 'center',
    marginBottom: 5,
  },
  paymentStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff",
  },
  image: {
    width,
    height,
  },
  btnContainer: {
    width,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  acceptBtn: {
    backgroundColor: "#0484FA",
    width: "60%",
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  postBtn: {
    backgroundColor: "#0484FA",
    width: "30%",
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
  },
  btnText: {
    color: "#ffffff",
  },
  titleContainer: {
    width: width * 0.6,
  },
  duration: {
    color: "#ffffff",
    marginLeft: 10,
    marginTop: 5,
    fontSize: 12
  },
  accidentAndLocationTitle: {
    color: '#F9AE2A',
    marginTop: 5,
    fontWeight: 'bold',
  },
  dateAndTime: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  location: {
    color: '#ffffff'
  },
  rightContainer: {
    width: width * 0.2,
    position: 'absolute',
    right: 5,
    bottom: height * 0.2,
    paddingVertical: 10
},
profilePictureContainer: {
    width: '100%',
    overflow: 'hidden',
    marginBottom: 10,
    alignItems: 'center',
},
profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: '#fff',
},
plusButtonContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#B5B5BE',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ffffff',
    marginBottom: 1
},
iconContainer: {
    alignItems: 'center',
    marginTop: 30
},
statsLabel: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
}
});

export default styles