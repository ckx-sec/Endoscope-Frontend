import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    FormLabel,
    IconButton,
    TextField,
    Typography,
  } from "@mui/material";
  import { IconDirection, IconUpload } from "@tabler/icons";
  import { useState } from "react";
  import DashboardCard from "../../../components/shared/DashboardCard";
  
  interface UploadButtonProps {
    setFile: (file: File | null) => void;
  }
  const UploadButton = ({ setFile }: UploadButtonProps) => {
    return (
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input
          hidden
          type="file"
          onChange={(e) => {
            setFile(e.target.files?.[0] ?? null);
          }}
        />
        <IconUpload />
      </IconButton>
    );
  };
  const InputField = () => {
    const [file, setFile] = useState<File | null>(null);
    return (
      <DashboardCard title="Input Information">
        <Box
          display="flex"
          flexDirection="column"
          //p={3}
          gap={1}
        >

          <TextField
            required
            fullWidth
            id="outlined-required"
            label="Cognito IdentityPoolId "
            multiline
            maxRows={1}
            defaultValue=""
          />
         
          <FormLabel component="legend">choose AWS Service to test:</FormLabel>
          <FormGroup sx={{ flexDirection: "row" }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="IoT"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="S3"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Lambda"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="AppSync"
            />
          </FormGroup>
  
          <Button sx={{ alignSelf: "flex-end" }} variant="contained">
            <Typography>
            Detect
            </Typography>
           
          </Button>
        </Box>
      </DashboardCard>
    );
  };
  
  export default InputField;
  