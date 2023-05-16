import * as React from 'react';

import { Typography, Grid, Paper } from '@mui/material';

export default function Incidents() {
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
						<Typography variant="h2">Zdarzenia</Typography>
					</Grid>
					<Grid item xs={7}>
						<Paper></Paper>
					</Grid>
				</Grid>
			</>
		</>
	);
}
