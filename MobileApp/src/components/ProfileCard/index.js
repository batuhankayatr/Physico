import React, { useState } from "react";
import { Text, View, Modal, Image } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";
import { PasswordModal } from "../PasswordModal";

const ProfileCard = ({ props }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleInputModal = () => {
    setInputModalVisible(!inputModalVisible);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
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
        <PasswordModal modalVisible={modalVisible} toggleModal={toggleModal}  />
        <TouchableOpacity style={styles.button} onPress={toggleInputModal}>
          <Text style={styles.buttonText}>Change Profile Picture</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={inputModalVisible}
          onRequestClose={toggleInputModal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Change Profile Picture</Text>
              <TouchableOpacity style={styles.modalButton}>
                <Text style={{ color: "white" }} onPress={pickImage}>
                  Pick An Image From Gallery
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton}>
                <Text style={{ color: "white" }} onPress={takePhoto}>
                  Take A Photo
                </Text>
              </TouchableOpacity>
              {selectedImage && (
                <Image
                  source={{ uri: selectedImage }}
                  style={styles.modalImage}
                />
              )}
              <TouchableOpacity style={styles.modalButton}>
                <Text style={{ color: "white" }} onPress={toggleModal}>
                  Submit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton}>
                <Text style={{ color: "white" }} onPress={toggleInputModal}>
                  Close
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity style={styles.logOutButton}>
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileCard;
