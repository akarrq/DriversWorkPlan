import * as React from 'react';
import { useEffect, useState } from 'react';

import supabase from '../supabaseClient';
import { IDays } from '../models';

const WorkDaysList = () => {
	const [days, setDays] = useState<IDays[] | any>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			setLoading(true);
			let {
				data: days,
				status,
				error,
			} = await supabase.from('dwp').select('*');
			if (error && status !== 406) {
				throw error;
			}
			if (days) {
				setDays(days);
			}
		} catch (error: any) {
			alert(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			{loading ? (
				<p>loading...</p>
			) : (
				<ul>
					{days.map((day: IDays) => (
						<li key={day.id}>
							Data: {day.date}, Czas Pracy: {day.workingTime}h, Miejsce pracy:{' '}
							{day.workplace}, Jest dodatkowo płatna:{' '}
							{day.isExtraPaid ? 'TAK' : 'NIE'}
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default WorkDaysList;
