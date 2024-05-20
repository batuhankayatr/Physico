import React from 'react'
import ModalInput from "../ModalInput";
import { Modal, Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

export const PasswordModal = (props) => {
  return (
    <Modal
          animationType="slide"
          transparent={true}
          visible={props.modalVisible}
          onRequestClose={props.toggleModal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Change Password</Text>
              <View style={styles.inputContainer}>
                <ModalInput placeholder="Old Password" />
                <ModalInput placeholder="Password" secureTextEntry={true} />
              </View>
              <TouchableOpacity style={styles.modalButton} onPress={props.toggleModal}>
                <Text style={{ color: "white" }}>
                  Submit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={props.toggleModal}>
                <Text style={{ color: "white" }}>
                  Close
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
  )
}