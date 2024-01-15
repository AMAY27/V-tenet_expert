import {
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  ErrorOutline as ErrorOutlineIcon,
  HourglassTop as HourglassTopIcon,
  Menu as MenuIcon,
  Verified as VerifiedIcon,
} from "@mui/icons-material";
import WebsiteCard from "../../components/WebsiteCard";
import { useEffect, useState } from "react";
import WebsiteOnboardingForm from "../../components/client/WebsiteOnboardingForm";
import { getAllWebsites, getClientDashboardKPIData } from "../../api";
import { DashboardKPI, WebsiteResponse } from "../../types";
import { toast } from "react-toastify";
import { KpiCard } from "../../components/client/CustomCards";

const initialKpiData = {
  totalWebsites: "",
  websitesCertified: "",
  websitesInProgress: "",
  websitesRejected: "",
};

const DashboardPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [kpiData, setKpiData] = useState<DashboardKPI>(initialKpiData);
  const [websiteDataList, setWebsiteDataList] = useState<WebsiteResponse[]>([]);
  const [onboardingForm, setOnboardingForm] = useState<boolean>(false);

  const getWebsiteList = async (): Promise<void> => {
    try {
      const websites = await getAllWebsites();
      setWebsiteDataList(websites);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(`Error: ${error.message}`);
      } else {
        toast.error("An unknown error occurred.");
      }
    }
  };

  const getDashboardKPIData = async (): Promise<void> => {
    try {
      const data = await getClientDashboardKPIData();
      setKpiData(data);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Error: ${error.message}`);
      } else {
        toast.error("An unknown error occurred.");
      }
    }
  };

  const handleOnboardingSuccess = (): void => {
    getWebsiteList();
    getDashboardKPIData();
  };

  useEffect(() => {
    getWebsiteList();
  }, []);

  useEffect(() => {
    getDashboardKPIData();
  }, []);

  return (
    <>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <KpiCard
            title={kpiData.totalWebsites}
            subtitle="Total Websites"
            color="primary"
            icon={<MenuIcon />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KpiCard
            title={kpiData.websitesInProgress}
            subtitle="Certification In Progress"
            color="secondary"
            icon={<HourglassTopIcon />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KpiCard
            title={kpiData.websitesCertified}
            subtitle="Websites Certified"
            color="success"
            icon={<VerifiedIcon />}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KpiCard
            title={kpiData.websitesRejected}
            subtitle="Websites Rejected"
            color="error"
            icon={<ErrorOutlineIcon />}
          />
        </Grid>
      </Grid>

      <Grid flex={1} container spacing={2}>
        <Grid item xs={12} md={7}>
          <Paper
            elevation={0}
            sx={{
              padding: (theme) => theme.spacing(2),
              color: (theme) => theme.palette.text.secondary,
              background: (theme) => theme.palette.background.paper,
              borderRadius: 2,
              height: "100%",
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h5" component="span" color="primary">
                Your Websites
              </Typography>
              {websiteDataList.length > 6 && (
                <Button variant="text" color="secondary" size="small">
                  View all
                </Button>
              )}
            </Stack>

            <Grid container spacing={4} sx={{ mt: "-8px" }}>
              {websiteDataList.slice(0, 6).map((website) => (
                <Grid item xs={12} md={4} key={website.websiteId}>
                  <WebsiteCard
                    websiteId={website.websiteId}
                    baseUrl={website.baseUrl}
                    websiteName={website.websiteName}
                    isCompleted={website.isCompleted}
                    phase={website.phase}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5} order={isMobile ? 1 : 2}>
          <Paper
            elevation={0}
            sx={{
              padding: (theme) => theme.spacing(2),
              color: (theme) => theme.palette.text.secondary,
              background: (theme) => theme.palette.background.paper,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              height: "100%",
            }}
          >
            <Typography variant="h4" color="primary">
              Certify your website
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
          </Paper>
        </Grid>
      </Grid>

      <WebsiteOnboardingForm
        fullScreen={isMobile}
        open={onboardingForm}
        onClose={() => setOnboardingForm(false)}
        onSuccess={handleOnboardingSuccess}
      />
    </>
  );
};

export default DashboardPage;
