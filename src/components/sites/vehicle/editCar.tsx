import {
	CardContent,
	Typography,
	CardActions,
	Button,
	FormControl,
	FormHelperText,
	useFormControl,
	Box,
	OutlinedInput,
} from '@mui/material';
import * as React from 'react';

import supabase from '../../../supabaseClient';

export default function EditCar({
	vehicleRegistrationNumber,
	vehicleBrand,
	setIsCarEdit,
}: {
	vehicleRegistrationNumber: string;
	vehicleBrand: string;
	setIsCarEdit: Function;
}) {
	const [vehicleMileage, setVehicleMileage] = React.useState<string | number>();

	function HelperText() {
		const { focused } = useFormControl() || {};

		const helperText = React.useMemo(() => {
			console.log(vehicleMileage);
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

	function handleSubmit(
		e: React.FormEvent,
		vehicleRegistrationNumber: string,
		vehicleMileage: number | string
	) {
		let vehicleMileageNumber = Number(vehicleMileage);
		if (Number.isNaN(vehicleMileageNumber)) {
			alert('Przebieg musi być liczbą');
			return;
		}

		e.preventDefault();
		saveVehicleMileage(vehicleRegistrationNumber, vehicleMileageNumber);
	}

	async function saveVehicleMileage(
		vehicleRegistrationNumber: string,
		vehicleMileage: number
	) {
		try {
			const { error } = await supabase.from('vehicleMileage').insert([
				{
					vehicleRegistrationNumber: vehicleRegistrationNumber,
					vehicleMileage: vehicleMileage,
				},
			]);
			if (error) {
				throw error;
			}
			alert('Task successfully added');
			setVehicleMileage('');
		} catch (error: any) {
			alert(error.message);
		}
	}

	return (
		<>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
					Wpisz aktualny przebieg pojazdu
				</Typography>
				<Typography variant="h5" component="div">
					{vehicleRegistrationNumber}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					{vehicleBrand}
				</Typography>
				<Box component="form" noValidate autoComplete="off">
					<FormControl>
						<OutlinedInput
							id="vehicleMileage"
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
					</FormControl>
				</Box>
			</CardContent>
			<CardActions>
				<Button
					size="small"
					variant="outlined"
					onClick={() => setIsCarEdit(false)}
				>
					Anuluj
				</Button>
				<Button
					size="small"
					variant="contained"
					onClick={(e) =>
						handleSubmit(e, vehicleRegistrationNumber, vehicleMileage!)
					}
				>
					Zatwierdź
				</Button>
			</CardActions>
		</>
	);
}
