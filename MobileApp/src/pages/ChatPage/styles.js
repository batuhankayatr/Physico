import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 80, // Assuming height of logo container
    flexDirection: 'row'
  },
  logo: {
    width: "50%",
    height: "50%",
    marginLeft: 5,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-end", // Align content to bottom
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: '80%',
  },
  patientMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  doctorMessage: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: "#FFFFFF",
    fontSize: 16,
  },
});
