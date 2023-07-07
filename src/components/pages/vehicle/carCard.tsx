import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
	Avatar,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Typography,
} from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import CarData from './carData';

export default function CarCard() {
	let { state: car } = useLocation();

	return (
		<Card>
			<CardHeader
				avatar={
					<Avatar aria-label="car">
						<DirectionsCarIcon />
					</Avatar>
				}
				title={car.vehicleRegistrationNumber}
				subheader={car.vehicleBrand}
			/>
			<CardContent>
				<Typography variant="h6" color="text.primary" padding={1}>
					Przeglądaj dane pojazdu.
				</Typography>
				<CarData vehicleRegistrationNumber={car.vehicleRegistrationNumber} />
			</CardContent>
			<CardActions>
				<Button
					size="small"
					variant="outlined"
					component={Link}
					to="/DriversWorkPlan/Pojazd/"
				>
					Anuluj
				</Button>
				<Button
					size="small"
					variant="contained"
					component={Link}
					to={`/DriversWorkPlan/Pojazd/${car.vehicleRegistrationNumber}/Przebieg`}
					state={{
						vehicleBrand: car.vehicleBrand,
						vehicleRegistrationNumber: car.vehicleRegistrationNumber,
					}}
				>
					Wpisz przebieg
				</Button>
				<Button
					size="small"
					variant="contained"
					component={Link}
					to={`/DriversWorkPlan/Pojazd/${car.vehicleRegistrationNumber}/Zdarzenie`}
					state={car}
				>
					Dodaj zdarzenie
				</Button>
			</CardActions>
		</Card>
	);
}
