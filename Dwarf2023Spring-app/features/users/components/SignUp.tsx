import { useState } from "react";
import React from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
import { UserEntity } from "../userEntity";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { signUp } from "../UsersSlice";

export function SignUp() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const handleSignup = () => {

    dispatch(signUp(new UserEntity(username, password)));

    console.log("signup");
    clearForm();
  };

  const clearForm = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <View>
      <View>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Sign Up" onPress={handleSignup} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});