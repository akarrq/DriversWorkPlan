import * as React from 'react';

import { Grid, Paper, Typography } from '@mui/material';

import GetWorkDaysList from './getWorkDaysList';

export default function Main() {
	return (
		<>
			<Grid item xs={12} sm={5}>
				<Typography
					variant="h2"
					sx={{ margin: 2, fontSize: { xs: 42, sm: 60 } }}
				>
					Przeglądaj swoje zlecenia
				</Typography>
			</Grid>
			<Grid item xs={12} sm={7}>
				<Paper>
					<GetWorkDaysList />
				</Paper>
			</Grid>
		</>
	);
}
