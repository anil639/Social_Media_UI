import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import {
  HomeIcons,
  NotificationIcon,
  ShopIcon,
  ConversationIcon,
  WalletIcon,
  SubscriptionIcon,
  MyProfileIcon,
  SettingsIcon,
  LogoutIcon,
} from "./Icons";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(0); // State to track the active menu item

  const handleMenuItemClick = (index) => {
    setActiveMenu(index); // Update the active menu item when clicked
  };
  return (
    <div>
      <div>
        <Paper sx={{ padding: "10px" }}>
          <Typography variant="h3">LOGO</Typography>
        </Paper>
      </div>
      <div style={{ marginTop: "40px" }}>
        <Box sx={{ display: "flex" }}>
          <Paper sx={{ width: "100%", padding: "10px" }}>
            <List component="nav">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <ListItem
                  key={i}
                  button
                  onClick={() => handleMenuItemClick(i)}
                  sx={{
                    borderLeft: activeMenu === i ? "3px solid #007bff" : "none",
                    color: activeMenu === i ? "none" : "#6E7570 ",
                  }}
                >
                  <ListItemIcon>
                    {i === 0 ? (
                      <HomeIcons />
                    ) : i === 1 ? (
                      <NotificationIcon />
                    ) : i === 2 ? (
                      <ShopIcon />
                    ) : i === 3 ? (
                      <ConversationIcon />
                    ) : i === 4 ? (
                      <WalletIcon />
                    ) : i === 5 ? (
                      <SubscriptionIcon />
                    ) : i === 6 ? (
                      <MyProfileIcon />
                    ) : (
                      <SettingsIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      i === 0
                        ? "Home"
                        : i === 1
                        ? "Notifications"
                        : i === 2
                        ? "Shop"
                        : i === 3
                        ? "Conversation"
                        : i === 4
                        ? "Wallet"
                        : i === 5
                        ? "Subscription"
                        : i === 6
                        ? "My Profile"
                        : "Settings"
                    }
                  />
                </ListItem>
              ))}
              <ListItem
                button
                sx={{ marginTop: "50px" }}
                onClick={() => signOut(auth)}
              >
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout"></ListItemText>
              </ListItem>
            </List>
          </Paper>
        </Box>
        <div style={{ display: "flex", gap: 30, marginTop: "2px" }}>
          <Typography sx={{ color: "#8D8D8D", fontSize: "10px" }}>
            2023&#169;logo name
          </Typography>
          <Typography sx={{ color: "#8D8D8D", fontSize: "10px" }}>
            Developed By Anil Kumar Nayak
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Menu;
