import React from "react";
import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import FindInPageOutlinedIcon from "@mui/icons-material/FindInPageOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import "./ServicePage.css";
const ServicePage = () => {
  return (
    <Box>
      <Box className="service-section">
        <h1>Our Services</h1>

        <Box className="service-cards">
          <Box className="service-card">
            <FindInPageOutlinedIcon
              sx={{
                placeContent: "center",
                display: "inline-block",
                margin: "auto",
                color: " rgb(79, 104, 93 )",
                width: "20%",
                height: "20%",
              }}
            />
            <Box className="service-content">
              <h3> Detection</h3>
              <p>
                Using advanced detection technology, we analyze your website to
                identify dark patterns, ensuring a user-friendly and ethical
                online presence
              </p>
              <Button
                sx={{
                  placeContent: "center",
                  display: "flex",
                  margin: "auto auto 10px auto",
                  backgroundColor: "rgb(79, 104, 93)",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Get Start
              </Button>
            </Box>
          </Box>
          <Box className="service-card">
            <ImportantDevicesOutlinedIcon
              sx={{
                placeContent: "center",
                display: "inline-block",
                margin: "auto",
                color: " rgb(79, 104, 93  )",
                width: "20%",
                height: "20%",
              }}
            />
            <Box className="service-content">
              <h3>Experts Feed Back </h3>
              <p>
                Our skilled experts manually review your website, identifying
                dark patterns missed by automated tools. Get personalized
                feedback for enhanced user trust and satisfaction.
              </p>
              <Button
                sx={{
                  placeContent: "center",
                  display: "flex",
                  margin: "auto auto 10px auto",
                  backgroundColor: "rgb(79, 104, 93)",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Get Start
              </Button>
            </Box>
          </Box>
          <Box className="service-card">
            <WorkspacePremiumOutlinedIcon
              sx={{
                placeContent: "center",
                display: "inline-block",
                margin: "auto",
                color: " rgb(79, 104, 93  )",
                width: "20%",
                height: "20%",
              }}
            />
            <Box className="service-content">
              <h3> Certification</h3>
              <p>
                Secure a competitive edge with our transparent, ethical
                certification, boosting brand credibility and ensuring a
                trustworthy online experience..
              </p>
              <Link style={{ textDecoration: "none" }} href="/signup">
                <Button
                  sx={{
                    placeContent: "center",
                    display: "flex",
                    margin: "auto auto 10px auto",
                    backgroundColor: "rgb(79, 104, 93)",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Get Start
                </Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicePage;
