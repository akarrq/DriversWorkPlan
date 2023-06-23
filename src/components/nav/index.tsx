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
			sx={{ maxHeight: '100px' }}
		/>
	));

export default function MainNavList() {
	const [value, setValue] = React.useState('Dashboard');
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	const BottomNav = () => (
		<BottomNavigation
			sx={{ position: 'fixed', bottom: 0, right: 0, left: 0 }}
			value={value}
			onChange={handleChange}
		>
			{navElements()}
		</BottomNavigation>
	);

	const LeftNav = () => (
		<BottomNavigation
			sx={{
				flexDirection: 'column',
				position: 'fixed',
				top: 0,
				bottom: 0,
				left: 0,
				width: 100,
				height: () => window.innerHeight - 40,
				margin: '20px',
				borderRadius: 5,
				boxShadow:
					'0px 2px 4px -1px #0003, 0px 4px 5px 0px #00000024, 0px 1px 10px 0px #0000001f',
			}}
			value={value}
			onChange={handleChange}
		>
			{navElements()}
		</BottomNavigation>
	);

	const Nav = () => (window.innerWidth < 600 ? <BottomNav /> : <LeftNav />);

	return <Nav />;
}
