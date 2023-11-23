import React from "react";
import { Box, Typography, Paper, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function DetailView({ details, onClose }) {
  return (
    <Paper elevation={3} sx={{ position: "relative", padding: 2 }}>
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", right: 0, top: 0 }}
      >
        <CloseIcon />
      </IconButton>
      <Typography variant="h4" gutterBottom>
        Detail View
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
