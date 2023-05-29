import { AppBar, Box, IconButton, Stack, Toolbar } from "@mui/material";
import { IconMenu } from "@tabler/icons";
import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop:"1rem"
      }}
    >
      <a href="https://beian.miit.gov.cn/">备案号：京ICP备2023011478号</a>
      <a>版权信息 © 2023 ckx-sec。保留所有权利。</a>
    </footer>
    //     <AppBar
    //     sx={(theme) => ({
    //       boxShadow: "none",
    //       background: theme.palette.background.paper,
    //       justifyContent: "center",
    //       backdropFilter: "blur(4px)",
    //       [theme.breakpoints.up("lg")]: {
    //         minHeight: "70px",
    //       },
    //       alignItems:"center"

    //     })}

    //     position="sticky"
    //     color="default"
    //   >

    //     <a href="https://beian.miit.gov.cn/">备案号：京ICP备2023011478号</a>
    //     <a>版权信息 © 2023 ckx-sec。保留所有权利。</a>

    //   </AppBar>
  );
};

export default Footer;
