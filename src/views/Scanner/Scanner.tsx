import React from "react";
import { Grid, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";

// components
import VerticalStepper from "./components/VerticalStepper";
import InputField from "./components/InputField";
import InformationCard from "./components/InformationCard";

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

const Scanner = () => {
  return (
    <PageContainer title="Scanner" description="this is Scanner">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={9}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <InputField />
              </Grid>
              <Grid item xs={12}>
                <InformationCard />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Grid item xs={12}>
              <VerticalStepper />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Scanner;
