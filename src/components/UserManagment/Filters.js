import React, { useState } from "react";
import "./Filters.css";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const Filters = () => {
  const statusData = [
    {
      id: 1,
      value: "locked",
    },
    {
      id: 2,
      value: "inactive",
    },
    {
      id: 3,
      value: "active",
    },
  ];
  const [status, setStatus] = useState("any");
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  console.log(status, "status");
  return (
    <div className="filters">
      <div className="filters_search">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Search..."
          variant="outlined"
          size="small"
        />
      </div>
      <div className="filters_username">
        <TextField
          fullWidth
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          size="small"
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
          onChange={handleChange}
          //   helperText="Find it by status"
        >
          {statusData.map((item) => (
            <MenuItem key={item.id} value={item.value}>
              {item.value}
            </MenuItem>
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
