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
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            color={file ? undefined : (theme) => theme.palette.grey[400]}
          >
            {file?.name ?? "Upload a file..."}
          </Typography>
          <UploadButton setFile={setFile} />
        </Box>
        
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="Pattern"
          multiline
          maxRows={2}
          defaultValue=""
        />
        <FormLabel component="legend">choose the files want to scan:</FormLabel>
        <FormGroup sx={{ flexDirection: "row" }}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="AndroidManifest.xml"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Resource.arsc"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Classes.dex"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Configuration"
          />
        </FormGroup>

        <Button sx={{ alignSelf: "flex-end" }} variant="contained">
          <Typography>
          Scan
          </Typography>
         
        </Button>
      </Box>
    </DashboardCard>
  );
};

export default InputField;
