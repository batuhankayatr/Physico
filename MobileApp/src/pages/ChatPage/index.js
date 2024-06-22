import React, { useEffect, useState, useRef } from "react";
import { Text, View, Image, TextInput, Button, FlatList, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import styles from "./styles.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import io from "socket.io-client";
import axios from "axios";
import { useSelector } from "react-redux";

let socket;

const ChatPage = () => {
  const [socketConnected, setSocketConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [chatId, setChatId] = useState(null);

  const { userData } = useSelector((state) => state.userData);
  const flatListRef = useRef(null);

  useEffect(() => {
    const getChatId = async () => {
      try {
        const { data } = await axios.post("http://192.168.56.1:5000/api/chat/access", {
          doctorId: userData.doctorId[0],
          patientId: userData.id,
        });
        setChatId(data._id);
      } catch (error) {
        console.error("Chat ID alınamadı:", error);
      }
    };

    getChatId();
  }, [userData]);

  useEffect(() => {
    if (chatId) {
      socket = io("http://192.168.56.1:5000/");
      const userId = {
        id: userData.id,
      };

      socket.emit("setup", userId);
      socket.on("connected", () => setSocketConnected(true));
      socket.emit("join chat", chatId);
      console.log("Chat ID:", chatId)

      socket.on("message received", (fullMessageObject) => {
        setMessages((prevMessages) => [...prevMessages, fullMessageObject]);
        flatListRef.current.scrollToEnd({ animated: true });
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [chatId]);

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;

    const messageData = {
      senderId: userData.id,
      chatId: chatId,
      senderType: "Patient",
      content: newMessage,
      createdAt: new Date().toISOString(),
    };

    socket.emit("send message", messageData);
    setNewMessage("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#e8e7de", "#97BE5A"]}
        style={styles.linearGradient}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../assets/running-man-silhouette-symbol-icon-vector-logo-1.png")}
          />
        </View>
        <View style={styles.contentContainer}>
          <FlatList
            ref={flatListRef}
            data={messages}
            renderItem={({ item }) => (
              <View style={[
                styles.messageContainer,
                item.senderPatient ? styles.patientMessage : styles.doctorMessage
              ]}>
                <Text style={styles.messageText}>{item.content}</Text>
                <Text>{item.senderType}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            onContentSizeChange={() => flatListRef.current.scrollToEnd({ animated: true })}
          />
          <View style={styles.inputContainer}>
            <TextInput
              value={newMessage}
              onChangeText={setNewMessage}
              placeholder="Type your message"
              style={styles.input}
            />
            <TouchableOpacity onPress={sendMessage}>
              <Text style={styles.sendButton}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default ChatPage;
