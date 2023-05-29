import { useRef, useState } from "react";
import DashboardCard from "../../../components/shared/DashboardCard";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import { IconUpload } from "@tabler/icons";
interface UploadButtonProps {
  setFile: (file: File | null) => void;
}

interface InputFieldProps {
    setFlag: (flag: boolean) => void;
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
const InputField = ({setFlag}:InputFieldProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setErrorShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const timer = useRef<number>();

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

        <Box sx={{ ml: 63, position: "relative" }}>
          <Button
            sx={{ alignSelf: "flex-end" }}
            variant="contained"
            onClick={async () => {
              if (file != null) {
                const formData = new FormData();
                formData.append("file", file);
                await fetch(
                  "http://43.138.43.114:4000/api/backend/v1/describer/getapkinfo",
                  {
                    method: "POST",
                    body: formData,
                  }
                )
                  .then((response) => {
                    if (!response.ok) {
                      throw new Error("Network response was not ok");
                    }
                    response.json().then((data) => {});
                    setFlag(true);
                    setShowAlert(true);
                    setLoading(true);
                    timer.current = window.setTimeout(() => {
                      setLoading(false);
                    }, 2000);
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
            <Typography>Evaluator</Typography>
          </Button>
        </Box>

        <Snackbar
          open={showAlert}
          autoHideDuration={3000}
          onClose={handleAlertClose}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={handleAlertClose}
            severity="success"
            sx={{ width: "100%", color: "#fff" }}
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
            sx={{ width: "100%", color: "#fff" }}
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
