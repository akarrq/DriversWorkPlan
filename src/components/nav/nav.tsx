import * as React from 'react';

import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CarCrashIcon from '@mui/icons-material/CarCrash';

const navList = [
	{ id: 0, name: 'Dashboard', icon: <DashboardIcon /> },
	{ id: 1, name: 'Dostępność', icon: <AssessmentIcon /> },
	{ id: 2, name: 'Pojazd', icon: <DirectionsCarIcon /> },
	{ id: 3, name: 'Zdarzenia', icon: <CarCrashIcon /> },
];

export default navList;
