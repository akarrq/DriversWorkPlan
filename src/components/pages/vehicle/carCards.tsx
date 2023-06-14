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
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import { ICar } from '../../../interface/models';

const CarCards = () => {
	const cars: ICar[] = useLoaderData();

	return (
		<List>
			{cars.map((car: ICar) => (
				<ListItem
					key={car.id}
					secondaryAction={
						<Link
							to={`${car.vehicleRegistrationNumber}`}
							state={{
								vehicleBrand: car.vehicleBrand,
								vehicleRegistrationNumber: car.vehicleRegistrationNumber,
							}}
						>
							<Tooltip title="Wpisz przebieg">
								<IconButton edge="end" aria-label="delete">
									<EditIcon />
								</IconButton>
							</Tooltip>
						</Link>
					}
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
				</ListItem>
			))}
		</List>
	);
};

export default CarCards;
