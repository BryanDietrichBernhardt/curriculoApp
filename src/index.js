import React from "react";
import { Image, StyleSheet } from "react-native";
import Reader from "./components/Reader";
import Info from "./components/Info";

const Main = () => {
  return(
    <>
      <Reader />
      <Info />
    </>
    );
};

const styles=StyleSheet.create({
  image: {
    width: 100,
    resizeMode: "contain",
  }
});

export default Main;