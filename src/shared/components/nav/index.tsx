import * as React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import navList from './nav';

const navElements = () =>
	navList.map((element) => (
		<BottomNavigationAction
			key={element.id}
			label={element.name}
			icon={element.icon}
			value={element.name}
			to={
				element.name === 'Dashboard'
					? '/DriversWorkPlan/'
					: `/DriversWorkPlan/${element.name}`
			}
			component={Link}
			sx={{ maxHeight: '100px' }}
		/>
	));

export default function MainNavList() {
	const { pathname } = useLocation();
	const [value, setValue] = React.useState(pathname.split('/')[2]);
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<BottomNavigation
			showLabels
			sx={{
				position: 'fixed',
				flexDirection: ['row', 'column'],
				top: [null, 0],
				bottom: 0,
				right: [0, null],
				left: 0,
				width: ['100%', 100],
				height: ['54px', '95%'],
				margin: [null, '20px'],
				borderRadius: [null, 5],
				boxShadow:
					'0px 2px 4px -1px #0003, 0px 4px 5px 0px #00000024, 0px 1px 10px 0px #0000001f',
			}}
			value={value === '' ? 'Dashboard' : value}
			onChange={handleChange}
		>
			{navElements()}
		</BottomNavigation>
	);
}
