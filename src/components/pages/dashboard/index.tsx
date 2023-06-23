import * as React from 'react';

import { Grid, Paper, Typography } from '@mui/material';

import supabase from '../../../helpers/supabaseClient';

import WorkDaysList from './workDaysList';
import { useLoaderData } from 'react-router-dom';

export const workDaysLoader = async () => {
	try {
		let { data: days, status, error } = await supabase.from('dwp').select('*');
		if (error && status !== 406) {
			throw error;
		}
		if (days) {
			return days;
		}
	} catch (error: any) {
		alert(error.message);
	}
};

export default function Dashboard() {
	const days = useLoaderData();
	return (
		<>
			<Grid item xs={12} sm={4}>
				<Typography
					variant="h2"
					sx={{ margin: 2, fontSize: { xs: 42, sm: 60 } }}
				>
					Przeglądaj swoje zlecenia
				</Typography>
			</Grid>
			<Grid item xs={12} sm={7}>
				<Paper>
					<WorkDaysList days={days} />
				</Paper>
			</Grid>
		</>
	);
}
