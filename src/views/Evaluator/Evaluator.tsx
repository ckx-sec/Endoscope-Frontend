import { Box, Grid, Paper } from "@mui/material";
import { Helmet } from "react-helmet-async";
import InputField from "./components/InputField";
import VerticalStepper from "./components/VerticalStepper";
import DashboardCard from "../../components/shared/DashboardCard";
import Report from "./components/Report";
import { useState } from "react";

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
function Evaluator() {
  const [flag,setFlag] = useState<boolean>(false);
  
  return (
    <PageContainer title="Evaluator" description="this is Evaluator">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={7}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <InputField setFlag={setFlag}/>
              </Grid>
              <Grid item xs={12}>
                <Report flag={flag??false} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Grid item xs={12}>
              <VerticalStepper />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
}

export default Evaluator;
