import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    borderRadius: 20,
    margin: 15,
    padding: 15,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  date: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  detail: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  more_button: {
    backgroundColor: "#97BE5A",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginLeft: 10,
  },
  exerciseText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  setsText: {
    fontSize: 16,
    color: "#666",
  },
  repeatsText: {
    fontSize: 16,
    color: "#666",
  },
  moreButtonText: {
    color: "#212529",
    fontSize: 16,
    fontWeight: "bold",
  },
});
