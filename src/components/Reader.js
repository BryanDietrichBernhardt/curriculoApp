import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Reader = () => {
  return(
    <View style={styles.apresentation}>
      <Text style={styles.nameText}>Bryan Dietrich Bernhardt</Text>
      <Text style={styles.descriptionText}>Programmer and Electronics Technician</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  apresentation: {
    paddingVertical: 40,
    alignContent: 'center',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  nameText: {
    fontSize: 16,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 13,
  },
});

export default Reader