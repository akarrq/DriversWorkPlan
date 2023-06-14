import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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

export default function CarCard() {
	let { state: car } = useLocation();
	const navigate = useNavigate();
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
				<Typography variant="body2" color="text.secondary">
					Lizards are a widespread group of squamate reptiles, with over 6,000
					species, ranging across all continents except Antarctica
				</Typography>
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
			</CardActions>
		</Card>
	);
}
