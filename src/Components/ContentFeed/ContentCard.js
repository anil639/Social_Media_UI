import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Button,
  Divider,
} from "@mui/material";

//icons
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Hearticon, CommentIcon, ShareIcon } from "../Icons";

const ContentCard = (props) => {
  return (
    <div style={{ marginTop: "40px" }}>
      {props.details.map((value) => (
        <Card sx={{ mb: "35px" }}>
          <CardHeader
            avatar={<Avatar variant="square" src={value.AvatarImage} />}
            title={value.title}
            subheader={value.subHeader}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
          />
          <CardContent>
            <Typography variant="body1" color="textSecondary" component="p">
              {value.text}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="200"
            image={value.image}
            alt="Placeholder Image"
            sx={{ borderRadius: "5px", maxWidth: "500px", margin: "auto" }}
          />
          <Divider sx={{ marginTop: "25px" }} />
          <CardActions disableSpacing>
            <IconButton aria-label="like">
              <Hearticon />
              <Typography>
                <span
                  style={{
                    marginLeft: "10px",
                    fontWeight: "bold",
                    color: "#101010",
                  }}
                >
                  {value.like}
                </span>
              </Typography>
            </IconButton>
            <IconButton aria-label="comment">
              <CommentIcon />
              <Typography>
                <span
                  style={{
                    marginLeft: "10px",
                    fontWeight: "bold",
                    color: "#101010",
                  }}
                >
                  {value.comment}
                </span>
              </Typography>
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
              <Typography>
                <span
                  style={{
                    marginLeft: "10px",
                    fontWeight: "bold",
                    color: "#101010",
                  }}
                >
                  {value.share}
                </span>
              </Typography>
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default ContentCard;
