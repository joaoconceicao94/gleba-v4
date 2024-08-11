import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import {
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MelhorPao = () => {
  return (
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl font-sans">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        O melhor pão artesanal entregue{" "}
        <span className="text-yellow-400">em casa</span>.
      </h1>
      <p className="mt-6 text-lg max-w-prose text-muted-foreground">
        Bem-vindo à Gleba.
      </p>
    </div>
  );
};

export default MelhorPao;
