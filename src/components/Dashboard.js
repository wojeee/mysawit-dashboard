import React, { useState } from "react";
import Box from "@mui/material/Box";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import DataTable from "./DataTable";
import DetailView from "./DetailView";

function Dashboard() {
  const [selectedItemDetails, setSelectedItemDetails] = useState(null);
  const [showDetailView, setShowDetailView] = useState(false);

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
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <TopBar />
        <DataTable onRowClick={handleRowClick} />

        {/* Add margin for visual separation */}
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
