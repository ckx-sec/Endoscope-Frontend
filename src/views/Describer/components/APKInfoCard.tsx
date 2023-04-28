import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const APKInfoCard= () =>{
  return (
    // <DashboardCard title="weqw">
    //     ccs
    // </DashboardCard>
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="215"
          image="/apklogotest.png"
          alt="apkinfo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            APK Info
          </Typography>
          <Typography variant="body2" color="text.secondary">
            there is something
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default APKInfoCard; 