import React from "react";
import { Box, Typography, Paper } from "@mui/material";

function DetailView({ details }) {
  // Assuming 'details' is an object with the detailed info of the selected item
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Detail View
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {/* Map through each detail and display it. This is a simple example. */}
        {Object.entries(details).map(([key, value]) => (
          <Typography key={key}>
            <strong>{key}:</strong> {value}
          </Typography>
        ))}
      </Box>
    </Paper>
  );
}

export default DetailView;
