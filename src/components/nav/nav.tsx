import * as React from 'react';
import { Box, Grid, List } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CarCrashIcon from '@mui/icons-material/CarCrash';

import NavItem from './navItem';

export default function NavList() {
	return (
		<Grid item xs={2}>
			<Box
				sx={{
					width: '100%',
					height: '100vh',
					maxWidth: 360,
					bgcolor: 'background.paper',
				}}
			>
				<nav aria-label="main menu">
					<List>
						<NavItem navItemName="Dashboard" navItemIcon={<DashboardIcon />} />
						<NavItem
							navItemName="Dostępność"
							navItemIcon={<AssessmentIcon />}
						/>
						<NavItem navItemName="Pojazd" navItemIcon={<DirectionsCarIcon />} />
						<NavItem navItemName="Zdarzenia" navItemIcon={<CarCrashIcon />} />
					</List>
				</nav>
			</Box>
		</Grid>
	);
}
