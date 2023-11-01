import React from "react";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
} from "@mui/material";

import CB1 from "../../Images/CB1.png";
import CB2 from "../../Images/CB2.png";
import CB3 from "../../Images/CB3.png";
import CB4 from "../../Images/CB4.png";

const data = [
  {
    image: CB1,
    title: "Modern Wall Decore Frame Painting",
    price: "199.99",
    rating: 5,
  },
  {
    image: CB2,
    title: "Modern Wall Decore Frame Painting",
    price: "199.99",
    rating: 5,
  },
  {
    image: CB3,
    title: "Modern Wall Decore Frame Painting",
    price: "199.99",
    rating: 5,
  },
  {
    image: CB4,
    title: "Modern Wall Decore Frame Painting",
    price: "199.99",
    rating: 5,
  },
];

const ContentBottom = () => {
  return (
    <div
      className="cb"
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        background: "transparent",
        overflowX: "scroll",
      }}
    >
      {data.map((value) => (
        <Card sx={{ minWidth: "40%" }}>
          <CardMedia
            component="img"
            alt={value.title}
            height="150"
            image={value.image}
            title={value.title}
          />
          <CardContent>
            <Typography variant="p" component="div" sx={{ fontSize: "10px" }}>
              {value.title}
            </Typography>
            <div style={{ display: "flex" }}>
              <Typography variant="body1" color="textSecondary" mr={5}>
                ${value.price}
              </Typography>

              <Rating
                size="small"
                name="read-only"
                value={value.rating}
                readOnly
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ContentBottom;
