import { Box, Card, Chip, CircularProgress, Typography } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";
import DashboardCard from "../../../components/shared/DashboardCard";

interface PackageCardProps {
  packageName: string | null;
}
const PackageCard = (props: PackageCardProps) => {
  if (props.packageName != null) {
    return (
      <DashboardCard title="Package List">
        <Chip
          sx={{
            px: "4px",
            backgroundColor: "secondary.main",
            color: "#fff",
          }}
          size="small"
          label={props.packageName}
        ></Chip>
      </DashboardCard>
    );
  } else {
    return (
      <DashboardCard title="Package List">
        <Typography variant="subtitle1">未找到信息</Typography>
      </DashboardCard>
    );
  }
};

export default PackageCard;
