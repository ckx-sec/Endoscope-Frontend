import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
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

interface InputFieldProps {
  setActivities: (activities: Array<string> | null) => void;
  setPackageName: (packageName:string|null)=>void;
}
const UploadButton = ({ setFile }: UploadButtonProps) => {
  return (
    <IconButton color="primary" aria-label="upload picture" component="label">
      <input
        hidden
        type="file"
        onChange={async (e) => {
          setFile(e.target.files?.[0] ?? null);
        }}
      />
      <IconUpload />
    </IconButton>
  );
};
const InputField = ({setActivities,setPackageName}:InputFieldProps) => {
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

        <Button
          sx={{ alignSelf: "flex-end" }}
          variant="contained"
          onClick={async () => {
            if (file != null) {
              const formData = new FormData();
              formData.append("file", file);
              await fetch(
                "http://localhost:4000/api/backend/v1/describer/getapkinfo",
                {
                  method: "POST",
                  body: formData,
                }
              )
                .then((response) => {
                  if (!response.ok) {
                    throw new Error("Network response was not ok");
                  }
                  response.json().then(data => {
                    setActivities(data.activities)
                    setPackageName(data.packageName)
                  })
                
                })
                .then()
                .catch((error) => {
                  console.error(
                    "There was a problem with the fetch operation:",
                    error
                  );
                });
            }
          }}
        >
          <Typography>Analysis</Typography>
        </Button>
      </Box>
    </DashboardCard>
  );
};

export default InputField;
