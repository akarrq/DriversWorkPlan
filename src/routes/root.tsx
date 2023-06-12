import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Grid } from '@mui/material';

import PrimaryAppBar from '../components/appBar';
import BottomNavList from '../components/nav';

function App() {
	return (
		<>
			<PrimaryAppBar />
			<Grid
				container
				spacing={{ xs: 1, md: 3 }}
				justifyContent="center"
				sx={{
					height: [null, '90vh'],
					alignItems: ['flex-start', 'center'],
					justifyContent: ['flex-start', 'center'],
				}}
			>
				<Outlet />
			</Grid>
			<BottomNavList />
		</>
	);
}

export default App;
