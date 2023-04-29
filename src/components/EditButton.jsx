import { Box, Menu, MenuItem } from "@mui/material";
import React from "react";

const EditButton = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <td>MadeByMack</td>
      <td>25</td>
      <td>24-20-2024</td>
      <td>1/month</td>
      <td>$3000</td>
      <td>
        <Box>
          <button
            // variant="oulined"
            style={{
              color: "white",
              backgroundColor: "black",
              width: "70px",
              height: "30px",
              cursor: "pointer",
            }}
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            EDIT
          </button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem>Pause</MenuItem>
            <MenuItem>Duplicate</MenuItem>
            <MenuItem>Edit</MenuItem>
            <MenuItem>Terminate</MenuItem>
            <MenuItem>Skip next date</MenuItem>
          </Menu>
        </Box>
      </td>
    </>
  );
};

export default EditButton;
