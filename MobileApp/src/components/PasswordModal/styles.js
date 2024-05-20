import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  modalButton: {
    backgroundColor: "#585d57",
    width: Dimensions.get("window").width / 1.9,
    height: Dimensions.get("window").height / 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#2ba64c",
    borderRadius: 20,
    padding: 20,
    width: Dimensions.get("window").width / 1.2,
    height: Dimensions.get("window").height / 1.8,
    borderWidth: 1,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "space-between",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});
