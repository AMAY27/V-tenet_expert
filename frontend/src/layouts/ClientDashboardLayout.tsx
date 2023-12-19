import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box, Container, CssBaseline } from "@mui/material";

const ClientDashboardLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        maxHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "#FAF9F6",
      }}
    >
      <CssBaseline />
      <Navbar></Navbar>
      <Container
        component="main"
        maxWidth="xl"
        sx={{ mt: 4, overflowY: "auto" }}
      >
        <Outlet />
      </Container>
    </Box>
  );
};

export default ClientDashboardLayout;
