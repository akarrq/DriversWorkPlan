import React, { useState, useMemo } from 'react';
import { Form, redirect, useLocation } from 'react-router-dom';

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

import supabase from '../../../helpers/supabaseClient';

export const addCarMileageAction = async ({ params, request }) => {
	let formData = await request.formData();
	let intent = formData.get('intent');

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
			} else alert('Task successfully added');
		} catch (error: any) {
			alert(error.message);
		}
		redirect('/DriversWorkPlan/Pojazd/');
	}

	return redirect('/DriversWorkPlan/Pojazd/');
};

export default function EditCarMileage() {
	let { state: car } = useLocation();
	const [vehicleMileage, setVehicleMileage] = useState<string | number>();

	function HelperText() {
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
		}, [focused]);

		return <FormHelperText>{helperText}</FormHelperText>;
	}

	return (
		<CardContent>
			<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
				Wpisz aktualny przebieg pojazdu
			</Typography>
			<Typography variant="h5" component="div">
				{car.vehicleRegistrationNumber}
			</Typography>
			<Typography sx={{ mb: 1.5 }} color="text.secondary">
				{car.vehicleBrand}
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
					<HelperText />
					<Button size="small" variant="outlined" type="submit">
						Anuluj
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
