import React from "react";

import { Paper, Typography } from "@mui/material";
import { SearchIcon, FilterIcon } from "../Icons";
const ContentSearchBar = () => {
  return (
    <div>
      <Paper
        sx={{
          height: "55px",
          padding: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex" }}>
            <SearchIcon />
            <input
              type="search"
              placeholder="Search Here ..."
              style={{ border: "none" }}
            ></input>
          </div>
          <div style={{ display: "flex", marginLeft: "auto" }}>
            <FilterIcon />
            <Typography>Filters</Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default ContentSearchBar;
