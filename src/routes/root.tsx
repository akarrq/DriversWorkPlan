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
			<PrimaryAppBar />
			<Grid
				container
				spacing={{ xs: 1, md: 3 }}
				justifyContent="center"
				sx={{
					paddingLeft: [null, '140px'],
					height: [null, '90vh'],
					alignItems: ['flex-start', 'center'],
					justifyContent: ['flex-start', 'center'],
				}}
			>
				<Outlet />
			</Grid>
			<MainNavList />
		</SnackbarProvider>
	);
}

export default App;
