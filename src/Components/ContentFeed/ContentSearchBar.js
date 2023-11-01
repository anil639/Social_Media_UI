import React from "react";

import { Paper, Typography } from "@mui/material";
import { SearchIcon, FilterIcon } from "../Icons";
const ContentSearchBar = () => {
  return (
    <div>
      <Paper
        sx={{
          height: "55px",
          display: "flex",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SearchIcon />
            <input
              type="search"
              placeholder="Search Here ..."
              style={{ border: "none", marginLeft: "5px", flex: 1 }}
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "auto",
            }}
          >
            <FilterIcon />
            <Typography>Filters</Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default ContentSearchBar;
