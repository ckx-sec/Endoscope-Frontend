import React from "react";
import { Grid, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import InputField from "./components/InputField";
import IoTTable from "./components/IoTTable";

// components

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

const Detector = () => {
  return (
    <PageContainer title="Detector" description="this is Detector">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
                <InputField />
             
          </Grid>
          <Grid item xs={12} lg={12}>
            <IoTTable />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Detector;
