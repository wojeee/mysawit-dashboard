import React, { useState } from "react";
import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import DataTable from "../components/DataTable";
import DetailView from "../components/DetailView";
import StatisticCard from "../components/StatisticCard";
import PieChart from "../components/PieChart"; // Import your PieChartComponent

function Dashboard() {
  const [selectedItemDetails, setSelectedItemDetails] = useState(null);
  const [showDetailView, setShowDetailView] = useState(false);

  // Mock data for the pie chart
  const pieData = [
    { name: "Kenderaan", value: 400 },
    { name: "Jentera", value: 300 },
    { name: "Lain-lain", value: 300 },
    // ... other data
  ];

  const handleRowClick = (itemDetails) => {
    setSelectedItemDetails(itemDetails);
    setShowDetailView(true); // Show the DetailView component
  };

  const handleCloseDetailView = () => {
    setShowDetailView(false); // Hide the DetailView component
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: "250px", // Add a left margin equal to the Sidebar's width
          width: `calc(100% - 250px)`, // Adjust the width of the main content
        }}
      >
        <TopBar />
        <Box
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          <StatisticCard title="Sedang Digunakan" number="20" />
          <StatisticCard title="Tersedia" number="31" />
          <StatisticCard title="Dalam Penyelenggaraan" number="4" />
          <StatisticCard title="Rosak" number="1" />
        </Box>

        {/* Box to contain PieChartComponent with some padding */}
        <Box sx={{ p: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <PieChart data={pieData} />
        </Box>

        <DataTable onRowClick={handleRowClick} />

        <Box sx={{ my: 4 }}>
          {showDetailView && selectedItemDetails && (
            <DetailView
              details={selectedItemDetails}
              onClose={handleCloseDetailView}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
