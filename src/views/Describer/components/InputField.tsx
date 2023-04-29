import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Snackbar,
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
  setPackageName: (packageName: string | null) => void;
  setFlag:(flag:boolean|null)=>void;
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
const InputField = ({ setActivities, setPackageName,setFlag }: InputFieldProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setErrorShowAlert] = useState(false);

  const handleAlertClose = () => {
    setShowAlert(false);
  };
  const handleErrorAlertClose = () => {
    setErrorShowAlert(false);
  };
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
                  response.json().then((data) => {
                    setActivities(data.activities);
                    setPackageName(data.packageName);
                  });
                  setShowAlert(true);
                })
                .then()
                .catch((error) => {
                  console.error(
                    "There was a problem with the fetch operation:",
                    error
                  );
                  setErrorShowAlert(true);
                });
            }
          }}
        >
          <Typography>Analysis</Typography>
        </Button>
        <Snackbar
          open={showAlert}
          autoHideDuration={3000}
          onClose={handleAlertClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          
        >
          <Alert
            onClose={handleAlertClose}
            severity="success"
            sx={{ width: "100%" ,color: '#fff'}}
            variant="filled"
          >
            <Typography variant="subtitle1">Success Operation</Typography>
          </Alert>
        </Snackbar>

        <Snackbar
          open={showErrorAlert}
          autoHideDuration={3000}
          onClose={handleErrorAlertClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          
        >
          <Alert
            onClose={handleErrorAlertClose}
            severity="error"
            sx={{ width: "100%",color: '#fff' }}
            variant="filled"
          >
            <Typography variant="subtitle1">Error Operation</Typography>
          </Alert>
        </Snackbar>
      </Box>
    </DashboardCard>
  );
};

export default InputField;
