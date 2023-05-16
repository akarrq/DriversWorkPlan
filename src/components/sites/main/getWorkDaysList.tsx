import * as React from 'react';
import { useEffect, useState } from 'react';

import supabase from '../../../supabaseClient';
import { IDays } from '../../../models';
import WorkDaysList from './workDayList';

const GetWorkDaysList = () => {
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

	return <>{loading ? <p>loading...</p> : <WorkDaysList days={days} />}</>;
};

export default GetWorkDaysList;
