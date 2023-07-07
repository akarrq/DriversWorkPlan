import * as React from 'react';

import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const navList = [
	{ id: 0, name: 'Dashboard', icon: <DashboardIcon /> },
	{ id: 1, name: 'Dostępność', icon: <AssessmentIcon /> },
	{ id: 2, name: 'Pojazd', icon: <DirectionsCarIcon /> },
];

export default navList;
