import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Verified as VerifiedIcon } from "@mui/icons-material";
import WebsiteCard from "../../components/WebsiteCard";
import { websiteDataList } from "../../data";
import { useState } from "react";
import WebsiteOnboardingForm from "../../components/client/WebsiteOnboardingForm";

const CustomPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  background: theme.palette.background.paper,
  borderRadius: 16,
}));

const DashboardPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [onboardingForm, setOnboardingForm] = useState<boolean>(false);

  return (
    <>
      <Grid container spacing={4} sx={{ mt: -1, mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography color="primary" variant="h6">
                Total Websites
              </Typography>
              <Typography color="textPrimary" variant="h4">
                14
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography color="primary" variant="h6">
                Certification In Progress
              </Typography>
              <Typography color="textPrimary" variant="h4">
                5
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography color="primary" variant="h6">
                Websites Certified
              </Typography>
              <Typography color="textPrimary" variant="h4">
                6
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ borderRadius: 4 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography color="primary" variant="h6">
                Websites Rejected
              </Typography>
              <Typography color="textPrimary" variant="h4">
                3
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7} order={isMobile ? 2 : 1}>
          <CustomPaper>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
            >
              <Typography variant="h5" component="div" color="primary">
                Your Websites
              </Typography>
              <Button variant="text" color="secondary">
                View all
              </Button>
            </Stack>
            <Grid container spacing={4} sx={{ mt: "-8px" }}>
              {websiteDataList.map((website) => (
                <Grid item xs={12} md={4} key={website.id}>
                  <WebsiteCard
                    websiteId={website.id}
                    baseUrl={website.baseUrl}
                    websiteName={website.name}
                    isCompleted={website.isCompleted}
                    phase={website.phase}
                  />
                </Grid>
              ))}
            </Grid>
          </CustomPaper>
        </Grid>
        <Grid item xs={12} md={5} order={isMobile ? 1 : 2}>
          <CustomPaper
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              height: "100%",
            }}
          >
            <Typography variant="h4" color="primary">
              Certify your websites
            </Typography>
            <VerifiedIcon
              sx={{ m: 4, width: 100, height: 100 }}
              color="primary"
            />
            <Typography variant="body1" sx={{ mb: 2 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              facilis aliquam nostrum doloribus provident est neque
              reprehenderit repellendus ipsum quis id, error aut beatae numquam
              tempora, cum corporis aspernatur odio excepturi sunt magni alias?
              Deserunt.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setOnboardingForm(true)}
            >
              Certify your website
            </Button>
          </CustomPaper>
        </Grid>
      </Grid>

      <WebsiteOnboardingForm
        fullScreen={isMobile}
        open={onboardingForm}
        onClose={() => setOnboardingForm(false)}
      />
    </>
  );
};

export default DashboardPage;
