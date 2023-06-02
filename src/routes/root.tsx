import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Grid } from '@mui/material';

import PrimaryAppBar from '../components/nav/appBar';
import NavList from '../components/nav/nav';

function App() {
	return (
		<>
			<PrimaryAppBar />
			<Grid container>
				<NavList />
				<Grid item xs={10}>
					<Outlet />
				</Grid>
			</Grid>
		</>
	);
}

export default App;
