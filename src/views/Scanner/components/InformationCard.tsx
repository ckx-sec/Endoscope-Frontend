import {
  Chip,
  Grid,
  Tooltip,

} from "@mui/material";
import DashboardCard from "../../../components/shared/DashboardCard";

interface message {
  keyinfo: string;
  apkname: string;
  filename: string;
}
interface InformationCardProps {
  scanMessage: Array<message> | null;
}
const InformationCard = ({ scanMessage }: InformationCardProps) => {
  if (scanMessage != null) {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <DashboardCard title="AndroidManifest.xml">
            {scanMessage.map((message) => {
              if (message["filename"] === "AndroidManifest.xml") {
                return (
                  <Tooltip title={message["keyinfo"]} placement="right-start">
                    <Chip
                      sx={{
                        px: "4px",
                        backgroundColor: "secondary.main",
                        color: "#fff",
                        margin: "3px",
                      }}
                      size="small"
                      label={message["keyinfo"]}
                    ></Chip>
                  </Tooltip>
                );
              }
            })}
          </DashboardCard>
        </Grid>
        <Grid item xs={12} lg={6}>
          <DashboardCard title="Resource.arsc">
            {scanMessage.map((message) => {
              if (message["filename"] === "Resource.arsc") {
                return (
                  
                  <Tooltip title={message["keyinfo"]} placement="right-start">
                    <Chip
                      sx={{
                        px: "4px",
                        backgroundColor: "secondary.main",
                        color: "#fff",
                        margin: "3px",
                      }}
                      size="small"
                      label={message["keyinfo"]}
                    ></Chip>
                  </Tooltip>
                );
              }
            })}
          </DashboardCard>
        </Grid>

        <Grid item xs={12} lg={6}>
          <DashboardCard title="Classes.dex">
            {scanMessage.map((message) => {
              if (message["filename"] === "Classes.dex") {
                return (
                  <Tooltip title={message["keyinfo"]} placement="right-start">
                    <Chip
                      sx={{
                        px: "4px",
                        backgroundColor: "secondary.main",
                        color: "#fff",
                        margin: "3px",
                      }}
                      size="small"
                      label={message["keyinfo"]}
                    ></Chip>
                  </Tooltip>
                );
              }
            })}
          </DashboardCard>
        </Grid>
        <Grid item xs={12} lg={6}>
          <DashboardCard title="Configuration">
            {scanMessage.map((message) => {
              if (message["filename"] === "Configuration") {
                return (
                  <Tooltip title={message["keyinfo"]} placement="right-start">
                    <Chip
                      sx={{
                        px: "4px",
                        backgroundColor: "secondary.main",
                        color: "#fff",
                        margin: "3px",
                      }}
                      size="small"
                      label={message["keyinfo"]}
                    ></Chip>
                  </Tooltip>
                );
              }
            })}
          </DashboardCard>
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={6}>
        <DashboardCard
          title="AndroidManifest.xml"
          subtitle="未找到信息"
        ></DashboardCard>
      </Grid>
      <Grid item xs={12} lg={6}>
        <DashboardCard
          title="Resource.arsc"
          subtitle="未找到信息"
        ></DashboardCard>
      </Grid>

      <Grid item xs={12} lg={6}>
        <DashboardCard
          title="Classes.dex"
          subtitle="未找到信息"
        ></DashboardCard>
      </Grid>
      <Grid item xs={12} lg={6}>
        <DashboardCard
          title="Configuration"
          subtitle="未找到信息"
        ></DashboardCard>
      </Grid>
    </Grid>
  );
};

export default InformationCard;
