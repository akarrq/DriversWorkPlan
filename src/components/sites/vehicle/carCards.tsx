import * as React from 'react';

import {
	ListItem,
	ListItemText,
	IconButton,
	List,
	ListItemAvatar,
	Avatar,
	Divider,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import { ICar } from '../../../models';

const CarCards = ({ cars }) => {
	return (
		<List>
			{cars.map((car: ICar) => (
				<>
					<ListItem
						key={car.id}
						secondaryAction={
							<IconButton edge="end" aria-label="delete">
								<EditIcon />
							</IconButton>
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
					<Divider key={car.id + 'd'} variant="inset" component="li" />
				</>
			))}
		</List>
	);
};

export default CarCards;
