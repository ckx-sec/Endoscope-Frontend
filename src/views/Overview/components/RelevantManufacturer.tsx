import React from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Chip
} from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';

const products = [
    {
        manufacturer: "CANDY HOUSE, Inc.",
        app: "co.candyhouse.sesame2",
        downloads: "50K+",
        priority: "Critical",
        pbg: "primary.main",
    },
    {
        manufacturer: "AuberTeam",
        app: "com.auberins",
        downloads: "1K+",
        priority: "Medium",
        pbg: "secondary.main",
    },
    {
        manufacturer: "Foxble, LLC",
        app: "com.foxble.androidfoxble",
        downloads: "100+",
        priority: "Low",
        pbg: "error.main",
    },
    {
        manufacturer: "COCOAENT",
        app: "com.ffff.led",
        downloads: "100K+",
        priority: "High",
        pbg: "success.main",
    },
    {
        manufacturer: "t2Fi",
        app: "com.broilking",
        downloads: "50K+",
        priority: "High",
        pbg: "success.main",
    },
    {
        manufacturer: "Camp Chef",
        app: "com.campchef.iotgrill",
        downloads: "50K+",
        priority: "Critical",
        pbg: "primary.main",
    },
];


const RelevantManufacturer = () => {
    return (

        <DashboardCard title="Relevant Manufacturer">
            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                Manufacturer Name
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                Related App Name
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                Downloads
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Priority
                                </Typography>
                            </TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.app}>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            fontSize: "15px",
                                            fontWeight: "500",
                                        }}
                                    >
                                        {product.manufacturer}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="subtitle2" fontWeight={600}>
                                                {product.app}
                                            </Typography>
                                            {/* <Typography
                                                color="textSecondary"
                                                sx={{
                                                    fontSize: "13px",
                                                }}
                                            >
                                                {product.downloads}
                                            </Typography> */}
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {product.downloads}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Chip
                                        sx={{
                                            px: "4px",
                                            backgroundColor: product.pbg,
                                            color: "#fff",
                                        }}
                                        size="small"
                                        label={product.priority}
                                    ></Chip>
                                </TableCell>
                                
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default RelevantManufacturer;
