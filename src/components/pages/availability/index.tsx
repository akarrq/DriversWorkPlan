import * as React from 'react';

import { Typography, Grid, Paper } from '@mui/material';

export default function Availability() {
	return (
		<>
			<Grid item xs={12} sm={5}>
				<Typography
					variant="h2"
					sx={{ margin: 2, fontSize: { xs: 42, sm: 60 } }}
				>
					Dostępność
				</Typography>
			</Grid>
			<Grid item xs={12} sm={7}>
				<Paper></Paper>
			</Grid>
		</>
	);
}
