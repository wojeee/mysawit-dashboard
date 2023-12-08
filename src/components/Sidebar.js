import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

function Sidebar() {
  const theme = useTheme();
  const [openApps, setOpenApps] = React.useState(true); // Assuming apps are always open
  const [openManagement, setOpenManagement] = React.useState(false);

  const handleAppsClick = () => {
    setOpenApps(!openApps);
  };

  const handleManagementClick = () => {
    setOpenManagement(!openManagement);
  };

  return (
    <Box
      sx={{
        width: 250,
        bgcolor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        height: "100vh",
        position: "fixed",
      }}
    >
      {/* Logo and Title */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
          bgcolor: theme.palette.primary.main,
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: theme.palette.primary.contrastText }}
        >
          MYSawit
        </Typography>
      </Box>
      <Divider />

      {/* APPS Section */}
      <List
        subheader={
          <ListSubheader
            component="div"
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.grey[100],
            }}
          >
            APPS
          </ListSubheader>
        }
      >
        <ListItem button component={NavLink} to="/dashboard">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={NavLink} to="/myfleet">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="MYFleet" />
        </ListItem>
        {/* Dropdown for MYLadang */}
        <ListItem button onClick={handleAppsClick}>
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="MYLadang" component={NavLink} to="/MYLadang" />
          {openApps ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openApps} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Subitems for MYLadang */}
            <ListItem
              button
              sx={{ pl: 4 }}
              component={NavLink}
              to="/myladang/subitem1"
            >
              <ListItemText primary="Subitem 1" />
            </ListItem>
            {/* Add more subitems if necessary */}
          </List>
        </Collapse>
        {/* Other items under APPS */}
        {/* ... */}
      </List>
      <Divider />

      {/* MANAGEMENT Section */}
      <List
        subheader={
          <ListSubheader
            component="div"
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.grey[100],
            }}
          >
            MANAGEMENT
          </ListSubheader>
        }
      >
        <ListItem button component={NavLink} to="/notifications">
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notifikasi" />
        </ListItem>
        {/* Dropdown for Tetapan */}
        <ListItem button onClick={handleManagementClick}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Tetapan" />
          {openManagement ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openManagement} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              sx={{ pl: 4 }}
              component={NavLink}
              to="/tetapan/user"
            >
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="User" />
            </ListItem>
            <ListItem
              button
              sx={{ pl: 4 }}
              component={NavLink}
              to="/tetapan/support"
            >
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="Support" />
            </ListItem>
            {/* Add more subitems if necessary */}
          </List>
        </Collapse>
        {/* Other items under MANAGEMENT */}
        {/* ... */}
      </List>
      <Divider />
      {/* Logout Item */}
      <ListItem button component={NavLink} to="/logout">
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Log Keluar" />
      </ListItem>
    </Box>
  );
}

export default Sidebar;
