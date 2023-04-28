import React, { useState } from "react";
import { Grid, Box, Paper } from "@mui/material";
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
  const [activities, setActivities] = useState<Array<string> | null>(null);
  const [packageName, setPackageName] = useState<string | null>(null);
  return (
    <PageContainer title="Describer" description="this is Describer">
      <Box>
        <Grid container spacing={3} height="100%">
          <Grid item xs={12} lg={7}>
  
              <InputField
                setActivities={setActivities}
                setPackageName={setPackageName}
              />
            
          </Grid>
          <Grid item xs={12} lg={5}>
            <Paper elevation={9} sx={{ height: "100%" }}>
              <APKInfoCard />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={4}>
            <PackageCard packageName={packageName ?? null} />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ActivityCard activities={activities ?? null} />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Describer;
