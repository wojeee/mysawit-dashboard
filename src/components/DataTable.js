import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function DataTable() {
  // Example data, replace with your actual data
  const rows = [
    createData(
      "87",
      "Luke Norton",
      "Nov 3, 2023",
      "7:00AM",
      "Nov 3, 2023",
      "5:00PM"
    ),
    createData(
      "24",
      "Manai Matin",
      "Nov 6, 2023",
      "12:30PM",
      "Nov 6, 2023",
      "6:20PM"
    ),
    // Add more rows here
  ];

  return (
    <TableContainer
      component={Paper}
      elevation={4}
      sx={{ maxWidth: "100%", marginTop: 2 }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID Item</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Tarikh Pinjam</TableCell>
            <TableCell>Masa Pinjam</TableCell>
            <TableCell>Tarikh Pulang</TableCell>
            <TableCell>Masa Pulang</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.user}</TableCell>
              <TableCell>{row.tarikhPinjam}</TableCell>
              <TableCell>{row.masaPinjam}</TableCell>
              <TableCell>{row.tarikhPulang}</TableCell>
              <TableCell>{row.masaPulang}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
