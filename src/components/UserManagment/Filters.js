import React, { useState } from "react";
import "./Filters.css";
import StatusData from "./StatusData";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const Filters = ({ search, setSearch, username, setUsername }) => {
  const [status, setStatus] = useState("");

  return (
    <div className="filters">
      <div className="filters_search">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Search..."
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="filters_username">
        <TextField
          fullWidth
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          size="small"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="filters_status">
        <TextField
          fullWidth
          id="outlined-select-status"
          select
          label="status"
          size="small"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          {StatusData.map((item) => (
            <MenuItem key={item.id}>{item.value}</MenuItem>
          ))}
        </TextField>
      </div>
      <div></div>
      <div>
        <button className="filters__button">All Filters</button>
      </div>
    </div>
  );
};

export default Filters;
