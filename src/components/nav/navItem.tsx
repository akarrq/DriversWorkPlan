import * as React from 'react';
import { NavLink } from 'react-router-dom';

import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';

const linkStyle = { width: '100%', textDecoration: 'none', color: '#757575' };
const activeLinkStyle = {
	width: '100%',
	textDecoration: 'none',
	color: '#1976d2',
};

export default function NavItem({ navItemName, navItemIcon }) {
	return (
		<ListItem disablePadding>
			<NavLink
				to={`/DriversWorkPlan/${navItemName}`}
				style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
			>
				<ListItemButton>
					<ListItemIcon>{navItemIcon} </ListItemIcon>
					<ListItemText primary={navItemName} />
				</ListItemButton>
			</NavLink>
		</ListItem>
	);
}
