import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import Users from "./Users";

import UsersData from "./UsersData";
const Content = () => {
  const [search, setSearch] = useState("");
  const [username, setUsername] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setFilteredUsers([]);
    UsersData.filter((value) => {
      if (value.email.toLowerCase().includes(search.toLowerCase())) {
        setFilteredUsers((search) => [...search, value]);
      }
    });
  }, [search]);

  return (
    <div>
      <Filters
        search={search}
        setSearch={setSearch}
        username={username}
        setUsername={setUsername}
      />
      <Users filteredUsers={filteredUsers} />
    </div>
  );
};

export default Content;
