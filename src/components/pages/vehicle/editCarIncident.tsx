import React, { useState, useEffect } from 'react';
import {
	Form,
	redirect,
	useLocation,
	useActionData,
	useNavigate,
} from 'react-router-dom';

import {
	CardContent,
	Typography,
	Button,
	FormControl,
	Box,
	OutlinedInput,
	TextField,
	MenuItem,
} from '@mui/material';

import supabase from '../../../helpers/supabaseClient';

import useNotification from '../../../utils/useNotification';
import { ICar, INotification } from '../../../interface/models';

const incidentTypes = [
	{
		value: 'nieporządek',
		label: 'nieporządek',
	},
	{
		value: 'zderzenie',
		label: 'zderzenie',
	},
	{
		value: 'uszkodzenie pojazdu',
		label: 'uszkodzenie pojazdu',
	},
];

export const addCarIncidentAction = async ({ params, request }) => {
	let formData = await request.formData();
	let intent = formData.get('intent');
	let status: INotification | undefined;

	const submission = {
		vehicleRegistrationNumber: params.id,
		vehicleIncident: formData.get('vehicleIncident'),
		incidentType: formData.get('incidentType'),
	};

	if (intent === 'send') {
		try {
			const { error } = await supabase
				.from('vehicleIncident')
				.insert([submission]);
			if (error) {
				throw error;
			} else status = { message: 'Zapisano zmiany!', variant: 'success' };
		} catch (error: any) {
			status = { message: 'Coś poszło nie tak. :(', variant: 'error' };
			console.log(error);
		}
	}

	if (intent === 'back') {
		return redirect('/DriversWorkPlan/Pojazd/');
	}
	return status;
};

export default function EditCarIncident() {
	const { state: car } = useLocation();
	const [vehicleIncident, setVehicleIncident] = useState<string>();
	const [incidentType, setIncidentType] = useState<string>('');
	const [carMem, setCarMem] = useState<ICar>();
	const [sendNotification] = useNotification();
	const status = useActionData() as INotification;
	const navigate = useNavigate();

	useEffect(() => {
		if (status?.message) {
			sendNotification({ message: status.message, variant: status.variant });
			navigate('/DriversWorkPlan/Pojazd/');
		}
	}, [status]);

	useEffect(() => setCarMem(car), []);

	return (
		<CardContent>
			<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
				Wybierz rodzaj zdarzenia i opisz je
			</Typography>
			<Typography variant="h5" component="div">
				{car?.vehicleRegistrationNumber || carMem!.vehicleRegistrationNumber}
			</Typography>
			<Typography sx={{ mb: 1.5 }} color="text.secondary">
				{car?.vehicleBrand || carMem!.vehicleBrand}
			</Typography>
			<Box component={Form} method="post" noValidate autoComplete="off">
				<FormControl>
					<TextField
						name="incidentType"
						select
						label="Typ zdarzenia"
						helperText="Wybierz typ zdarzenia"
						value={incidentType}
						onChange={(event) => {
							setIncidentType(event.target.value);
						}}
					>
						{incidentTypes.map((option) => (
							<MenuItem key={option.value} value={option.value}>
								{option.label}
							</MenuItem>
						))}
					</TextField>
					<TextField
						name="vehicleIncident"
						placeholder="Opis zdarzenia"
						multiline
						margin="normal"
						rows={4}
						value={vehicleIncident}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							setVehicleIncident(event.target.value);
						}}
					/>
					<Button
						size="small"
						variant="outlined"
						type="submit"
						name="intent"
						value="back"
					>
						Powrót
					</Button>
					<Button
						size="small"
						variant="contained"
						type="submit"
						name="intent"
						value="send"
					>
						Zatwierdź
					</Button>
				</FormControl>
			</Box>
		</CardContent>
	);
}
