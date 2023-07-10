import * as React from 'react';
import {
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Avatar,
	Typography,
	Chip,
} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

import { IDay } from '../../../shared/interface/models';
import useGetData from '../../../shared/utils/useGetData';
import ListSkeleton from '../../../shared/components/ListSkeleton';

const shortDayName = (day: IDay) =>
	new Intl.DateTimeFormat('pl-PL', { weekday: 'long' })
		.format(new Date(day.date))
		.toUpperCase()
		.substring(0, 2);

const dayAndDate = (day: IDay) =>
	`${new Intl.DateTimeFormat('pl-PL', {
		weekday: 'long',
	}).format(new Date(day.date))} ${new Date(day.date).toLocaleDateString(
		'pl-PL'
	)}`;

const chipExtraPaid = (day: IDay) =>
	day.isExtraPaid ? (
		<Chip icon={<MonetizationOnIcon />} label="Płatna extra" />
	) : (
		false
	);

const ListItems = ({ days }) =>
	days.map((day: IDay) => (
		<ListItem key={day.id}>
			<ListItemAvatar>
				<Avatar>{shortDayName(day)}</Avatar>
			</ListItemAvatar>
			<ListItemText
				primary={dayAndDate(day)}
				secondary={
					<>
						<Typography component="span" variant="body2" color="text.primary">
							{`${day.workTimeStart.substring(0, 5)} -
										${day.workTimeEnd.substring(0, 5)}`}
						</Typography>
						{` — ${day.workplace}`}
					</>
				}
			/>
			{chipExtraPaid(day)}
		</ListItem>
	));

export default function WorkDaysList() {
	const [days, loadingDays] = useGetData({
		tableName: 'dwp',
		columns: '*',
	});

	return (
		<List>
			{loadingDays ? <ListSkeleton items={3} /> : <ListItems days={days} />}
		</List>
	);
}
