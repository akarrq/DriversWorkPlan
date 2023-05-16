import * as React from 'react';

import { Grid, Paper, Typography } from '@mui/material';

import GetWorkDaysList from './getWorkDaysList';

export default function Main() {
	return (
		<>
			<Grid
				container
				spacing={2}
				justifyContent="center"
				alignItems="center"
				sx={{ padding: 2, height: '100vh' }}
			>
				<Grid item xs={4}>
					<Typography variant="h2">Przeglądaj swoje zlecenia</Typography>
				</Grid>
				<Grid item xs={7}>
					<Paper>
						<GetWorkDaysList />
					</Paper>
				</Grid>
			</Grid>
		</>
	);
}
