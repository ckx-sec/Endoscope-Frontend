import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Collapse,
  TableContainer,
  Paper,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import DashboardCard from "../../../components/shared/DashboardCard";
import { IconChevronDown, IconChevronUp } from "@tabler/icons";

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
        <Box justifyContent="center" alignContent="center">
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  padding:"10px"
                }}
              >
                <Typography variant="subtitle2" fontWeight={600}>
                  Policy Permission
                </Typography>
              </Box>

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
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  padding:"10px"
                }}
              >
                <Typography variant="subtitle2" fontWeight={600}>
                  Thing Permission
                </Typography>
              </Box>
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
            </Grid>
            <Grid item xs={12} lg={4}>
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  padding:"10px"
                }}
              >
                <Typography variant="subtitle2" fontWeight={600}>
                  TopicRule Permission
                </Typography>
              </Box>
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
            </Grid>
          </Grid>
        </Box>
      </DashboardCard>
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
