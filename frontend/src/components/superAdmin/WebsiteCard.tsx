import { Box, Button, Paper, Stack, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AdminWebsites } from "../../types";
import { checkPrimaryExpert, runAutomation } from "../../services/superAdminServices";
import DarkPatternListModal from "./DarkPatternListModal";

const CustomPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

// to display website list for a particular client
const WebsiteCard: React.FC<AdminWebsites> = ({websiteId, baseUrl, websiteName}) => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [patterns, setPatterns] = useState([]);
    const [websiteUrl, setWebsiteUrl] = useState("");
    const [showAutomationButton, setShowAutomationButton] = useState<boolean>(false);

    const checkAssign = async () => {
      try {
        const response = await checkPrimaryExpert(websiteId? websiteId: "");
        if (response) {
          setShowAutomationButton(true);
        }
      } catch (error) {
        console.error('Error--', error);
      }
    };


    useEffect(() => {
      checkAssign();
      // eslint-disable-next-line
    }, []);

    const handleRunAutomationClick = async () => {
      const resp = await runAutomation(websiteId? websiteId: "", baseUrl? baseUrl: "");
      if(resp) {
        setIsModalOpen(true);
        setPatterns(resp);
        setWebsiteUrl(baseUrl? baseUrl: "");
      }
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

  return (
    <CustomPaper elevation={3} style={{ minHeight: "4rem" }}>
      <Stack spacing={3}>
        <DarkPatternListModal websiteId={websiteId? websiteId:""} websiteName={websiteName? websiteName:""} onClose={handleModalClose} isOpen={isModalOpen} patterns={patterns} websiteUrl={websiteUrl}/>
        <Box
          sx={{
            display: "block",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" component="span">
            {websiteName}
          </Typography>
          <div></div>
          <Typography variant="body1" component="span">
            {baseUrl}
          </Typography>
          
          <Box>
          <div>
          <div></div>
            {showAutomationButton ? (
              <Button variant="contained" color="primary" onClick={handleRunAutomationClick}>
                Run Automation
              </Button>
            ) : (
              <Button variant="outlined" color="success">
                Assigned
              </Button>
            )}
          </div>
          </Box>
        </Box>
      </Stack>
    </CustomPaper>
  );
}; 

export default WebsiteCard;
