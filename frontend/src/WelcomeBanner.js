import React from "react";

const WelcomeBanner = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100px", // Adjust height as needed
        display: "center",
        justifyContent: "end",
        alignItems: "center",
        backgroundColor: "white", // Optional: background color
        color: "#FFC300",
        fontSize: "4rem", // Adjust font size as needed
        fontWeight: "bold",
        textAlign: "center",
        padding: "20px",
        boxSizing: "border-box",
        marginTop: "60px", // Adjust according to navbar height
      }}
    >
      Bem-vindo à Gleba
    </div>
  );
};

export default WelcomeBanner;
