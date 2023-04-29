
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const APKInfoCard= () =>{
  return (
    
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="275"
          image="/apklogotest.png"
          alt="apkinfo"
        />
        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            APK Info
          </Typography>
          <Typography variant="body2" color="text.secondary">
            there is something
          </Typography>
        </CardContent> */}
      </CardActionArea>
    </Card>
  );
}
export default APKInfoCard; 