import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Typography, Grid, Paper } from '@mui/material';

import supabase from '../../../helpers/supabaseClient';

export const vehiclesLoader = async () => {
	try {
		let { data, status, error } = await supabase.from('cars').select('*');
		if (error && status !== 406) {
			return [
				{
					vehicleBrand: 'Oops',
					vehicleRegistrationNumber: 'Something went wrong',
				},
			];
		}
		if (data) {
			return data;
		}
	} catch (error: any) {
		throw error;
	}
};

export default function Vehicle() {
	return (
		<>
			<Grid item xs={12} sm={5}>
				<Typography
					variant="h2"
					sx={{ margin: 2, fontSize: { xs: 42, sm: 60 } }}
				>
					Pojazd
				</Typography>
			</Grid>
			<Grid item xs={12} sm={7}>
				<Paper>
					<Outlet />
				</Paper>
			</Grid>
		</>
	);
}
