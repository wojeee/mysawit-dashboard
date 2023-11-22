import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import DescriptionIcon from "@mui/icons-material/Description";
import BuildIcon from "@mui/icons-material/Build"; // Icon for maintenance/settings
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

function Sidebar() {
  const theme = useTheme();

  return (
    <Box
      sx={{ width: 250, height: "100vh", bgcolor: theme.palette.primary.main }}
    >
      {/* Logo and title */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: theme.palette.primary.contrastText }}
        >
          MYFleet
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: theme.palette.primary.light }} />

      {/* First List of navigation items */}
      <List component="nav" aria-label="main mailbox folders">
        {/* Papan Pemuka Item */}
        <ListItem button sx={{ color: theme.palette.primary.contrastText }}>
          <ListItemIcon sx={{ color: theme.palette.primary.contrastText }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText
            primary="Papan Pemuka"
            primaryTypographyProps={{ variant: "h6" }}
          />
        </ListItem>
        {/* Senarai Aset Item */}
        <ListItem button sx={{ color: theme.palette.primary.contrastText }}>
          <ListItemIcon sx={{ color: theme.palette.primary.contrastText }}>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Senarai Aset" />
        </ListItem>

        {/* Notifikasi Item */}
        <ListItem button sx={{ color: theme.palette.primary.contrastText }}>
          <ListItemIcon sx={{ color: theme.palette.primary.contrastText }}>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText
            primary="Notifikasi"
            primaryTypographyProps={{ variant: "h6" }}
          />
        </ListItem>

        {/* Tetapan Item */}
        <ListItem button sx={{ color: theme.palette.primary.contrastText }}>
          <ListItemIcon sx={{ color: theme.palette.primary.contrastText }}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText
            primary="Tetapan"
            primaryTypographyProps={{ variant: "h6" }}
          />
        </ListItem>
      </List>

      <Divider sx={{ bgcolor: theme.palette.primary.light }} />

      {/* Second List for Penyelenggaraan section */}
      <List
        subheader={
          <ListSubheader
            component="div"
            sx={{
              bgcolor: "inherit",
              color: theme.palette.grey[400], // Use a grey color from the theme
              lineHeight: "48px",
              fontSize: theme.typography.h6.fontSize, // Optional: Adjust the font size if needed
            }}
          >
            Penyelenggaraan
          </ListSubheader>
        }
      >
        {/* Selenggara Item */}
        <ListItem button sx={{ color: theme.palette.primary.contrastText }}>
          <ListItemIcon sx={{ color: theme.palette.primary.contrastText }}>
            <BuildIcon />
          </ListItemIcon>
          <ListItemText
            primary="Selenggara"
            primaryTypographyProps={{ variant: "h6" }}
          />
        </ListItem>
        {/* ... Add any additional items related to maintenance if needed */}
      </List>
      {/* You can add other sections or list items here */}
    </Box>
  );
}

export default Sidebar;
