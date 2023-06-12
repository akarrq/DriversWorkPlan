import * as React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Link } from 'react-router-dom';

import navList from './nav';

const navElements = () =>
	navList.map((element) => (
		<BottomNavigationAction
			key={element.id}
			label={element.name}
			icon={element.icon}
			value={element.name}
			to={`/DriversWorkPlan/${element.name}`}
			component={Link}
		/>
	));

export default function BottomNavList() {
	const [value, setValue] = React.useState('Dashboard');
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<BottomNavigation
			sx={{ position: 'fixed', bottom: 0, right: 0, left: 0 }}
			value={value}
			onChange={handleChange}
		>
			{navElements()}
		</BottomNavigation>
	);
}
