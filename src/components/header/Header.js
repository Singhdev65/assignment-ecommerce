import React from "react"
import { AppbarContainer, AppbarHeader, MyList } from "./header.styles"
import {
    Box,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
  } from "@mui/material";
  import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Header() {
  return (
    <AppbarContainer>
    <AppbarHeader variant="h4">My Bags</AppbarHeader>
    <MyList type="row">
      <ListItemText primary="Home" />
      <ListItemText primary="Categories" />
      <ListItemText primary="Products" />
      <ListItemText primary="About us" />
      <ListItemText primary="Contact us" />
      <ListItemButton 
      // onClick={() => setShowSearchBox(true)}
      >
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
      </ListItemButton>
        </MyList>
     {/* <Actions matches={matches} />    */}
  </AppbarContainer>
  )
}
