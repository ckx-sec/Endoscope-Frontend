import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  ListSubheaderProps,
  Typography,
} from "@mui/material";
import {
  IconActivity,
  IconLayoutDashboard,
  IconListDetails,
  IconLogin,
  IconReportAnalytics,
  IconScan,
  IconTerminal2,
  IconUserPlus,
} from "@tabler/icons";
import { ReactNode } from "react";
import { Link,useLocation } from "react-router-dom";
import Logo from "../../../components/shared/Logo";

const ListSubheaderStyled = (props: ListSubheaderProps) => (
  <ListSubheader
    sx={(theme) => ({
      ...theme.typography.overline,
      fontWeight: "700",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(0),
      color: theme.palette.text.primary,
      lineHeight: "26px",
      padding: "3px 12px",
    })}
    disableSticky
    {...props}
  />
);

interface MyListItemProps {
  icon: ReactNode;
  title: ReactNode;
  href: string;
}
const MyListItem = ({ icon, title, href }: MyListItemProps) => {
  const { pathname } = useLocation();
  return (
    <ListItemButton
      sx={(theme) => ({
        whiteSpace: "nowrap",
        marginBottom: "2px",
        padding: "8px 10px",
        borderRadius: "8px",
        backgroundColor: "inherit",
        color: theme.palette.text.secondary,
        paddingLeft: "10px",
        "&:hover": {
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.main,
        },
        "&.Mui-selected": {
          color: "white",
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: "white",
          },
        },
      })}
      component={Link}
      to={href}
      selected={pathname === href}
    >
      <ListItemIcon
        sx={{
          minWidth: "36px",
          p: "3px 0",
          color: "inherit",
        }}
      >
        {icon}
      </ListItemIcon>
      <ListItemText>{title}</ListItemText>
    </ListItemButton>
  );
};

interface SidebarProps {
  // isSidebarOpen: boolean;
  // onSidebarClose:()=>void
}
const Sidebar = ({}: SidebarProps) => {
  const sidebarWidth = "270px";
  return (
    <Box sx={{ width: sidebarWidth, flexShrink: 0 }}>
      <Drawer
        anchor="left"
        open
        variant="permanent"
        PaperProps={{
          sx: {
            width: sidebarWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Box sx={{ height: "100%" }}>
          <Box px={3} display="flex">
            <Logo />
            <Box marginTop="20px">
              <Typography variant="h3" height="100%">
                Endoscope
              </Typography>
            </Box>
          </Box>
          <Box sx={{ px: 3 }}>
            <List sx={{ pt: 0 }} className="sidebarNav">
              <ListSubheaderStyled>Home</ListSubheaderStyled>
              <List>
                <MyListItem
                  icon={<IconLayoutDashboard />}
                  title={<div>Overview</div>}
                  href={"/overview"}
                />
              </List>
              <ListSubheaderStyled>Demonstration</ListSubheaderStyled>
              <List>
                <MyListItem
                  icon={<IconListDetails />}
                  title={<div>Describer</div>}
                  href={"/describer"}
                />
                <MyListItem
                  icon={<IconScan />}
                  title={<div>Scanner</div>}
                  href={"/scanner"}
                />
                <MyListItem
                  icon={<IconActivity />}
                  title={<div>Detector</div>}
                  href={"/detector"}
                />
                <MyListItem
                  icon={<IconReportAnalytics />}
                  title={<div>Evaluator</div>}
                  href={"/evaluator"}
                />
              </List>
              <ListSubheaderStyled>Exploit</ListSubheaderStyled>
              <List>
                <MyListItem
                  icon={<IconTerminal2 />}
                  title={<div>Test</div>}
                  href={"/test"}
                />
              </List>
            </List>
            <ListSubheaderStyled>Auth</ListSubheaderStyled>
              <List>
                <MyListItem
                  icon={<IconUserPlus />}
                  title={<div>Register</div>}
                  href={"/auth/register"}
                />
                <MyListItem
                  icon={<IconLogin />}
                  title={<div>Login</div>}
                  href={"/auth/login"}
                />
              
              </List>
          </Box>
          
        </Box>
        
      </Drawer>
    </Box>
  );
};
export default Sidebar;
