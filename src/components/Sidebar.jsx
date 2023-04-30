import { Stack, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Logo from "../assets/Logo.png";
import HeroImage from "../assets/HeroImage.png";
import { categories } from "../assets/constants";
const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState("Recurring");
  return (
    <>
      <Stack direction="row">
        <Stack
          direction="row"
          sx={{
            marginLeft: "40px",
            paddingLeft: "30px",
            marginTop: "-100px",
            width: "200px",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Stack marginTop="20px">
            <Box marginBottom="40px" sx={{ cursor: "pointer" }}>
              <ArrowBackIcon />
              <img style={{ marginLeft: "10px" }} src={Logo} alt="Logo" />
            </Box>
            <Stack direction="column">
              {categories.map((category) => (
                <span
                  className="category-btn"
                  onClick={() => setSelectedCategory(category.name)}
                  style={{
                    color: "black",
                    background: category.name === selectedCategory && "#EEF0FF",
                    borderRadius: "8px",
                    padding: "10px",
                    marginBottom: "10px",
                    display: "flex",
                    cursor: "pointer",
                    width: "150px",
                  }}
                  key={category.name}
                >
                  <span style={{ marginRight: "15px" }}>{category.icon}</span>
                  <span>{category.name}</span>
                </span>
              ))}
            </Stack>
          </Stack>
        </Stack>

        {/* <Stack>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "3px",
                width: "425px",
                height: "70px",
                justifyContent: "space-between",
                padding: "20px",
                alignItems: "center",
              }}
            >
              Last 30 days:
              <div
                style={{ display: "flex", alignItems: "center", gap: "3px" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "70px",
                    height: "70px",
                    padding: "10px",
                    backgroundColor: "#48C446",
                    borderRadius: "8px",
                  }}
                >
                  <p>PAID</p>
                  <p>$24,000</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "70px",
                    height: "70px",
                    padding: "10px",
                    backgroundColor: "#BDBDBD",
                    borderRadius: "8px",
                  }}
                >
                  <p>PENDING</p>
                  <p>$41,000</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "70px",
                    height: "70px",
                    padding: "10px",
                    backgroundColor: "#EC615B",
                    borderRadius: "8px",
                  }}
                >
                  <p>OVERDUE</p>
                  <p>$65,600</p>
                </div>
              </div>
            </div>
          </Box>
          <Box  
            sx={{
                marginLeft: "740px",
                paddingLeft: "30px",
                width: "450px",
                marginTop: "-122vh",
                backgroundColor: "white",
                borderRadius: "10px",
                }}
            >
            <img src="" alt="avatar" />
            <Typography>
                Jort kkkkkk
            </Typography>
          </Box>
        </Stack> */}
      </Stack>
    </>
  );
};

export default Sidebar;
