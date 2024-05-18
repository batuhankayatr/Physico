import React, { useState } from "react";
import { Text, View, Modal, Button } from "react-native";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProfileCard = ({ props }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#a6cf97", "#e8e7de"]}
        style={styles.linearGradient}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.name}</Text>
        </View>
        <View style={styles.information}>
          <View>
            <Text style={styles.infoText}>Age: {props.age}</Text>
            <Text style={styles.infoText}>Sex: {props.sex}</Text>
            <Text style={styles.infoText}>Weight: {props.weight}</Text>
            <Text style={styles.infoText}>Height: {props.height}</Text>
          </View>
          <View>
            <Text style={styles.infoText}>Your Doctor: {props.doctorName}</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleModal}>
            <Text style={styles.buttonText}>Change Password</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={toggleModal}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Change Password</Text>

                {/* Add form fields and submit button here */}

                <Button title="Cancel" onPress={toggleModal} color="#f00" />
              </View>
            </View>
          </Modal>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Change Profile Picture</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logOutButton}>
            <Text style={styles.buttonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default ProfileCard;
