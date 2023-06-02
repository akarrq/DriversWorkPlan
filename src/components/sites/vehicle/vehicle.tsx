import * as React from 'react';

import { Typography, Grid, Paper } from '@mui/material';

import GetCars from './getCars';

export default function Vehicle() {
	return (
		<>
			<>
				<Grid
					container
					spacing={2}
					justifyContent="center"
					alignItems="center"
					sx={{ padding: 2, height: '100vh' }}
				>
					<Grid item xs={4}>
						<Typography variant="h2">Pojazd</Typography>
						<Typography variant="h5">Zarejestruj stan licznika</Typography>
					</Grid>
					<Grid item xs={7}>
						<Paper>
							<GetCars />
						</Paper>
					</Grid>
				</Grid>
			</>
		</>
	);
}
