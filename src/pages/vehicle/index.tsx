import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Typography, Grid, Paper } from '@mui/material';

export default function Vehicle() {
	return (
		<>
			<Grid item xs={12} sm={4}>
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
