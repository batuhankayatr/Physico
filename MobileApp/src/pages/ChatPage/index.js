import React, { useEffect, useState, useRef } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import styles from "./styles.js";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import io from "socket.io-client";
import { useSelector } from "react-redux";
import axios from 'axios'; // Axios kullanmak için ekleyin veya mevcut kütüphaneyi kullanın

let socket;

const ChatPage = () => {
  const [socketConnected, setSocketConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [chatId, setChatId] = useState(""); // Sohbet kimlik bilgisini saklamak için state

  const { userData } = useSelector((state) => state.userData);
  const flatListRef = useRef(null);

  console.log(userData);

  useEffect(() => {
    socket = io("http://192.168.56.1:5000/");
    const userId = {
      id: userData.id,
    };

    socket.emit("setup", userId);
    socket.on("connected", () => setSocketConnected(true));

    // accessChat fonksiyonunu çağırarak doğru sohbet kimlik bilgisini alın
    axios.post('http://192.168.56.1:5000/api/chat', {
      doctorId: userData.doctorId, // Doktorun veya hastanın kimlik bilgisi
      patientId: userData.id,
    }).then(response => {
      const chatId = response.data._id; // Örnek olarak dönen veriden sohbet kimlik bilgisini alın
      console.log('Sohbet kimlik bilgisi:', chatId);
      setChatId(chatId);
      socket.emit("join chat", chatId); // Sohbet kimlik bilgisini socket.io ile bağlanmak için kullanın
    }).catch(error => {
      console.error('Sohbet kimlik bilgisini alırken bir hata oluştu:', error);
    });

    socket.on("message received", (fullMessageObject) => {
      setMessages((prevMessages) => [...prevMessages, fullMessageObject]);
      // Yeni mesaj geldiğinde en alta kaydır
      flatListRef.current.scrollToEnd({ animated: true });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;

    const messageData = {
      senderId: userData.id,
      chatId: chatId, // State'ten sohbet kimlik bilgisini alın
      senderType: "Patient", // Gönderen tipini doğru şekilde ayarlayın
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
