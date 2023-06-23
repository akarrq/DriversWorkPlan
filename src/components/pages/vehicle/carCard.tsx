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
					Tu będą wykresiki i zarejestrowane zdarzenia! Lorem ipsum dolor sit
					amet consectetur adipisicing elit. Eligendi consequuntur totam numquam
					saepe suscipit rerum. Labore facilis adipisci, voluptatum provident,
					fugiat nulla ab veniam cum eos suscipit rerum impedit corrupti!
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
