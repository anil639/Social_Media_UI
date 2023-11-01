import React from "react";
import { Paper, Typography, Avatar } from "@mui/material";
// images
import te from "../Images/te.png";
import teBG from "../Images/teBG.png";
import cd from "../Images/cd.png";
import cdBG from "../Images/cdBG.png";
import ej from "../Images/ej.png";
import ejBG from "../Images/ejBG.png";
import jw from "../Images/jw.png";
import jwBG from "../Images/jwBG.png";
import zBG from "../Images/zBG.png";

//data
const data = [
  {
    backgroundImage: teBG,
    avatarImage: te,
    name: "Thomas Edward",
    subHeader: "@TheWildwithyou",
  },
  {
    backgroundImage: cdBG,
    avatarImage: cd,
    name: "Chris Doe",
    subHeader: "@TheWildwithyou",
  },

  {
    backgroundImage: ejBG,
    avatarImage: ej,
    name: "Emily Jones",
    subHeader: "@TheWildwithyou",
  },
  {
    backgroundImage: jwBG,
    avatarImage: jw,
    name: "Jessica Williams",
    subHeader: "@TheWildwithyou",
  },
  {
    backgroundImage: zBG,
    avatarImage: te,
    name: "Chris Doe",
    subHeader: "@TheWildwithyou",
  },
];
const Artists = () => {
  return (
    <div>
      <Paper
        sx={{
          height: "55px",
          padding: "10px",
          backgroundColor: "#88C2BB",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          align="center"
          variant="body2"
          sx={{ color: "white", alignItems: "center", fontSize: "16px" }}
        >
          Become a Seller
        </Typography>
      </Paper>
      <div style={{ display: "flex", gap: "10px", marginTop: "40px" }}>
        <Typography
          sx={{ color: "#101010", fontSize: "10px", fontWeight: "bold" }}
        >
          Artists
        </Typography>
        <Typography
          sx={{ color: "#8D8D8D", fontSize: "10px", fontWeight: "bold" }}
        >
          Photographers
        </Typography>
      </div>
      <div
        className="cb"
        style={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "550px",
          background: "transparent",
          overflowY: "scroll",
        }}
      >
        {data.map((value) => (
          <Paper
            sx={{
              marginTop: "10px",
              position: "relative",
              height: "100px",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          >
            <img
              src={value.backgroundImage}
              alt="Your Image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                textAlign: "left",
                color: "#fff",
                padding: "10px",
                zIndex: 1,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>
                <Avatar
                  variant="square"
                  src={value.avatarImage}
                  alt="Avatar"
                  sx={{ marginRight: "10px" }}
                />
              </div>
              <div>
                <Typography variant="subtitle1">{value.name}</Typography>
                <Typography sx={{ fontSize: "10px" }}>
                  {value.subHeader}
                </Typography>
              </div>
            </div>
          </Paper>
        ))}
      </div>
      <div style={{ display: "flex", gap: 45, marginTop: "3px" }}>
        <Typography sx={{ color: "#8D8D8D", fontSize: "10px" }}>
          Privacy
        </Typography>
        <Typography sx={{ color: "#8D8D8D", fontSize: "10px" }}>
          Terms Of Service
        </Typography>
        <Typography sx={{ color: "#8D8D8D", fontSize: "10px" }}>
          Cookie Notice
        </Typography>
      </div>
    </div>
  );
};

export default Artists;
