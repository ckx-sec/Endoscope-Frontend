import {
  IconButton,
  Badge,
  Box,
  Stack,
  AppBar,
  Toolbar,
} from "@mui/material";
import { IconBellRinging, IconMenu } from "@tabler/icons";
import Profile from "./Profile";

interface headerProps{
  sx?:object,
  toggleMobileSidebar?:any,
  toggleSidebar?:any
}
const Header = (props:headerProps) => {
  return (
    <AppBar
      sx={(theme) => ({
        boxShadow: "none",
        background: theme.palette.background.paper,
        justifyContent: "center",
        backdropFilter: "blur(4px)",
        [theme.breakpoints.up("lg")]: {
          minHeight: "70px",
        },
      })}
      position="sticky"
      color="default"
    >
      <Toolbar
        sx={(theme) => ({ width: "100%", color: theme.palette.text.secondary })}
      >
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={props.toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "inline",
            },
          }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>

        <Badge variant="dot" color="primary">
            <IconBellRinging size="21" stroke="1.5" />
          </Badge>

        <Box flexGrow={1} />
        {/* Identity */}
        <Stack spacing={1} direction="row" alignItems="center">
          {/* <Button
            variant="contained"
            color="primary"
            target="_blank"
            href="https://adminmart.com/product/modernize-react-mui-dashboard-template/"
          >
            Upgrade to Pro
          </Button> */}
          <Profile />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
