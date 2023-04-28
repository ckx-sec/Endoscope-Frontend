import { Box, Container } from "@mui/material";
import React,{useState} from "react";
import Sidebar from "../layouts/full/sidebar/Sidebar";
import { Outlet } from "react-router";
import Header from "../layouts/full/header/Header";
import Bottom from "../layouts/full/bottom/Bottom";

const Root = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  return (
    <Box display="flex" minHeight="100vh" width="100%">
      <Sidebar />
      <Box
        display="flex"
        flexGrow={1}
        pb="60px"
        flexDirection="column"
        zIndex={1}
        bgcolor="transparent"
      >
        <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} toggleMobileSidebar={() => setMobileSidebarOpen(true)}/>
        <Container
          sx={{
            pt: "20px",
            maxWidth: "1200px",
          }}
        >
          <Box minHeight="calc(100vh - 170px)">
            <Outlet />
          </Box>
        </Container>
        <Bottom />
      </Box>
    </Box>
  );
};

export default Root;
