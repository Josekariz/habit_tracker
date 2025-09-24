import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";

export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const handleSwitchMode = () => {
    setIsSignUp((prev) => !prev);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>
          {isSignUp ? "Create Account" : "Welcome Back"}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          label="Email"
          autoCapitalize="none"
          keyboardType="email-address"
          mode="outlined"
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          mode="outlined"
          placeholder="Password"
          label="Password"
          secureTextEntry
        />

        <Button style={styles.button} mode="contained">
          {isSignUp ? "Sign Up" : "Sign In"}
        </Button>

        <Button
          style={styles.switchModeButton}
          mode="text"
          onPress={handleSwitchMode}
        >
          {isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
  switchModeButton: {
    marginTop: 16,
  }
});
