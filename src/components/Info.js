import React from "react";
import { View, Text, StyleSheet, Image, Linking, WebView, TouchableOpacity } from "react-native";

const Info = () => {
  return(
    <>
      <View style={styles.subReader}>
        <Image
         style={styles.perfilImage}
         source={require("../assets/images/perfil.jpg")}
        />
     </View>
      <View style={styles.post}>
        <Text style={styles.titleText}>> Skills</Text>
        <Text style={styles.basicText}>Html</Text>
        <Text style={styles.basicText}>CSS</Text>
        <Text style={styles.basicText}>JavaScript</Text>
        <Text style={styles.basicText}>Photoshop</Text>
        <Text style={styles.basicText}>ReactNative</Text>
        <Text style={styles.basicText}>Intermediary English</Text>
        <Text style={styles.basicText}>C (programming language)</Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.titleText}>> Academic formation</Text>
        <Text style={styles.basicText}>Elementary School: Colégio Santa Teresinha</Text>
        <Text style={styles.basicText}>High school: Escola Técnica Estadual Monteiro Lobado with electronics technician integrated into high school </Text>
        <Text style={styles.basicText}>IT support course</Text>
        <Text style={styles.basicText}>Devsamurai's ReactNative course</Text>
        <Text style={styles.basicText}>Senac's English Course</Text>
      </View>
      <View style={styles.post}>
        <Text style={styles.titleText}>> Contact (click for open)</Text>

        <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/bryandbernhardt/")}>
          <Text style={styles.basicText}>Linkedin</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("https://github.com/BryanDietrichBernhardt")}>
          <Text style={styles.basicText}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("https://www.instagram.com/baiaaam/")}>
          <Text style={styles.basicText}>Instagram</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("tel:5551986821539")}>
          <Text style={styles.basicText}>Phone: +55 51 98682-1539</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL("mailto:bryan_d_bernhardt@terra.com.br")}>
          <Text style={styles.basicText}>Email: bryan_d_bernhardt@terra.com.br</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  subReader: {
    alignSelf: "center",
    
  },
  perfilImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  post: {
    paddingHorizontal: 20,
    backgroundColor: "#bdc3c7",
    borderRadius: 25,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  titleText: {
    fontSize: 14,
    marginBottom: 5,
  },
  basicText: {
    fontSize: 12,
    marginLeft: 15,
  }
});

export default Info;