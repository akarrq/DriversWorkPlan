import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Skeleton } from '@mui/material';

import useGetData from '../../../shared/utils/useGetData';

function Row({ name, data }) {
	const [open, setOpen] = useState(false);

	return data.length ? (
		<React.Fragment>
			<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					{name}
				</TableCell>
				<TableCell align="right">{data.length}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Typography variant="h6" gutterBottom component="div">
								Historia
							</Typography>
							<Table size="small" aria-label="data">
								<TableHead>
									<TableRow>
										<TableCell>Data</TableCell>
										<TableCell>Użytkownik</TableCell>
										<TableCell align="right">
											{data[0].vehicleMileage ? 'Przebieg' : 'Opis zdarzenia'}
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{data.map((item) => (
										<TableRow key={item.created_at}>
											<TableCell component="th" scope="row">
												{new Date(item.created_at).toLocaleDateString()}{' '}
												{new Date(item.created_at).toLocaleTimeString()}
											</TableCell>
											<TableCell>admin</TableCell>
											<TableCell align="right">
												{item.vehicleIncident
													? item.vehicleIncident
													: item.vehicleMileage}
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	) : (
		<React.Fragment>
			<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					{name}
				</TableCell>
				<TableCell align="right">{data.length}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Typography variant="h6" gutterBottom component="div">
								Historia
							</Typography>
							<Table size="small" aria-label="data">
								<TableHead>
									<TableRow>
										<TableCell>Brak danych</TableCell>
									</TableRow>
								</TableHead>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

export default function CarData({ vehicleRegistrationNumber }) {
	const [vehicleMileages, loadingMileages] = useGetData({
		tableName: 'vehicleMileage',
		columns: '*',
		eq: ['vehicleRegistrationNumber', vehicleRegistrationNumber],
	});
	const [vehicleIncidents, loadingIncidents] = useGetData({
		tableName: 'vehicleIncident',
		columns: '*',
		eq: ['vehicleRegistrationNumber', vehicleRegistrationNumber],
	});

	return (
		<TableContainer>
			<Table aria-label="car data table">
				<TableBody>
					{loadingMileages ? (
						<Skeleton />
					) : (
						<Row name="Liczba dodanych przebiegów:" data={vehicleMileages} />
					)}
					{loadingIncidents ? (
						<Skeleton />
					) : (
						<Row name="Liczba dodanych zdarzeń:" data={vehicleIncidents} />
					)}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
