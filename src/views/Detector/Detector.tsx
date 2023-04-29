import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import InputField from "./components/InputField";
import IoTTable from "./components/IoTTable";

// components

interface policy {
  list: boolean;
  create: boolean;
  attach: boolean;
  detach: boolean;
  delete: boolean;
  get: boolean;
}

interface thing {
  list: boolean,
  register: boolean,
  create: boolean,
  describe: boolean,
  delete: boolean
}
interface topicRule {
  create: boolean,
  delete: boolean,
  disable: boolean,
  enable: boolean,
  get: boolean,
  list: boolean,
  replace: boolean
}
interface iotTable {
  iotClient: string,
  poolid: string,
  endpoint: string,
  policy: policy,
  thing:thing,
  topicRule:topicRule
}
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
  const [iottable,setIoTTable]=useState<iotTable|null>(null)
  return (
    <PageContainer title="Detector" description="this is Detector">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
                <InputField setIoTTable={setIoTTable}/>
             
          </Grid>
          <Grid item xs={12} lg={12}>
            <IoTTable iotTable={iottable}/>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Detector;
