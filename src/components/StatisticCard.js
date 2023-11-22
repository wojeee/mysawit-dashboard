import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

function StatisticCard({ title, number }) {
  const theme = useTheme();

  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 275,
        margin: theme.spacing(2),
        bgcolor: theme.palette.card.main, // Use card color from theme
      }}
    >
      <CardContent>
        <Typography variant="h6" color={theme.palette.grey[500]}>
          {title}
        </Typography>
        <Typography
          variant="h5"
          sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
        >
          {number}
        </Typography>
      </CardContent>
      {/* Add more content here if needed */}
    </Card>
  );
}

export default StatisticCard;
