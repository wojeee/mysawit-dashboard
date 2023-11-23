import React, { useState } from "react";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

function DataTable({ onRowClick }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Define your data structure here. For example:
  const rows = [
    createData(
      "87",
      "Charles Leclerc",
      "Nov 3, 2023",
      "7:00AM",
      "Nov 3, 2023",
      "5:00PM"
    ),
    createData(
      "24",
      "Carlos Sainz",
      "Nov 6, 2023",
      "12:30PM",
      "Nov 6, 2023",
      "6:20PM"
    ),
    // ... add more data as needed
  ];

  // Function to filter rows based on the search term
  const filteredRows = rows.filter((row) => {
    return row.user.toLowerCase().includes(searchTerm.toLowerCase());
    // Add additional conditions here for other fields if needed
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          backgroundColor: "background.paper",
        }}
      >
        <Typography variant="h6" component="div">
          Sedang Digunakan
        </Typography>
        <Box>
          <IconButton>
            <FilterListIcon />
          </IconButton>
          <TextField
            size="small"
            placeholder="Search"
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Box>
      </Box>
      <TableContainer component={Paper} elevation={4}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID Item</TableCell>
              <TableCell>User</TableCell>
              <TableCell>Tarikh Pinjam</TableCell>
              <TableCell>Masa Pinjam</TableCell>
              <TableCell>Tarikh Pulang</TableCell>
              <TableCell>Masa Pulang</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.id} hover onClick={() => onRowClick(row)}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.user}</TableCell>
                <TableCell>{row.tarikhPinjam}</TableCell>
                <TableCell>{row.masaPinjam}</TableCell>
                <TableCell>{row.tarikhPulang}</TableCell>
                <TableCell>{row.masaPulang}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "yellow", "&:hover": { bgcolor: "orange" } }}
                  >
                    Maklumat Lanjut
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

// Helper function to create row data
function createData(
  id,
  user,
  tarikhPinjam,
  masaPinjam,
  tarikhPulang,
  masaPulang
) {
  return { id, user, tarikhPinjam, masaPinjam, tarikhPulang, masaPulang };
}

export default DataTable;
