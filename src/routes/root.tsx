import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Grid } from '@mui/material';

import PrimaryAppBar from '../components/appBar';
import BottomNavList from '../components/nav';

function App() {
	return (
		<>
			<PrimaryAppBar />
			<Grid container>
				<Grid item xs={12} sm={10}>
					<Outlet />
				</Grid>
			</Grid>
			<BottomNavList />
		</>
	);
}

export default App;
