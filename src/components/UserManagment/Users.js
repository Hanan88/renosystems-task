import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import "./Filters.css";
import "./Users.css";

const Users = ({ filteredUsers }) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          className="table"
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow className="table-row">
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Email Address</TableCell>
              <TableCell>Group</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((item) => (
              <TableRow
                className="table-row"
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Checkbox />
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  className="table-row__cell"
                >
                  <Avatar>{item.name.slice(0, 1)}</Avatar>
                  {item.name}
                </TableCell>
                <TableCell>{item.username}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.group}</TableCell>
                <TableCell>{item.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Users;
