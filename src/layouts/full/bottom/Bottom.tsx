import { Box, Fab, Tooltip } from "@mui/material";
import {
  IconBrandBaidu,
  IconBrandGithub,
  IconBrandGmail,
  IconBrandGoogle,
  IconBrandMailgun,
  IconBrandTwitter,
} from "@tabler/icons";

const Bottom = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ position: "fixed", right: 50, bottom: 30 }}
    >
      <Tooltip title="https://github.com/ckx-sec" placement="left">
        <Fab
          color="primary"
          aria-label="github"
          href="https://github.com/ckx-sec"
          sx={{ margin: "10px" }}
        >
          <IconBrandGithub />
        </Fab>
      </Tooltip>
      <Tooltip title="13911336781@163.com" placement="left">
        <Fab
          color="secondary"
          aria-label="baidu"
          href="https://baidu.com"
          sx={{ margin: "10px" }}
        >
          <IconBrandBaidu />
        </Fab>
      </Tooltip>
      <Tooltip title="13911336781@163.com" placement="left">
        <Fab
          color="success"
          aria-label="google"
          href="https://google.com"
          sx={{ margin: "10px" }}
        >
          <IconBrandGoogle />
        </Fab>
      </Tooltip>

    </Box>
  );
};

export default Bottom;
