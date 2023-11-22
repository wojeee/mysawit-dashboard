import React from "react";
import Box from "@mui/material/Box";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import StatisticCard from "./StatisticCard";
// ... import other components here as you create them

function Dashboard() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <TopBar />
        <Box
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          {/* Example usage of StatisticCard */}
          <StatisticCard title="Sedang Digunakan" number="20" />
          <StatisticCard title="Tersedia" number="31" />
          <StatisticCard title="Dalam Penyelenggaraan" number="4" />
          <StatisticCard title="Rosak" number="1" />
          {/* Add more StatisticCards here */}
        </Box>
        {/* Rest of the dashboard content will go here */}
      </Box>
    </Box>
  );
}

export default Dashboard;
