import * as React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import {
	ListItem,
	ListItemText,
	IconButton,
	List,
	ListItemAvatar,
	Avatar,
	Tooltip,
	ListItemButton,
} from '@mui/material';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import { ICar } from '../../../interface/models';

const CarsList = () => {
	const cars = useLoaderData() as ICar[];

	return (
		<List>
			{cars.map((car: ICar) => (
				<ListItem
					disablePadding
					key={car.id}
					secondaryAction={
						<Link
							to={`${car.vehicleRegistrationNumber}/Przebieg`}
							state={{
								vehicleBrand: car.vehicleBrand,
								vehicleRegistrationNumber: car.vehicleRegistrationNumber,
							}}
						>
							<Tooltip title="Wpisz przebieg">
								<IconButton edge="end" aria-label="edit">
									<AvTimerIcon />
								</IconButton>
							</Tooltip>
						</Link>
					}
				>
					<ListItemButton
						component={Link}
						to={`/DriversWorkPlan/Pojazd/${car.vehicleRegistrationNumber}`}
						state={{
							vehicleBrand: car.vehicleBrand,
							vehicleRegistrationNumber: car.vehicleRegistrationNumber,
						}}
					>
						<ListItemAvatar>
							<Avatar>
								<DirectionsCarIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={car.vehicleRegistrationNumber}
							secondary={car.vehicleBrand}
						></ListItemText>
					</ListItemButton>
				</ListItem>
			))}
		</List>
	);
};

export default CarsList;
