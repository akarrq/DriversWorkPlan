import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { IDays } from '../../../models';

export default function WorkDaysList({ days }) {
	return (
		<List sx={{ width: '95%', minWidth: 360, bgcolor: 'background.paper' }}>
			{days.map((day: IDays) => (
				<>
					<ListItem key={day.id} alignItems="flex-start">
						<ListItemAvatar>
							<Avatar>
								{new Intl.DateTimeFormat('pl-PL', { weekday: 'long' })
									.format(new Date(day.date))
									.toUpperCase()
									.substring(0, 2)}
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							key={day.id}
							primary={`${new Intl.DateTimeFormat('pl-PL', {
								weekday: 'long',
							}).format(new Date(day.date))} ${new Date(
								day.date
							).toLocaleDateString('pl-PL')}`}
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: 'inline' }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										{`${day.workTimeStart.substring(0, 5)} -
										${day.workTimeEnd.substring(0, 5)}`}
									</Typography>
									{` — ${day.workplace}`}
								</React.Fragment>
							}
						/>
						{day.isExtraPaid ? (
							<Chip icon={<MonetizationOnIcon />} label="Płatna extra" />
						) : (
							false
						)}
					</ListItem>
					<Divider variant="inset" component="li" />
				</>
			))}
		</List>
	);
}
