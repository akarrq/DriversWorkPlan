import { useEffect, useState } from 'react';
import supabase from '../helpers/supabaseClient';
import useNotification from './useNotification';

export interface IInitialConf {
	tableName: string;
	columns: string;
	eq?: [column: string, value: string];
}

export default function useGetData(
	initialConf: IInitialConf = { tableName: 'cars', columns: '*' }
) {
	const [conf, setConf] = useState(initialConf);
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	const [sendNotification] = useNotification();

	let request = supabase.from(conf.tableName).select(conf.columns);
	if (conf.eq) {
		request = request.eq(conf.eq[0], conf.eq[1]);
	}

	const fetchData = async () => {
		try {
			const { data, error } = await request;
			if (error) {
				throw new Error(error.message);
			}
			setData(data);
		} catch (error) {
			console.log(error);
			sendNotification({
				message: `Błąd pobierania danych (${error.message})`,
				variant: 'error',
			});
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return [data, loading];
}
