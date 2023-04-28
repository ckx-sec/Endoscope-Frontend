import React from "react";
import { Grid, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import InputField from "./components/InputField";
import PackageCard from "./components/PackageCard";
import ActivityCard from "./components/ActivityCard";
import APKInfoCard from "./components/APKInfoCard";

// components
// import VerticalStepper from "./components/VerticalStepper";

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

const Describer = () => {
  return (
    <PageContainer title="Describer" description="this is Describer">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <InputField />
          </Grid>
          <Grid item xs={12} lg={4}>
            <APKInfoCard />
          </Grid>
          <Grid item xs={12} lg={6}>
            <PackageCard />
          </Grid>
          <Grid item xs={12} lg={6}>
            <ActivityCard />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Describer;
