import { Grid, Paper, Typography } from '@mui/material';
import PrimarySearchAppBar from './components/nav';

import WorkDaysList from './components/workDaysList';

function App() {
	return (
		<>
			<PrimarySearchAppBar />
			<Grid
				container
				spacing={3}
				justifyContent="center"
				alignItems="center"
				sx={{ padding: 2, height: '100vh' }}
			>
				<Grid item xs={4}>
					<Typography variant="h1">Przeglądaj swoje zmiany</Typography>
				</Grid>
				<Grid item xs={6}>
					<Paper>
						<WorkDaysList />
					</Paper>
				</Grid>
				<Grid item xs={2}></Grid>
			</Grid>
		</>
	);
}

export default App;
