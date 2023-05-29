import { Button, Typography } from "@mui/material";
import DashboardCard from "../../../components/shared/DashboardCard";

interface ReportProps {
  flag: boolean;
}
function Report({ flag }: ReportProps) {
  const handleDownload = () => {
    const data = JSON.stringify({
      Version: "2012-10-17",
      Statement: [
        {
          Effect: "Allow",
          Action: ["cognito-identity:ListIdentityPools"],
          Resource: "*",
        },
        {
          Effect: "Allow",
          Action: ["cognito-identity:*"],
          Resource:
            "arn:aws:cognito-identity:us-east-1:0123456789:identitypool/us-east-1:1a1a1a1a-ffff-1111-9999-12345678",
        },
        {
          Effect: "Allow",
          Action: ["cognito-sync:*"],
          Resource:
            "arn:aws:cognito-sync:us-east-1:0123456789:identitypool/us-east-1:1a1a1a1a-ffff-1111-9999-12345678",
        },
      ],
    });

    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "policy.json";
    link.click();
  };
  if (flag) {
    return (
      <DashboardCard title="Download Report">
        <Button
          sx={{ alignSelf: "flex-end" }}
          variant="contained"
          color="primary"
          onClick={handleDownload}
        >
          <Typography>Download</Typography>
        </Button>
      </DashboardCard>
    );
  }
  return <DashboardCard title="Report" subtitle="未找到信息"></DashboardCard>;
}
export default Report;
