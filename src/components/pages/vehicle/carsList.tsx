import * as React from 'react';
import { Link } from 'react-router-dom';

import {
	ListItem,
	ListItemText,
	IconButton,
	List,
	ListItemAvatar,
	Avatar,
	Tooltip,
	ListItemButton,
	Skeleton,
} from '@mui/material';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import { ICar } from '../../../interface/models';
import useGetData from '../../../utils/useGetData';

const CarsList = () => {
	const [cars, loading] = useGetData({
		tableName: 'cars',
		columns: '*',
	});

	return (
		<List>
			{loading ? <ListSkeleton items={4} /> : <ListItems cars={cars} />}
		</List>
	);
};

export const ListSkeleton = ({ items = 1 }) => {
	const skeletons = Array(items).fill(null);
	return (
		<>
			{skeletons.map((skeleton, i) => (
				<ListItem
					key={i}
					secondaryAction={
						<IconButton edge="end">
							<Skeleton variant="circular" width={30} height={30} />
						</IconButton>
					}
				>
					<ListItemAvatar>
						<Skeleton variant="circular" width={40} height={40} />
					</ListItemAvatar>
					<ListItemText primary={<Skeleton />} secondary={<Skeleton />} />
				</ListItem>
			))}
		</>
	);
};

const ListItems = ({ cars }) =>
	cars.map((car: ICar) => (
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
				/>
			</ListItemButton>
		</ListItem>
	));

export default CarsList;
