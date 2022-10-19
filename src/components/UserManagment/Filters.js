import React, { useState } from "react";
import "./Filters.css";
import StatusData from "./StatusData";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import StaticDateRangePickerDemo from "./StaticDateRangePickerDemo";

const Filters = ({ search, setSearch, username, setUsername }) => {
  const [status, setStatus] = useState([]);

  const onChangeStatus = (event) => {
    const {
      target: { value },
    } = event;
    setStatus(typeof value === "string" ? value.split(",") : value);
  };

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
        <FormControl fullWidth size="small">
          <InputLabel id="demo-multiple-checkbox-label">Status</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={status}
            onChange={onChangeStatus}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(", ")}
          >
            {StatusData.map((item) => (
              <MenuItem key={item.id} value={item.value}>
                <Checkbox checked={status.indexOf(item.value) > -1} />
                <ListItemText primary={item.value} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
        {/* <StaticDateRangePickerDemo /> */}
      </div>
      <div>
        <button className="filters__button">All Filters</button>
      </div>
    </div>
  );
};

export default Filters;
