import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { IconDirection, IconUpload } from "@tabler/icons";
import { useState } from "react";
import DashboardCard from "../../../components/shared/DashboardCard";

interface policy {
  list: boolean;
  create: boolean;
  attach: boolean;
  detach: boolean;
  delete: boolean;
  get: boolean;
}

interface thing {
  list: boolean,
  register: boolean,
  create: boolean,
  describe: boolean,
  delete: boolean
}
interface topicRule {
  create: boolean,
  delete: boolean,
  disable: boolean,
  enable: boolean,
  get: boolean,
  list: boolean,
  replace: boolean
}
interface iotTable {
  iotClient: string,
  poolid: string,
  endpoint: string,
  policy: policy,
  thing:thing,
  topicRule:topicRule
}

interface InputFieldProps {
  setIoTTable: (iott: iotTable | null) => void;
}
const InputField = ({ setIoTTable }: InputFieldProps) => {
  const [poolid, setPoolId] = useState<string | null>(null);
  const [name,setName] = useState<string|null>(null);
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
        <TextField
          fullWidth
          id="outlined-required"
          label="APK name"
          multiline
          maxRows={1}
          defaultValue=""
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
          }}
        />
        <Typography></Typography>
        <TextField
          required
          fullWidth
          id="outlined"
          label="Cognito IdentityPoolId"
          multiline
          maxRows={1}
          defaultValue=""
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPoolId(event.target.value);
          }}
        />
        

        <FormLabel component="legend">choose AWS Service to test:</FormLabel>
        <FormGroup sx={{ flexDirection: "row" }}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="IoT" />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="S3"
            checked={false}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Lambda"
            checked={false}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="AppSync"
            checked={false}
          />
        </FormGroup>

        <Button
          sx={{ alignSelf: "flex-end" }}
          variant="contained"
          onClick={async () => {
            if (poolid != null) {
              const formData = new FormData();
              formData.append("poolid", poolid);
              if(name!=null){
                formData.append("filename", name);
              }
              await fetch(
                "http://localhost:4000/api/backend/v1/detector/detect_iot_api",
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
                    setIoTTable(data);
                    setShowAlert(true);
                  });
                })
                .then()
                .catch((error) => {
                  // console.error(
                  //   "There was a problem with the fetch operation:",
                  //   error
                  // );
                  setErrorShowAlert(true);
                });
            }
          }}
        >
          <Typography>Detect</Typography>
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
