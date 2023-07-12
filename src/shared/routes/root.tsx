import * as React from 'react';
import { Outlet } from 'react-router-dom';

import { Grid } from '@mui/material';
import { SnackbarProvider } from 'notistack';

import PrimaryAppBar from '../components/appBar';
import MainNavList from '../components/nav';

function App() {
	return (
		<SnackbarProvider
			anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
		>
			<Grid container sx={{ margin: 0 }}>
				<Grid item xs={12}>
					<PrimaryAppBar />
				</Grid>
				<Grid
					container
					item
					spacing={{ xs: 0, md: 3 }}
					justifyContent="center"
					sx={{
						height: [null, '90vh'],
						alignItems: ['flex-start', 'center'],
						justifyContent: ['flex-start', 'center'],
					}}
				>
					<Grid item xs={0} sm={1} sx={{ display: ['none', 'initial'] }}></Grid>
					<Outlet />
				</Grid>
			</Grid>
			<MainNavList />
		</SnackbarProvider>
	);
}

export default App;
