import React from "react";
import { Grid, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";

// components
import OverviewChart from "./components/OverviewChart";
import TheartBreakup from "./components/TheartBreakup";
import TimeConsumption from "./components/TimeConsumption";
import RecentEvents from "./components/RecentEvent";
import RelevantManufacturer from "./components/RelevantManufacturer";

interface PageContainerProps {
  title: string;
  description: string;
  children: React.ReactNode;
}
const PageContainer = ({
  title,
  description,
  children,
}: PageContainerProps) => (
  <div>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
    {children}
  </div>
);

const Overview = () => {
  return (
    <PageContainer title="Overview" description="this is Overview">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <OverviewChart />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TheartBreakup />
              </Grid>
              <Grid item xs={12}>
                <TimeConsumption />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentEvents />
          </Grid>
          <Grid item xs={12} lg={8}>
            <RelevantManufacturer />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Overview;
