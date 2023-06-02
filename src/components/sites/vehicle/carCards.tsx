import * as React from 'react';

import {
	ListItem,
	ListItemText,
	IconButton,
	List,
	ListItemAvatar,
	Avatar,
	Divider,
	Tooltip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import { ICar } from '../../../interface/models';
import EditCar from './editCar';

const CarCards = ({ cars }) => {
	const [isCarEdit, setIsCarEdit] = React.useState(false);
	const [vehicleRegistrationNumber, setVehicleRegistrationNumber] =
		React.useState<string>('');
	const [vehicleBrand, setVehicleBrand] = React.useState<string>('');

	return isCarEdit ? (
		<EditCar
			vehicleRegistrationNumber={vehicleRegistrationNumber}
			vehicleBrand={vehicleBrand}
			setIsCarEdit={setIsCarEdit}
		/>
	) : (
		<List>
			{cars.map((car: ICar) => (
				<>
					<ListItem
						key={car.id}
						secondaryAction={
							<Tooltip title="Wpisz przebieg">
								<IconButton
									onClick={() => {
										setVehicleRegistrationNumber(
											car.vehicleRegistrationNumber!
										);
										setVehicleBrand(car.vehicleBrand!);
										setIsCarEdit(true);
										console.log(car.vehicleRegistrationNumber);
									}}
									edge="end"
									aria-label="delete"
								>
									<EditIcon />
								</IconButton>
							</Tooltip>
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
