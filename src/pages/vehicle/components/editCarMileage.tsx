import React, { useState, useMemo, useEffect } from 'react';
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
	FormHelperText,
	useFormControl,
	Box,
	OutlinedInput,
} from '@mui/material';

import supabase from '../../../shared/helpers/supabaseClient';

import useNotification from '../../../shared/utils/useNotification';
import { ICar, INotification } from '../../../shared/interface/models';

export const addCarMileageAction = async ({ params, request }) => {
	let formData = await request.formData();
	let intent = formData.get('intent');
	let status: INotification | undefined;

	const submission = {
		vehicleRegistrationNumber: params.id,
		vehicleMileage: formData.get('vehicleMileage'),
	};

	if (intent === 'send') {
		try {
			const { error } = await supabase
				.from('vehicleMileage')
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

function HelperText({ vehicleMileage }) {
	const { focused } = useFormControl() || {};

	const helperText = useMemo(() => {
		if ((focused && vehicleMileage == '') || undefined) {
			return 'Wpisz przebieg';
		} else if (focused && Number.isNaN(Number(vehicleMileage))) {
			return 'Przebieg musi być liczbą';
		} else if (focused && !Number.isNaN(Number(vehicleMileage))) {
			return 'Zatwierdź przebieg';
		} else if (!focused) {
			return ' ';
		}
		return ' ';
	}, [vehicleMileage]);

	return <FormHelperText>{helperText}</FormHelperText>;
}

export default function EditCarMileage() {
	const { state: car } = useLocation();
	const [vehicleMileage, setVehicleMileage] = useState<string | number>();
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
				Wpisz aktualny przebieg pojazdu
			</Typography>
			<Typography variant="h5" component="div">
				{car?.vehicleRegistrationNumber || carMem!.vehicleRegistrationNumber}
			</Typography>
			<Typography sx={{ mb: 1.5 }} color="text.secondary">
				{car?.vehicleBrand || carMem!.vehicleBrand}
			</Typography>
			<Box component={Form} method="post" noValidate autoComplete="off">
				<FormControl>
					<OutlinedInput
						name="vehicleMileage"
						placeholder="Przebieg"
						inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
						value={vehicleMileage}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							setVehicleMileage(
								Number(event.target.value)
									? Number(event.target.value)
									: event.target.value
							);
						}}
					/>
					<HelperText vehicleMileage={vehicleMileage} />
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
