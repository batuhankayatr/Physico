import { LinearGradient } from "expo-linear-gradient";
import React, {useState} from "react";
import axios from "axios";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addUserData } from "../../redux/features/userData";

const LoginPage = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const handleLogin = () => {
        const userCredentials = {
            email: email,
            password: password
        };
        console.log("giriş");
        axios.post('http://192.168.1.37:5000/api/patient/login', userCredentials)
            .then((res) => {
                navigation.navigate('HomeStack');
                console.log(res.data);
                dispatch(addUserData({
                    id: res.data._id,
                    name: res.data.name,
                    age: res.data.age,
                    height: res.data.height,
                    weight: res.data.weight,
                    pic: res.data.pic,
                    sex: res.data.sex,
                    doctorName: res.data.doctorName
                }))
                
            })
            .catch(err => console.log(err, userCredentials));
    }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={styles.linearGradient}
        colors={["#a6cf97", "#e8e7de"]}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../assets/running-man-silhouette-symbol-icon-vector-logo-1.png")}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input placeholder="E-mail" secureTextEntry={false} value={email} onChangeText={setEmail}/>
          <Input placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Log In" onPress={handleLogin}/>
          <TouchableOpacity>
            <Text>Don't have an account?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity>
            <Text>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LoginPage;
