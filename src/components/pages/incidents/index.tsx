import * as React from 'react';

import { Typography, Grid, Paper } from '@mui/material';
import GetCars from '../vehicle/getCars';

export default function Incidents() {
	return (
		<>
			<Grid item xs={12} sm={5}>
				<Typography
					variant="h2"
					sx={{ margin: 2, fontSize: { xs: 42, sm: 60 } }}
				>
					Zdarzenia
				</Typography>
				<Typography
					variant="h5"
					sx={{ margin: 2, fontSize: { xs: 20, sm: 24 } }}
				>
					Zarejestruj zdarzenie
				</Typography>
			</Grid>
			<Grid item xs={12} sm={7}>
				<Paper>
					<GetCars />
				</Paper>
			</Grid>
		</>
	);
}
