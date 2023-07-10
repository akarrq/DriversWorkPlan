import React from 'react';

import {
	ListItem,
	IconButton,
	Skeleton,
	ListItemAvatar,
	ListItemText,
} from '@mui/material';

const ListSkeleton = ({ items = 1 }) => {
	const skeletons = Array(items).fill(null);
	return (
		<>
			{skeletons.map((skeleton, i) => (
				<ListItem
					key={i}
					secondaryAction={
						<IconButton edge="end">
							<Skeleton variant="circular" width={30} height={30} />
						</IconButton>
					}
				>
					<ListItemAvatar>
						<Skeleton variant="circular" width={40} height={40} />
					</ListItemAvatar>
					<ListItemText primary={<Skeleton />} secondary={<Skeleton />} />
				</ListItem>
			))}
		</>
	);
};

export default ListSkeleton;
