import React, { useState } from "react";
import Box from "@mui/material/Box";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import StatisticCard from "./StatisticCard";
import DataTable from "./DataTable";
import DetailView from "./DetailView"; // Import DetailView component

function Dashboard() {
  // Initially, no item is selected, so selectedItemDetails is set to null
  const [selectedItemDetails, setSelectedItemDetails] = useState(null);

  // Function to handle row click, for now we'll just use the mock data
  const handleRowClick = (itemDetails) => {
    setSelectedItemDetails(itemDetails);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <TopBar />
        <Box
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          <StatisticCard title="Sedang Digunakan" number="20" />
          <StatisticCard title="Tersedia" number="31" />
          <StatisticCard title="Dalam Penyelenggaraan" number="4" />
          <StatisticCard title="Rosak" number="1" />
        </Box>
        {/* Pass the handleRowClick function to the DataTable component */}
        <Box
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          <DataTable onRowClick={handleRowClick} />
        </Box>
        {/* Conditionally render the DetailView component if an item is selected */}
        {selectedItemDetails && <DetailView details={selectedItemDetails} />}
      </Box>
    </Box>
  );
}

export default Dashboard;
