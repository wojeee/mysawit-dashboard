import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalShipping from "@mui/icons-material/LocalShipping";
import Forest from "@mui/icons-material/Forest";
import WorkIcon from "@mui/icons-material/Work";
import Payments from "@mui/icons-material/Payments";
import Description from "@mui/icons-material/Description";
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
  const [openApps, setOpenApps] = React.useState(false); // Assuming apps are always close
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
          <ListItemIcon
            sx={{
              color: theme.palette.primary.contrastText,
            }}
          >
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button component={NavLink} to="/myladang">
          <ListItemIcon
            sx={{
              color: theme.palette.primary.contrastText,
            }}
          >
            <Forest />
          </ListItemIcon>
          <ListItemText primary="MYLadang" />
        </ListItem>

        {/* Dropdown for MYFleet */}
        <ListItem
          button
          onClick={handleAppsClick}
          component={NavLink}
          to="/myfleet"
        >
          <ListItemIcon
            sx={{
              color: theme.palette.primary.contrastText,
            }}
          >
            <LocalShipping />
          </ListItemIcon>

          <ListItemText primary="MYFleet" component={NavLink} to="/myfleet" />
          {openApps ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openApps} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* Subitems for MYFleet */}
            <ListItem
              button
              sx={{ pl: 4 }}
              component={NavLink}
              to="/myfleet/senarai-aset"
            >
              <ListItemText primary="Senarai Aset" />
            </ListItem>
            {/* Add more subitems if necessary */}
          </List>
        </Collapse>
        {/* Other items under APPS */}
        {/* ... */}
      </List>

      <ListItem button component={NavLink} to="/mykerja">
        <ListItemIcon
          sx={{
            color: theme.palette.primary.contrastText,
          }}
        >
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="MYKerja" />
      </ListItem>

      <ListItem button component={NavLink} to="/mygaji">
        <ListItemIcon
          sx={{
            color: theme.palette.primary.contrastText,
          }}
        >
          <Payments />
        </ListItemIcon>
        <ListItemText primary="MYGaji" />
      </ListItem>

      <ListItem button component={NavLink} to="/myinvoice">
        <ListItemIcon
          sx={{
            color: theme.palette.primary.contrastText,
          }}
        >
          <Description />
        </ListItemIcon>
        <ListItemText primary="MYInvoice" />
      </ListItem>

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
        {/* Dropdown for Tetapan */}
        <ListItem button onClick={handleManagementClick}>
          <ListItemIcon
            sx={{
              color: theme.palette.primary.contrastText,
            }}
          >
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
              <ListItemIcon
                sx={{
                  color: theme.palette.primary.contrastText,
                }}
              >
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
              <ListItemIcon
                sx={{
                  color: theme.palette.primary.contrastText,
                }}
              >
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
        <ListItemIcon
          sx={{
            color: theme.palette.primary.contrastText,
          }}
        >
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Log Keluar" />
      </ListItem>
    </Box>
  );
}

export default Sidebar;
