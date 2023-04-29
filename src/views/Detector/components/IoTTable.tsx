
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Chip,
  Grid,
} from "@mui/material";
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
  list: boolean;
  register: boolean;
  create: boolean;
  describe: boolean;
  delete: boolean;
}
interface topicRule {
  create: boolean;
  delete: boolean;
  disable: boolean;
  enable: boolean;
  get: boolean;
  list: boolean;
  replace: boolean;
}
interface iotTable {
  iotClient: string;
  poolid: string;
  endpoint: string;
  policy: policy;
  thing: thing;
  topicRule: topicRule;
}
interface IoTTableProps {
  iotTable: iotTable | null;
}

const IoTTable = ({ iotTable }: IoTTableProps) => {
  if (iotTable != null) {
    const { iotClient, poolid, endpoint, policy, thing, topicRule } = iotTable;
    return (
      <Box>
        <DashboardCard title="IoT Service">
          <Typography variant="subtitle1">Endpoint :</Typography>
          <Chip
            sx={{
              px: "4px",
              backgroundColor: "success.main",
              color: "#fff",
              margin: "3px",
            }}
            size="small"
            label={iotTable.endpoint}
          ></Chip>
          <Typography variant="subtitle1">IdentityPoolID :</Typography>
          <Chip
            sx={{
              px: "4px",
              backgroundColor: "success.main",
              color: "#fff",
              margin: "3px",
            }}
            size="small"
            label={iotTable.poolid}
          ></Chip>
        </DashboardCard>
        <Box justifyContent="center" alignContent="center" mt="30px">
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <DashboardCard title="Policy Permission">
                <Table>
                  <TableBody>
                    {Object.entries(policy).map(([key, value]) => (
                      <TableRow key={key}>
                        <TableCell>
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontWeight: "500",
                            }}
                          >
                            {key}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontWeight: "500",
                            }}
                          >
                            {value ? "✅" : "❌"}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </DashboardCard>
            </Grid>
            <Grid item xs={12} lg={4}>
              {/* */}
              <DashboardCard title="Thing Permission">
                <Table>
                  <TableBody>
                    {Object.entries(thing).map(([key, value]) => (
                      <TableRow key={key}>
                        <TableCell>
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontWeight: "500",
                            }}
                          >
                            {key}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontWeight: "500",
                            }}
                          >
                            {value ? "✅" : "❌"}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </DashboardCard>
            </Grid>
            <Grid item xs={12} lg={4}>
              
              <DashboardCard title="TopicRule Permission">
              <Table>
                <TableBody>
                  {Object.entries(topicRule).map(([key, value]) => (
                    <TableRow key={key}>
                      <TableCell>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "500",
                          }}
                        >
                          {key}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "500",
                          }}
                        >
                          {value ? "✅" : "❌"}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              </DashboardCard>
              
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  } else {
    return (
      <DashboardCard title="IoT Service">
        <Typography variant="subtitle1">未找到信息</Typography>
      </DashboardCard>
    );
  }
};

export default IoTTable;
