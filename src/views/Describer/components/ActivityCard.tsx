import {
  Box,
  Card,
  Chip,
  CircularProgress,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import DashboardCard from "../../../components/shared/DashboardCard";
interface ActivityCardProps {
  activities: Array<string>|null;
}
const ActivityCard = ({ activities }: ActivityCardProps) => {
  if (activities != null) {
    return (
      <DashboardCard title="Activity List">
        
        {activities.map((activity) => {
          return (
            // <ListItem alignItems="flex-start">
            //   <ListItemText primary={activity}/>
            // </ListItem>
            <Chip
            sx={{
              px: "4px",
              backgroundColor: "secondary.main",
              color: "#fff",
              margin: "3px"
            }}
            size="small"
            label={activity}
          ></Chip>
          );
        })}
      </DashboardCard>
    );
  } else {
    return <DashboardCard title="Activity List"><Typography variant="subtitle1">未找到信息</Typography> </DashboardCard>;
  }
};

export default ActivityCard;
