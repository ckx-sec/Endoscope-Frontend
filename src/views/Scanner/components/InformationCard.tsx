import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";
import DashboardCard from "../../../components/shared/DashboardCard";

const InformationCard = () => {
  return (
    <DashboardCard title="Cognito IdentityPoolId Map">
      <Box border={"0px solid black"} height="600px" position="relative">
        <Card
          elevation={16}
          sx={{
            position: "absolute",
            top: "10px",
            left: "100px",
            height: "150px",
            width: "200px",
            border: "0.5px solid #49BEFF",
          }}
        >
          <CardContent>
            <Typography variant="h6">{"AndroidManifest"}</Typography>
          </CardContent>
        </Card>
        <Card
          elevation={16}
          sx={{
            position: "absolute",
            top: "10px",
            left: "350px",
            height: "150px",
            width: "200px",
            border: "0.5px solid #49BEFF",
          }}
        >
          <CardContent>
            <Typography variant="h6">{"Reources.arsc"}</Typography>
          </CardContent>
        </Card>
        <Card
          elevation={16}
          sx={{
            position: "absolute",
            top: "220px",
            left: "100px",
            height: "350px",
            width: "350px",
            border: "0.5px solid #49BEFF",
          }}
        >
          <CardContent>
            <Typography variant="h6">{"APKINFO"}</Typography>
          </CardContent>
        </Card>
        <Card
          elevation={16}
          sx={{
            position: "absolute",
            top: "220px",
            left: "520px",
            height: "150px",
            width: "200px",
            border: "0.5px solid #49BEFF",
          }}
        >
          <CardContent>
            <Typography variant="h6">{"Classes.dex"}</Typography>
          </CardContent>
        </Card>
        <Card
          elevation={16}
          sx={{
            position: "absolute",
            top: "420px",
            left: "520px",
            height: "150px",
            width: "200px",
            border: "0.5px solid #49BEFF",
          }}
        >
          <CardContent>
            <Typography variant="h6">{"Configuration"}</Typography>
          </CardContent>
        </Card>
        {/* <Box border={"1px solid black"} height="150px" width="200px" sx={{position: "absolute",top: "10px",left: "300px"}}></Box> */}
        {/* <Box
          border={"0px solid black"}
          height="120px"
          width="120px"
          justifyContent="center"
          alignItems="center"
          display="flex"
          sx={{ position: "absolute", top: "0px", right: "0px" }}
        >
          <CircularProgress />
          <Typography>进度显示</Typography>
        </Box> */}
      </Box>
    </DashboardCard>
  );
};

export default InformationCard;
