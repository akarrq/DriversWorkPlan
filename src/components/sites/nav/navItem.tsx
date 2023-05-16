import * as React from 'react';

import {
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';

import { NavContext } from '../../../contexts/nav';

export default function NavItem({ navItemName, navItemIcon }) {
	const nav = React.useContext(NavContext);

	return (
		<ListItem disablePadding>
			<ListItemButton onClick={() => nav({ type: navItemName })}>
				<ListItemIcon>{navItemIcon}</ListItemIcon>
				<ListItemText primary={navItemName} />
			</ListItemButton>
		</ListItem>
	);
}
